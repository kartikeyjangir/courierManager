import React from "react";
import NavAdmin from "../NavAdmin/NavAdmin";
import "./Admin.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddBranch from "../Branch/AddBranch/AddBranch";
import AddStaff from "../AdminStaff/AddStaff/AddStaff";
import ManageStaff from "../AdminStaff/ManageStaff/ManageStaff";
import ManageBranch from "../Branch/ManageBranch/ManageBranch";
import EditStaff from "../AdminStaff/EditStaff/EditStaff";
import { Container, Row, Col } from "react-bootstrap";

function Admin() {
  return (
    <div>
      <Container fluid="md" className="mainpage">
        <Row>
          <Col className="mainLeft">
            <NavAdmin />
          </Col>

          <Col xs={9}>
            <Row className="mainContent">
              <Switch>
                <Route path="/admin/editstaff/:uid" component={EditStaff} />
                <Route path="/admin/addbranch" component={AddBranch} exact />
                <Route path="/admin/addstaff" component={AddStaff} exact />
                <Route
                  path="/admin/managestaff"
                  component={ManageStaff}
                  exact
                />
                <Route
                  path="/admin/managebranch"
                  component={ManageBranch}
                  exact
                />
              </Switch>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Admin;
