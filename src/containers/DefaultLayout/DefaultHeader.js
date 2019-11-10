import React, { Component } from 'react';
import { Link, NavLink as rNavlink } from 'react-router-dom';
import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, Button,Col } from 'reactstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './NavBar.css';

import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.svg'
import sygnet from '../../assets/img/brand/sygnet.svg'
// import { Button } from '@material-ui/core';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

const NavLink = styled(rNavlink)`
font-size: 19px;
line-height: 22px;
color:#333333;`;

class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    // `const { children, ...attributes } = this.props;
    // const navLinkStyle={
    //   color: "#0e0000",
    //   fontSize: "19px",
    //   lineHeight: "22px",
    //   textDecoration: "none",
    // }`

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand>
          <span className="alibiLogo">Alibi</span><span className="adminLogo">Admin</span>
          </AppNavbarBrand>
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink to="/events" className="nav-link" activeStyle={{ color: '#FFBD0A'  }}>Events</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink to="/cases" className="nav-link" activeStyle={{ color: '#FFBD0A' }}>Cases</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink to="/users" className="nav-link" activeStyle={{ color: '#FFBD0A' }}>Users</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink to="/tags" className="nav-link" activeStyle={{ color: '#FFBD0A' }}>Tags</NavLink>
          </NavItem>
          {/* <NavItem className="px-3">
            <NavLink to="#" className="nav-link" activeStyle={{ color: '#FFBD0A' }}>Analytics</NavLink>
          </NavItem> */}
          <NavItem className="px-3">
            <NavLink to="/notifications" className="nav-link" activeStyle={{ color: '#FFBD0A' }}>Notifications</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink to="/chat" className="nav-link" activeStyle={{ color: '#FFBD0A'}}>Chats</NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button onClick={e => this.props.onLogout(e)} block color="ghost" style={{color:"#EB5757",fontSize: "19px",lineHeight:"22px"} }>Exit</Button>
              </Col>
          
        </Nav>
        {/* <AppAsideToggler className="d-md-down-none" /> */}
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}


DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
