import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./ManageStaff";
import { getstaff } from "../../../api/admin";
import { Table } from "react-bootstrap";

function ManageStaff() {
  const [staffdetials, setStaffdetials] = useState([]);
  const getallstaff = () => {
    getstaff()
      .then((res) => {
        // console.log(res);
        setStaffdetials(res.data);
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
        }
      });
  };

  useEffect(() => {
    getallstaff();
  }, []);
  return (
    <div>
      <h1>Manage Staff</h1>

      <Table striped bordered hover>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Branch Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Status</th>
          </tr>
          {staffdetials.map((info, index) => {
            const id = info._id;
            const api = "/admin/editstaff/" + id;
            return (
              <tr key={index}>
                <td>{info.name}</td>
                <td>{info.branch}</td>
                <td>{info.email}</td>
                <td>{info.phone}</td>
                <td>{info.address}</td>
                <td>
                  <NavLink to={api} style={{ textDecoration: "none" }}>
                    Edit
                  </NavLink>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default ManageStaff;
