import React, { useState } from "react";
import { getauth } from "../../api/auth";
import "./Home.css";

function Home({ history }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const verify = () => {
    if (email == "" || pass == "") alert("Please Enter all details");
    else {
      const data = { email: email, password: pass };
      getauth(data)
        .then((res) => {
          if (!res.data.found) alert("User does not exist");
          else {
            const response = res.data._doc;
            if (response.role === "admin") {
              history.push("/admin/managebranch");
            } else history.push("/staff/updatestatus");
          }
        })
        .catch((err) => {
          if (err.response) {
            console.log(err);
          }
        });
    }
  };

  return (
    <div>
      <div className="mainlogindiv">
        <div className="form loginform">
          <h1>LOGIN</h1>
          <input
            type="text"
            placeholder="deepak@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="itsdeepu@786"
            onChange={(e) => setPass(e.target.value)}
          />

          <div className="pass">Forgot Password?</div>

          <button className="buttonSend" onClick={verify}>
            Log IN
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
