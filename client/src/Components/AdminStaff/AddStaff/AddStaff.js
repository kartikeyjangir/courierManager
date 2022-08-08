import React, { useState } from "react";
import { addstaff } from "../../../api/admin";

function AddStaff() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [branch, setBranch] = useState("");
  const [address, setAddress] = useState("");

  const addnewstaff = () => {
    if (
      name == "" ||
      phone == "" ||
      email == "" ||
      address == "" ||
      password == "" ||
      branch == ""
    )
      alert("Please enter all details");
    else {
      const data = {
        name: name,
        phone: phone,
        branch: branch,
        email: email,
        password: password,
        address: address,
      };
      console.log(data);
      addstaff(data)
        .then((res) => {
          console.log(res);
          alert("Staff added");
          setName("");
          setPhone("");
          setEmail("");
          setPassword("");
          setBranch("");
          setAddress("");
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
      <h1>Add Staff</h1>
      <div className="form">
        <input
          type="text"
          value={branch}
          placeholder="Branch"
          onChange={(e) => setBranch(e.target.value)}
        />
        <input
          type="text"
          value={name}
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <input
          type="text"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <input
          type="number"
          value={phone}
          placeholder="phone"
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          value={address}
          placeholder="address"
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="buttonSend" onClick={addnewstaff}>
          Add Staff
        </button>
      </div>
    </div>
  );
}

export default AddStaff;
