import React, { Component } from "react";
import { Tab, Col, Nav, Row } from "react-bootstrap";

import General from "./general";
import ChangePassword from "./changePassword";

import CurrentUser from "../Queries/currentUser";
import UpdateInfoMutation from "../mutations/updateInfo";
import ChangePassMutation from "../mutations/changePass";

export default class Account extends Component {
  render() {
    return (
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">General</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Change Password</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Info</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <CurrentUser>
                  <UpdateInfoMutation>
                    <General />
                  </UpdateInfoMutation>
                </CurrentUser>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <ChangePassMutation>
                  <ChangePassword />
                </ChangePassMutation>
              </Tab.Pane>
              <Tab.Pane eventKey="third">{/* <Info /> */}</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }
}
