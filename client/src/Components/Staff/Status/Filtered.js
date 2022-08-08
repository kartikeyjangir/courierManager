import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { getFilteredCourier } from "../../../api/staff";
import { useParams } from "react-router-dom";

export default function Filtered() {
  const { status } = useParams();
  const [courier, setCourier] = useState([]);

  const filterCourier = () => {
    getFilteredCourier(status)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          setCourier(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    filterCourier();
  }, [status]);

  return (
    <div>
      <h1>
        <span style={{ textTransform: "capitalize" }}>
          {status === "ofd" ? "Out For Delivery" : status}
        </span>{" "}
        Courier
      </h1>

      <Table striped bordered hover>
        <tbody>
          <tr>
            <th>REF ID</th>
            <th>Branch Name</th>
            <th>Sender Name</th>
            <th>Reciever Name</th>
            <th>Reciever Address</th>
            {/* <th>Status</th> */}
          </tr>
          {courier.map((info, index) => {
            const id = info.ref;
            return (
              <tr key={index}>
                <td>{info._id}</td>
                <td>{info.senderbranch}</td>
                <td>{info.sendername}</td>
                <td>{info.recname}</td>
                <td>{info.recaddress}</td>
                {/* <td>
                  <span
                    style={{
                      color: "black",
                      backgroundColor: "yellow",
                      fontSize: "22px",
                      padding: "3px",
                    }}
                  >
                    Pending
                  </span>
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
