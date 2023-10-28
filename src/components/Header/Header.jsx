import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const [scroll, setScroll] = useState(0);
  const [isActive, setActive] = useState(false);

  const clickMenuBar = () => {
    setActive(!isActive);
  };
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });

  return (
    <Navbar
      expand="lg"
      className={`header position-fixed w-100 py-3 ${
        scroll ? "nav-scroll" : ""
      }`}
    >
      <Container>
        <Navbar.Brand href="#">
          <NavLink to="/" className="text-decoration-none">
            <strong className="logo-txt">Equipped IT</strong>
          </NavLink>
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
        <div className={`nav-toggle ${isActive ? "toggleOpen" : ""}`}>
          <span
            className="bar d-block position-relative"
            onClick={clickMenuBar}
          ></span>
        </div>
        <Navbar.Collapse
          id="navbarScroll"
          className={`${isActive ? "menuOpen" : ""}`}
        >
          <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "active position-relative nav-top-link text-decoration-none"
                  : " position-relative nav-top-link text-decoration-none"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "active position-relative nav-top-link text-decoration-none"
                  : " position-relative nav-top-link text-decoration-none"
              }
            >
              About US
            </NavLink>
            <div className="nav-top-link dropdown">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "active position-relative nav-top-link text-decoration-none"
                    : " position-relative nav-top-link text-decoration-none"
                }
              >
                Services
              </NavLink>
              <div className="dropdown-menu p-0">
                <NavLink
                  to="/it-consulting-and-strategy"
                  className="text-decoration-none"
                >
                  Mobile Development
                </NavLink>
                <NavLink
                  to="/software-development-and-integration"
                  className="text-decoration-none"
                >
                  On Demand Solution
                </NavLink>
                <NavLink
                  to="/cloud-solutions-and-migration"
                  className="text-decoration-none"
                >
                  Web Development
                </NavLink>
                <NavLink
                  to="/cybersecurity-and-data-protection"
                  className="text-decoration-none"
                >
                  BlockChain Development
                </NavLink>
                <NavLink
                  to="/it-support-and-helpdesk"
                  className="text-decoration-none"
                >
                  NFT Development Company
                </NavLink>
                {/* <Link to='/network-infrastructure-setup-and-management' className="text-decoration-none">
                    Network Infrastructure Setup and Management
                  </Link> */}
                <NavLink
                  to="/data-analytics-and-business-intelligence"
                  className="text-decoration-none"
                >
                  Game Development Company
                </NavLink>
                <NavLink
                  to="/data-analytics-and-business-intelligence"
                  className="text-decoration-none"
                >
                Hire Developer
                </NavLink>
                <NavLink
                  to="/data-analytics-and-business-intelligence"
                  className="text-decoration-none"
                >
                E-Commerce Development
                </NavLink>
                <NavLink
                  to="/data-analytics-and-business-intelligence"
                  className="text-decoration-none"
                >
                Digital Marketing Services
                </NavLink>
                {/* <Link to='/business-process-automation' className="text-decoration-none">
                    Business Process Automation
                  </Link> */}
              </div>
            </div>
            <div className="nav-top-link dropdown">
              <NavLink
                to="/industries"
                className={({ isActive }) =>
                  isActive
                    ? "active position-relative nav-top-link text-decoration-none"
                    : " position-relative nav-top-link text-decoration-none"
                }
              >
                Industries
                <div className="dropdown-menu p-0"></div>
              </NavLink>
            </div>
            {/* <Link to='/contact' className="me-0 position-relative nav-top-link text-decoration-none">
                Technologies
                </Link> */}
            {/* <Link to='/contact' className="position-relative nav-top-link text-decoration-none">
                Life@EquippedIT
                </Link> */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "active me-0 position-relative nav-top-link text-decoration-none"
                  : "me-0 position-relative nav-top-link text-decoration-none"
              }
            >
              Contact Us
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
