import React, { useState, useEffect } from "react";
import { updatestaff, getSingleStaff } from "../../../api/admin";
import { Button } from "react-bootstrap";

function EditStaff() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [branch, setBranch] = useState("");
  const [address, setAddress] = useState("");
  const [isValidUser, setIsValidUser] = useState(true);

  const editDetails = () => {
    let uid = window.location.pathname;
    uid = uid.substring(17);
    const data = {
      name: name,
      address: address,
      phone: phone,
      branch: branch,
      email: email,
      password: password,
      _id: uid,
    };
    // console.log(uid);
    // console.log(data);
    updatestaff(data)
      .then((res) => {
        if (res.data.found) alert("Updated Successfully");
        else alert("Sorry Not Found");
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
        }
      });
  };

  const getstaff = () => {
    let uid = window.location.pathname;
    uid = uid.substring(17);
    // console.log(uid);

    getSingleStaff(uid)
      .then((res) => {
        if (!res.data.found) setIsValidUser(false);
        else {
          // console.log(res.data._doc);
          const staffData = res.data._doc;
          setEmail(staffData.email);
          setPhone(staffData.phone);
          setBranch(staffData.branch);
          setAddress(staffData.address);
          setPassword(staffData.password);
          setName(staffData.name);
        }
      })
      .catch((err) => {
        if (err.response) console.log(err);
      });
  };

  useEffect(() => {
    getstaff();
  }, []);
  return (
    <>
      {isValidUser ? (
        <div>
          <h1>Edit Staff</h1>
          <div className="form updatestaff">
            <input
              type="text"
              value={email}
              placeholder="email"
              disabled="true"
            />{" "}
            <input
              type="text"
              placeholder={"Branch"}
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
            />
            <input
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />{" "}
            <input
              type="text"
              value={phone}
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              value={address}
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="buttonSend" onClick={editDetails}>
              UPDATE
            </button>
          </div>
        </div>
      ) : (
        <h1> User does not exist</h1>
      )}
    </>
  );
}

export default EditStaff;
