import React from "react";
import { Row, Col } from "reactstrap";
import YearForm from "./YearForm/YearForm";
import InformationCard from "./InformationCard/InformationCard";

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <YearForm />
        </Row>
        <Row>
          <h1>Map</h1>
        </Row>
        <Row>[map here]</Row>
        <Row>
          <InformationCard />
        </Row>
      </div>
    );
  }
}
