import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <section className="footer sec-pd pb-0">
      <Container className="pb-5">
        <Row>
          <Col lg={3} md={12} className="mb-4 mb-lg-0">
            <div className="footer-logo">
              <h3 className="mb-3">
              <Link to='/' className='text-decoration-none'><strong className="logo-txt">
                  Equipped IT
                </strong></Link>
              </h3>
              <p className="">
              Our team of skilled professionals possesses a diverse range of expertise across various IT domains. 
              We have the knowledge to address a wide array of technological challenges.
              </p>
            </div>
          </Col>
          <Col lg={3} md={4} className="ps-lg-5 mb-4 mb-md-0">
            <div className="footer-menu ps-lg-5">
              <h5 className="mb-3">Company</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><Link to='/about' className="text-decoration-none">Empowering your digital future</Link></li>                
                <li className="mb-2"><Link to='/about' className="text-decoration-none">About Us</Link></li>
                <li className="mb-2"><Link to='/php' className="text-decoration-none">Services</Link></li>
                <li className="mb-2"><Link to='/c2areers' className="text-decoration-none">Careers</Link></li>
                <li className="mb-2"><Link to='/contact' className="text-decoration-none">Contact Us</Link></li>
              </ul>
            </div>
          </Col>

          <Col lg={3} md={4} className="mb-4 mb-md-0">
            <div className="footer-menu">
              <h5 className="mb-3">Services</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><Link to='/php' className="text-decoration-none">IT Consulting and Strategy</Link></li>
                <li className="mb-2"><Link to='' className="text-decoration-none">Software Development and Integration</Link></li>
                <li className="mb-2"><Link to='' className="text-decoration-none">Cloud Solutions and Migration</Link></li>
                <li className="mb-2"><Link to='' className="text-decoration-none">Cybersecurity and Data Protection</Link></li>
                <li className="mb-2"><Link to='' className="text-decoration-none">IT Support and Helpdesk Services</Link></li>
              </ul>
            </div>
          </Col>

          <Col lg={3} md={4} className="mb-4 mb-md-0">
            <div className="footer-menu footer-contact">
              <h5 className="mb-3">Get In Touch</h5>
              <ul className="list-unstyled">
                <li className="mb-2 position-relative contact-list"><Link to='' className="text-decoration-none"><i class="fa-solid fa-envelope position-absolute"></i> email@equipped.com</Link></li>
                <li className="mb-2 position-relative contact-list"><Link to='' className="text-decoration-none"><i class="fa-solid fa-phone position-absolute"></i> (+12) 123 456 7890</Link></li>
                <li className="mb-2 position-relative contact-list"><i class="fa-solid fa-location-dot position-absolute"></i> Elgin St. Celina, Delaware 10299</li>
                
              </ul>
              <div className="social-icons">
                <ul className="list-inline">
                  <li className="list-inline-item"><Link to='' className="rounded-pill d-flex align-items-center justify-content-center text-decoration-none"><i class="fa-brands fa-facebook-f"></i></Link></li>
                  <li className="list-inline-item"><Link to='' className="rounded-pill d-flex align-items-center justify-content-center text-decoration-none"><i class="fa-brands fa-linkedin-in"></i></Link></li>
                  <li className="list-inline-item"><Link to='' className="rounded-pill d-flex align-items-center justify-content-center text-decoration-none"><i class="fa-brands fa-instagram"></i></Link></li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <hr className="footer-brdr m-0"/>
      <div className="copyright py-3">
        <Container>
          <small className="text-center mb-0 d-block">Copyright © 2023 <Link to='/' className="text-decoration-none">equippedit.com</Link></small>
        </Container>
      </div>
    </section>
  );
};

export default Footer;
