import React, { useState } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

import { addbranch } from "../../../api/admin";
import "./AddBranch.css";

function AddBranch() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [country, setCountry] = useState("");

  const addBranchFun = () => {
    if (
      name == "" ||
      phone == "" ||
      email == "" ||
      address == "" ||
      city == "" ||
      state == "" ||
      pincode == "" ||
      country == ""
    )
      alert("Please enter all details");
    else {
      const data = {
        name: name,
        phone: phone,
        email: email,
        address: address,
        city: city,
        state: state,
        pincode: pincode,
        country: country,
      };
      // console.log(data);
      addbranch(data)
        .then((res) => {
          if (res.status === 201) {
            alert("Branch added successfully");

            setName("");
            setPhone("");
            setEmail("");
            setAddress("");
            setCity("");
            setState("");
            setPincode("");
            setCountry("");
          } else {
            alert("Sorry something went wrong");
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
      <h1>Add Branch</h1>
      <div className="form addbranch">
        <Container>
          <Row>
            <Col>
              <input
                required
                type="text"
                value={name}
                placeholder=" Branch name"
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
            </Col>
            <Col>
              <input
                type="text"
                value={city}
                placeholder="city"
                onChange={(e) => setCity(e.target.value)}
              />{" "}
              <input
                type="text"
                value={state}
                placeholder="State"
                onChange={(e) => setState(e.target.value)}
              />{" "}
              <input
                type="number"
                value={pincode}
                placeholder="pincode"
                onChange={(e) => setPincode(e.target.value)}
              />{" "}
              <input
                type="text"
                value={country}
                placeholder="country"
                onChange={(e) => setCountry(e.target.value)}
              />
            </Col>
            <Row></Row>
          </Row>
        </Container>
        <button className="buttonSend" onClick={addBranchFun}>
          Add Branch
        </button>
      </div>
    </div>
  );
}

export default AddBranch;
