import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import { Col, Row } from "react-bootstrap";

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
        scroll ? "nav-scroll bg-transparent shadow-none" : ""
      }`}
    >
      <Container >
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
            {/* <div className="nav-top-link dropdown">
              <NavLink
                to="/industries"
                className={({ isActive }) =>
                  isActive
                    ? "active position-relative nav-top-link text-decoration-none"
                    : " position-relative nav-top-link text-decoration-none"
                }
              >
                Industries
                <div className="dropdown-menu industries-menu p-0 w-70">
                  <div className="d-flex w-100 ml-0 mr-0 justify-content-left bg-white p-3 text-left">
                    <Col>
                      <h5 className="text-muted fw-bold p-2 text fs-6 ">ON DEMAND</h5>
                      <div>
                        <NavLink
                          to="/"
                          className={({ isActive }) =>
                            isActive
                              ? "active position-relative  text-decoration-none fs-6 fw-bold"
                              : " position-relative  text-decoration-none fs-6"
                          }
                        >
                          Grocery App
                        </NavLink>
                        <NavLink
                          to="/"
                          className={({ isActive }) =>
                            isActive
                              ? "active position-relative  text-decoration-none fs-6 fw-bold"
                              : " position-relative  text-decoration-none fs-6"
                          }
                        >
                          Food Delivery
                        </NavLink>
                        <NavLink
                          to="/"
                          className={({ isActive }) =>
                            isActive
                              ? "active position-relative  text-decoration-none fs-6 fw-bold"
                              : " position-relative  text-decoration-none fs-6"
                          }
                        >
                          Travel
                        </NavLink>
                        <NavLink
                          to="/"
                          className={({ isActive }) =>
                            isActive
                              ? "active position-relative  text-decoration-none fs-6 fw-bold"
                              : " position-relative  text-decoration-none fs-6"
                          }
                        >
                          Handyman Service
                        </NavLink>
                        <NavLink
                          to="/"
                          className={({ isActive }) =>
                            isActive
                              ? "active position-relative  text-decoration-none fs-6 fw-bold"
                              : " position-relative  text-decoration-none fs-6"
                          }
                        >
                          Taxi Booking App
                        </NavLink>
                        <NavLink
                          to="/"
                          className={({ isActive }) =>
                            isActive
                              ? "active position-relative  text-decoration-none fs-6 fw-bold"
                              : " position-relative  text-decoration-none fs-6"
                          }
                        >
                          Health Care App
                        </NavLink>
                  
                        
                      </div>
                    </Col>
                    <Col>
                      <h5 className="text-muted fw-bold p-2 text fs-6 ">CUSTOM APPS</h5>
                      <div>
                        <NavLink
                          to="/"
                          className={({ isActive }) =>
                            isActive
                              ? "active position-relative  text-decoration-none fs-6 fw-bold"
                              : " position-relative  text-decoration-none fs-6"
                          }
                        >
                          E-Commerce
                        </NavLink>
                        <NavLink
                          to="/"
                          className={({ isActive }) =>
                            isActive
                              ? "active position-relative  text-decoration-none fs-6 fw-bold"
                              : " position-relative  text-decoration-none fs-6"
                          }
                        >
                          Fitness
                        </NavLink>
                        <NavLink
                          to="/"
                          className={({ isActive }) =>
                            isActive
                              ? "active position-relative  text-decoration-none fs-6 fw-bold"
                              : " position-relative  text-decoration-none fs-6"
                          }
                        >
                          Real Estate
                        </NavLink>
                        <NavLink
                          to="/"
                          className={({ isActive }) =>
                            isActive
                              ? "active position-relative  text-decoration-none fs-6 fw-bold"
                              : " position-relative  text-decoration-none fs-6"
                          }
                        >
                          Media And Entertainment
                        </NavLink>
                        <NavLink
                          to="/"
                          className={({ isActive }) =>
                            isActive
                              ? "active position-relative  text-decoration-none fs-6 fw-bold"
                              : " position-relative  text-decoration-none fs-6"
                          }
                        >
                         Education App
                        </NavLink>
                        <NavLink
                          to="/"
                          className={({ isActive }) =>
                            isActive
                              ? "active position-relative  text-decoration-none fs-6 fw-bold"
                              : " position-relative  text-decoration-none fs-6"
                          }
                        >
                          Social Network 
                        </NavLink>
                        <NavLink
                          to="/"
                          className={({ isActive }) =>
                            isActive
                              ? "active position-relative  text-decoration-none fs-6 fw-bold"
                              : " position-relative  text-decoration-none fs-6"
                          }
                        >
                          Market Place 
                        </NavLink>
                        
                      </div>
                    </Col>
                    <Col>
                      <h5 className="text-muted fw-bold p-2 text fs-6 ">SOLUTIONS</h5>
                      <div>
                        <NavLink
                          to="/"
                          className={({ isActive }) =>
                            isActive
                              ? "active position-relative  text-decoration-none fs-6 fw-bold"
                              : " position-relative  text-decoration-none fs-6 "
                          }
                        >
                          Food Delivery
                        </NavLink>
                        <NavLink
                          to="/"
                          className={({ isActive }) =>
                            isActive
                              ? "active position-relative  text-decoration-none fs-6 fw-bold"
                              : " position-relative  text-decoration-none fs-6 "
                          }
                        >
                          Dating
                        </NavLink>
                        <NavLink
                          to="/"
                          className={({ isActive }) =>
                            isActive
                              ? "active position-relative  text-decoration-none fs-6 fw-bold"
                              : " position-relative  text-decoration-none fs-6 "
                          }
                        >
                          Media OTT
                        </NavLink>
                        <NavLink
                          to="/"
                          className={({ isActive }) =>
                            isActive
                              ? "active position-relative  text-decoration-none fs-6 fw-bold"
                              : " position-relative  text-decoration-none fs-6 "
                          }
                        >
                          Healthcare
                        </NavLink>
                        <NavLink
                          to="/"
                          className={({ isActive }) =>
                            isActive
                              ? "active position-relative  text-decoration-none fs-6 fw-bold"
                              : " position-relative  text-decoration-none fs-6 "
                          }
                        >
                          Ed-Tech
                        </NavLink>
                        <NavLink
                          to="/"
                          className={({ isActive }) =>
                            isActive
                              ? "active position-relative  text-decoration-none fs-6 fw-bold"
                              : " position-relative  text-decoration-none fs-6 "
                          }
                        >
                          Jobs Marketplace
                        </NavLink>
                        <NavLink
                          to="/"
                          className={({ isActive }) =>
                            isActive
                              ? "active position-relative  text-decoration-none fs-6 fw-bold"
                              : " position-relative  text-decoration-none fs-6 "
                          }
                        >
                          Healthcare
                        </NavLink>
                        
                      </div>
                    </Col>
                    <Col>
                      <h5 className="text-muted fw-bold p-2 text fs-6 ">OTHERS</h5>
                      <div>
                        <NavLink
                          to="/"
                          className={({ isActive }) =>
                            isActive
                              ? "active position-relative  text-decoration-none fs-6 fw-bold"
                              : " position-relative  text-decoration-none fs-6 "
                          }
                        >
                          Spots App
                        </NavLink>
                        <NavLink
                          to="/"
                          className={({ isActive }) =>
                            isActive
                              ? "active position-relative  text-decoration-none fs-6 fw-bold"
                              : " position-relative  text-decoration-none fs-6 "
                          }
                        >
                          Logistic & Transportation
                        </NavLink>
                        <NavLink
                          to="/"
                          className={({ isActive }) =>
                            isActive
                              ? "active position-relative  text-decoration-none fs-6 fw-bold"
                              : " position-relative  text-decoration-none fs-6 "
                          }
                        >
                          Fintech
                        </NavLink>
                        <NavLink
                          to="/"
                          className={({ isActive }) =>
                            isActive
                              ? "active position-relative  text-decoration-none fs-6 fw-bold"
                              : " position-relative  text-decoration-none fs-6 "
                          }
                        >
                          Social Media
                        </NavLink>
                      </div>
                    </Col>
                  </div>
                </div>
              </NavLink>
            </div> */}

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
                  to="/mobile-development"
                  className="text-decoration-none"
                >
                  Mobile Development
                </NavLink>
                <NavLink
                  to="/on-demand-solution"
                  className="text-decoration-none"
                >
                  On Demand Solution
                </NavLink>
                <NavLink
                  to="/web-development"
                  className="text-decoration-none"
                >
                  Web Development
                </NavLink>
                <NavLink
                  to="/ui-ux-dev"
                  className="text-decoration-none"
                >
                  UI UX Development
                </NavLink>
                <NavLink
                  to="/hire-development"
                  className="text-decoration-none"
                >
                  Hire Developer
                </NavLink>
                <NavLink
                  to="/e-commerce-development"
                  className="text-decoration-none"
                >
                  E-Commerce Development
                </NavLink>
           
              </div>
            </div>

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
