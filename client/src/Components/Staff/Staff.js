import React from "react";
import NavStaff from "../NavStaff/NavStaff";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddCourier from "./AddCourier/AddCourier";
import AllCourier from "./AllCourier/AllCourier";
import Searchcourier from "./Searchcourier";
import { Container, Row, Col } from "react-bootstrap";
import Filtered from "./Status/Filtered";

function Staff() {
  return (
    <div>
      <Container fluid="md" className="mainpage">
        <Row>
          <Col className="mainLeft">
            <NavStaff />
          </Col>

          <Col xs={9}>
            <Row className="mainContent">
              <Switch>
                <Route path="/staff/addcourier" component={AddCourier} />
                <Route
                  path="/staff/updatestatus"
                  component={AllCourier}
                  exact
                />
                <Route path="/staff/search" component={Searchcourier} exact />
                <Route path="/staff/:status" component={Filtered} />
              </Switch>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Staff;
