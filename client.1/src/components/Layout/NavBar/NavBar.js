import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../../../assets/images/enviroculture_logo.png";
import map from "../../../assets/images/map-location.png";
import actions from "../../../assets/images/handshake.png";
import news from "../../../assets/images/newspaper-folded.png";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const NavImg = styled.img`
      width: 100%;
      height: 100%;
    `;
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <NavImg src={logo} alt="Enviroculture" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavLink to="/">
                <NavItem>
                  {/* <NavLink href="#">Map</NavLink> */}
                  <NavImg src={map} alt="Map" />
                </NavItem>
              </NavLink>
              <NavLink to="/actions">
                <NavItem>
                  {/* <NavLink href="#">Actions</NavLink> */}
                  <NavImg src={actions} alt="Actions" />
                </NavItem>
              </NavLink>
              <NavLink to="/news">
                <NavItem>
                  {/* <NavLink href="#">News</NavLink> */}
                  <NavImg src={news} alt="News" />
                </NavItem>
              </NavLink>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
