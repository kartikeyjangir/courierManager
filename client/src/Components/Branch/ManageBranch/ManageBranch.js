import React, { useState, useEffect } from "react";
import "./ManageBranch.css";
import { getBranch } from "../../../api/admin";
import { Table, Container, Button, Row } from "react-bootstrap";

function ManageBranch() {
  const [branches, setBranches] = useState([]);
  const getallbranch = () => {
    getBranch()
      .then((res) => {
        // console.log(res.data);
        setBranches(res.data);
      })
      .catch((err) => {
        if (err) console.log(err);
      });
  };

  useEffect(() => {
    getallbranch();
  }, []);
  return (
    <div>
      <h1>Manage Branch</h1>

      <Container>
        {branches.map((val, index) => {
          return (
            <Row>
              <Container>
                <Table striped bordered hover>
                  <h2>{val.branch_name}</h2>
                  <tbody>
                    <tr>
                      <th>Email</th>
                      <td>{val.email}</td>
                    </tr>{" "}
                    <tr>
                      <th>Phone Number</th>
                      <td>{val.phone}</td>
                    </tr>{" "}
                    <tr>
                      <th>Address</th>
                      <td>{val.address}</td>
                    </tr>{" "}
                    <tr>
                      <th>City</th>
                      <td>{val.city}</td>
                    </tr>
                    <tr>
                      <th>State</th>
                      <td>{val.state}</td>
                    </tr>
                    <tr>
                      <th>Pincode</th>
                      <td>{val.pincode}</td>
                    </tr>
                    <tr>
                      <th>Country</th>
                      <td>{val.country}</td>
                    </tr>
                  </tbody>
                </Table>
              </Container>
            </Row>
          );
        })}
      </Container>
    </div>
  );
}

export default ManageBranch;
