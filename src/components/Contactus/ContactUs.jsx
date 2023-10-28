import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CustomInputField from "../../CustomTags/CustomInputField";
import { Link } from "react-router-dom";

const contactUs = () => {
  return (
    <section className="banner">
      <Container>
        <Row>
          <Col className="col-md-8 pe-5">
            <h2 className="logo-txt fw-bold">CONTACT US</h2>
            <h6 className="text-muted">
              Want to discuss your project requirements with us? Fill the form
              below and we will contact you ASAP.
            </h6>
            <CustomInputField placeholder="What's Your Name*" />
            <CustomInputField placeholder="Enter Your Email Address*" />
            <CustomInputField placeholder="Phone No" />
            <CustomInputField placeholder="How Can We Help You?*" />
          </Col>
          <Col className="col-md-4 pt-3 ps-5 ">
            <h2 className="logo-txt fw-normal ">
              Want to contact us directly?
            </h2>
            <h3 className="logo-txt fw-normal mt-4">New Project Inquiries</h3>
            <ul className="list-unstyled">
              <li className="mb-2 position-relative contact-list text-decoration-none">
                <Link to="" className="text-decoration-none">
                  <i class="fa-solid fa-envelope position-absolute"></i>{" "}
                  email@equipped.com
                </Link>
              </li>
              <h3 className="logo-txt fw-normal mt-4">Careers</h3>
              <li className="mb-2 position-relative contact-list text-decoration-none">
                <Link to="" className="text-decoration-none">
                  <i class="fa-solid fa-envelope position-absolute"></i>{" "}
                  email@equipped.com
                </Link>
              </li>

              <h3 className="logo-txt fw-normal mt-4">Other Enquries</h3>
              <li className="mb-2 position-relative contact-list text-decoration-none">
                <Link to="" className="text-decoration-none">
                  <i class="fa-solid fa-envelope position-absolute"></i>{" "}
                  email@equipped.com
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default contactUs;
