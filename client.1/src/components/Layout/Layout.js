import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Main from "./Main/Main";
import Actions from "./Actions/Actions";
import News from "./News/News";

export default class Layout extends React.Component {
  render() {
    return (
      <Container>
        <NavBar />
        <Route exact path="/" component={Main} />
        {/* <Route path="/map" component={MapGroup} /> */}
        <Route path="/actions" component={Actions} />
        <Route path="/news" component={News} />
      </Container>
    );
  }
}
