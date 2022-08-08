import React, { useState, useEffect } from "react";
import { getAllCourier, updateStatus } from "../../../api/staff";
import { Table, Button } from "react-bootstrap";

function AllCourier() {
  const [courier, setCourier] = useState([]);
  const [refreshRequired, setRefreshRequired] = useState(false);

  const getCourier = () => {
    getAllCourier()
      .then((res) => {
        setCourier(res.data);
        console.log(res);
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
        }
      });
  };

  const markdelivered = (refi, status) => {
    const data = { id: refi, curStatus: status };
    updateStatus(data)
      .then((res) => {
        console.log(res);
        setRefreshRequired((prev) => !prev);
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
        }
      });
  };

  useEffect(() => {
    getCourier();
  }, [refreshRequired]);
  return (
    <div>
      <h1> All Courier</h1>

      <Table striped bordered hover>
        <tbody>
          <tr>
            <th>REF ID</th>
            <th>Branch Name</th>
            <th>Sender Name</th>
            <th>Reciever Name</th>
            {/* <th>Reciever Address</th> */}
            <th>Sender Phone</th>
            <th>Status</th>
          </tr>
          {courier.map((info, index) => {
            const id = info._id;
            const curStatus = info.status;
            return (
              <tr key={index}>
                <td>{info._id}</td>
                <td>{info.senderbranch}</td>
                <td>{info.sendername}</td>
                <td>{info.recname}</td>
                {/* <td>{info.recaddress}</td> */}
                <td>{info.senderphone}</td>
                <td value={info._id}>
                  {info.status !== "delivered" ? (
                    <button
                      className={info.status}
                      onClick={() => {
                        markdelivered(id, curStatus);
                      }}
                    >
                      {info.status === "ofd" ? "OFD" : info.status}
                    </button>
                  ) : (
                    <p className="delivered">Delivered</p>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default AllCourier;
