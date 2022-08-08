import React, { useState } from "react";
import { searchParcel } from "../../api/staff";
import { Table, Button, Container, Row, Col } from "react-bootstrap";

function Searchcourier() {
  const [courier, setCourier] = useState({});
  const [refId, setRefId] = useState("");
  const [found, setFound] = useState(2);
  const searchBYParcel = () => {
    if (refId === "") {
      alert("Please enter a Reference ID");
      return;
    }
    searchParcel({ ref: refId })
      .then((res) => {
        console.log(res);
        if (res.data.found) {
          setFound(1);
          setCourier(res.data[0]);
          console.log(res.data[0]);
        } else {
          setFound(0);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
        }
      });
  };

  return (
    <div>
      <h1>Search By Reference ID</h1>
      <div className="form">
        <Container>
          <Row>
            <Col>
              <input
                type="text"
                placeholder="Enter Ref ID"
                onChange={(e) => setRefId(e.target.value)}
              />
            </Col>
            <Col>
              <button className="buttonSend" onClick={searchBYParcel}>
                <h3>Search</h3>{" "}
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {found === 1 && Object.keys(courier).length ? (
        <div>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <th>REF ID</th>
                <th>Branch Name</th>
                <th>Sender Name</th>
                <th>Reciever Name</th>
                <th>Reciever Address</th>
                <th>Status</th>
              </tr>

              <tr>
                <td>{courier._id}</td>
                <td>{courier.senderbranch}</td>
                <td>{courier.sendername}</td>
                <td>{courier.recname}</td>
                <td>{courier.recaddress}</td>
                <td className={courier.status + "Text"}>
                  {courier.status === "ofd"
                    ? "Out for Delivery"
                    : courier.status}
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      ) : null}
      {found === 0 ? (
        <div
          style={{
            marginTop: "200px",
            textAlign: "center",
            color: "gray",
          }}
        >
          <h1>Wrong Ref ID</h1>
        </div>
      ) : null}
    </div>
  );
}

export default Searchcourier;
