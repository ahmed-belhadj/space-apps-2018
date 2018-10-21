import React from "react";
import { Button, Row } from "reactstrap";

export default class Actions extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <h1>TAKE ACTION</h1>
        </Row>
        <Row>
          <h2>I am a ... </h2>
        </Row>
        <Row>
          <Button outline color="primary" size="lg">
            Farmer
          </Button>{" "}
        </Row>
        <Row>
          <Button outline color="secondary" size="lg">
            Engineer
          </Button>{" "}
        </Row>
        <Row>
          <Button outline color="success" size="lg">
            Citizen
          </Button>{" "}
        </Row>
        <Row>
          <Button outline color="info" size="lg">
            Scientist
          </Button>{" "}
        </Row>
        <Row>
          <Button outline color="warning" size="lg">
            Voter
          </Button>{" "}
        </Row>
      </div>
    );
  }
}
