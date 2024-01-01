import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
//import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//import { responsive } from "../JsonData/JsonData";
import softwareImg from "../../assets/img/software-img.svg";
import BannerImg from "../../assets/img/banner-img.svg";
import {Carousel} from 'react-bootstrap';
//import Quote from "../../assets/img/quote.svg";
//import TestimonialImg1 from "../../assets/img/testimonial-img1.jpg";

const Home = () => {
  return (
    <>
    {/* banner-section */}
      <section className="banner">
      
              <Carousel>
      <Carousel.Item>
        <Container>
           <Row className="align-items-center">
            <Col lg={6}>
              <div className="banner-content text-lg-start text-center">
                <span className="title-tag rounded-pill py-1 px-2 mb-2 d-inline-block">
                  Welcome to Equipped IT
                </span>
                <h1 className="fw-bold mb-3">
                  Dedicated <span className="blue-color">IT</span> Support and{" "}
                  <span className="blue-color">Business </span> Solution
                </h1>
                <p>
                At Equipped IT, we are a dynamic and forward-thinking IT company
                that is passionate about helping businesses thrive in the digital era. 
                With our extensive expertise and dedication to excellence, 
                we aim to be your trusted partner in navigating the ever-changing landscape of technology.
                </p>
                <Link
                  to="/services"
                  className="rounded blue-btn blue-bg text-decoration-none text-white mt-4"
                  type="button"
                >
                  Our Services
                </Link>
              </div>
            </Col>
            <Col lg={6}>
              <div className="banner-img">
                <img src={BannerImg} alt="banner-img" className="img-fluid d-lg-block d-none" />
              </div>
            </Col>
          </Row>
        </Container>
      </Carousel.Item>
      <Carousel.Item>
      <Container>
           <Row className="align-items-center">
            <Col lg={6}>
              <div className="banner-content text-lg-start text-center">
                <span className="title-tag rounded-pill py-1 px-2 mb-2 d-inline-block">
                  Welcome to Equipped IT
                </span>
                <h1 className="fw-bold mb-3">
                Web <span className="blue-color">&</span> App Development Company{" "}
                  <span className="blue-color">Business </span> Solution
                </h1>
                <p>
               Being a top app development company, ToXSL offers customized app development solutions based on the latest technology and design methods
                </p>
                <Link
                  to="/services"
                  className="rounded blue-btn blue-bg text-decoration-none text-white mt-4"
                  type="button"
                >
                  Our Services
                </Link>
              </div>
            </Col>
            <Col lg={6}>
              <div className="banner-img">
                <img src={BannerImg} alt="banner-img" className="img-fluid d-lg-block d-none" />
              </div>
            </Col>
          </Row>
        </Container>
      </Carousel.Item>
      <Carousel.Item>
      <Container>
           <Row className="align-items-center">
            <Col lg={6}>
              <div className="banner-content text-lg-start text-center">
                <span className="title-tag rounded-pill py-1 px-2 mb-2 d-inline-block">
                  Welcome to Equipped IT
                </span>
                <h1 className="fw-bold mb-3">
                   E-Commerce<span className="blue-color">Development</span> &  {"   "}
                  <span className="blue-color"> On Demand Solution</span> 
                </h1>
                <p>
                At Equipped IT, we are a dynamic and forward-thinking IT company
                that is passionate about helping businesses thrive in the digital era. 
                With our extensive expertise and dedication to excellence, 
                we aim to be your trusted partner in navigating the ever-changing landscape of technology.
                </p>
                <Link
                  to="/services"
                  className="rounded blue-btn blue-bg text-decoration-none text-white mt-4"
                  type="button"
                >
                  Our Services
                </Link>
              </div>
            </Col>
            <Col lg={6}>
              <div className="banner-img">
                <img src={BannerImg} alt="banner-img" className="img-fluid d-lg-block d-none" />
              </div>
            </Col>
          </Row>
        </Container>
      </Carousel.Item>
    </Carousel>
      </section>

      {/* services-section */}
      <section className="our-services bg-grey sec-pd">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="sec-header mb-4">
                <h2 className="fw-bold text-center btm-border position-relative">
                  Our Services
                </h2>
              </div>

              <Row>
                <Col lg={4} className="mt-3 mt-lg-4">
                  <div className="service-innr rounded h-100 text-lg-start text-center">
                    <span className="service-icon mb-3 blue-color d-inline-block">
                      <i className="fa-solid fa-arrows-spin"></i>
                    </span>
                    <h4>IT Consultancy and Planning</h4>
                    <p>
                    We offer top-notch IT consultancy and 
                    planning services to help businesses 
                    navigate the complexities of technology and maximize their potential. 
                    Our expert consultants work closely with you to understand your unique business needs,
                    goals, and challenges, providing tailored solutions that drive growth and efficiency.
                    </p>
                  </div>
                </Col>

                <Col lg={4} className="mt-3 mt-lg-4">
                  <div className="service-innr rounded h-100 text-lg-start text-center">
                    <span className="service-icon mb-3 blue-color d-inline-block">
                      <i className="fa-brands fa-cloudsmith"></i>
                    </span>
                    <h4>Network Infrastructure Setup and Management</h4>
                    <p>
                    We excel in providing network infrastructure setup and management services
                    to ensure a robust and reliable foundation for your business operations. 
                    With our expertise and dedication, we create and maintain high-performance networks 
                    that optimize efficiency and enhance productivity.
                    </p>
                  </div>
                </Col>

                <Col lg={4} className="mt-3 mt-lg-4">
                  <div className="service-innr rounded h-100 text-lg-start text-center">
                    <span className="service-icon mb-3 blue-color d-inline-block">
                      <i className="fa-solid fa-snowflake"></i>
                    </span>
                    <h4>Cloud Solutions and Migration</h4>
                    <p>
                    We specialize in providing cutting-edge cloud solutions and seamless migration services, 
                    enabling businesses to harness the full potential of cloud technology. Our expert team ensures 
                    a smooth and efficient transition to the cloud, empowering you to experience the numerous benefits it offers.
                    </p>
                  </div>
                </Col>

                <Col lg={4} className="mt-3 mt-lg-4">
                  <div className="service-innr rounded h-100 text-lg-start text-center">
                    <span className="service-icon mb-3 blue-color d-inline-block">
                      <i className="fa-solid fa-snowflake"></i>
                    </span>
                    <h4>Software Development and Integration</h4>
                    <p>
                    We specialize in software development and integration services that empower businesses 
                    to leverage technology for enhanced efficiency and innovation. 
                    Our expert team of developers and integration specialists is committed 
                    to delivering high-quality solutions tailored to meet your specific requirements and drive your business forward.
                    </p>
                  </div>
                </Col>

                <Col lg={4} className="mt-3 mt-lg-4">
                  <div className="service-innr rounded h-100 text-lg-start text-center">
                    <span className="service-icon mb-3 blue-color d-inline-block">
                      <i className="fa-solid fa-snowflake"></i>
                    </span>
                    <h4>Cybersecurity and Data Protection</h4>
                    <p>
                    We take cybersecurity and data protection seriously, providing comprehensive solutions to safeguard your business 
                    from ever-evolving cyber threats. Our expert team is dedicated to ensuring the confidentiality, integrity, 
                    and availability of your sensitive information, allowing you to focus on your core operations with peace of mind.
                    </p>
                  </div>
                </Col>

                <Col lg={4} className="mt-3 mt-lg-4">
                  <div className="service-innr rounded h-100 text-lg-start text-center">
                    <span className="service-icon mb-3 blue-color d-inline-block">
                      <i className="fa-solid fa-snowflake"></i>
                    </span>
                    <h4>IT Support and Helpdesk Services</h4>
                    <p>
                    We offer top-notch IT support and helpdesk services, providing businesses with reliable technical 
                    assistance and resolving IT-related issues promptly. Our expert team of support professionals is 
                    committed to ensuring your technology runs smoothly, enabling you to focus on your core business without 
                    any interruptions.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Best Organisation Section */}
      <section className="our-team sec-pd">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-lg-0 mb-5">
              <div className="pe-lg-5 text-lg-start text-center">
                <span className="title-tag rounded-pill py-1 px-2 mb-2 d-inline-block">
                  We Offer
                </span>
                <h2 className="fw-bold mb-3">
                  Best
                  <span className="blue-color"> Strategic & Innovative </span>
                  Solutions to Grow
                </h2>
                <p>
                Our focus on excellence and continuous innovation ensures that we deliver solutions that drive tangible 
                results and propel your organization towards success.
                </p>
                <ul className="list-unstyled listing text-start mx-lg-0 mx-auto">
                  <li className="position-relative">
                    <span className="check-icon blue-color d-inline-block">
                      <i className="fa-solid fa-circle-check fs-4"></i>
                    </span>
                    Comprehensive Business Analysis
                  </li>
                  <li className="position-relative">
                    <span className="check-icon blue-color d-inline-block">
                      <i className="fa-solid fa-circle-check fs-4"></i>
                    </span>
                    Goal-Oriented Approach
                  </li>
                  <li className="position-relative">
                    <span className="check-icon blue-color d-inline-block">
                      <i className="fa-solid fa-circle-check fs-4"></i>
                    </span>
                    Competitive Advantage
                  </li>
                  <li className="position-relative">
                    <span className="check-icon blue-color d-inline-block">
                      <i className="fa-solid fa-circle-check fs-4"></i>
                    </span>
                    Long-Term Vision
                  </li>
                  <li className="position-relative">
                    <span className="check-icon blue-color d-inline-block">
                      <i className="fa-solid fa-circle-check fs-4"></i>
                    </span>
                    Technology Transformation
                  </li>
                  <li className="position-relative">
                    <span className="check-icon blue-color d-inline-block">
                      <i className="fa-solid fa-circle-check fs-4"></i>
                    </span>
                    Product and Service Innovation
                  </li>
                  <li className="position-relative">
                    <span className="check-icon blue-color d-inline-block">
                      <i className="fa-solid fa-circle-check fs-4"></i>
                    </span>
                    Process Optimization
                  </li>
                  <li className="position-relative">
                    <span className="check-icon blue-color d-inline-block">
                      <i className="fa-solid fa-circle-check fs-4"></i>
                    </span>
                    Customer-Centric Solutions
                  </li>
                </ul>
                <Link
                  href="/php"
                  className="rounded blue-btn blue-bg text-decoration-none text-white mt-4"
                  type="button"
                >
                  Explore More
                </Link>
              </div>
            </Col>
            <Col lg={6}>
              <div className="org-img ps-lg-5 text-lg-start text-center">
                <img
                  src={softwareImg}
                  alt="software-img"
                  className="img-fluid mx-lg-0 mx-auto"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Team Section */}
      <section className="our-team bg-grey sec-pd">
        <Container>
          <Row className="gx-md-5">
            <Col lg={12}>
              <div className="sec-header mb-4">
                <h2 className="fw-bold text-center btm-border position-relative">
                  Meet Our Team
                </h2>
              </div>
            </Col>

            <Col lg={4} className="mt-5">
              <div className="team-innr mx-lg-0 mx-auto h-100 overflow-hidden">
                <div className="team-img overflow-hidden">
                  <img
                    src="https://rishidemos.com/minimal-agency/wp-content/uploads/sites/71/2022/03/Rectangle-24.png"
                    alt="img"
                    className="img-fluid w-100"
                  />
                </div>

                <div className="team-content px-3 py-4 text-center">
                  <h5>Kamal Kant</h5>
                  <p className="mb-0">Founder</p>
                </div>
              </div>
            </Col>

            <Col lg={4} className="mt-5">
              <div className="team-innr mx-lg-0 mx-auto h-100 overflow-hidden">
                <div className="team-img overflow-hidden">
                  <img
                    src="https://rishidemos.com/minimal-agency/wp-content/uploads/sites/71/2022/03/Rectangle-24.png"
                    alt="img"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="team-content px-3 py-4 text-center">
                  <h5>Kanchan Ambedkar</h5>
                  <p className="mb-0">Co-Founder</p>
                </div>
              </div>
            </Col>

            <Col lg={4} className="mt-5">
              <div className="team-innr mx-lg-0 mx-auto h-100 overflow-hidden">
                <div className="team-img overflow-hidden">
                  <img
                    src="https://rishidemos.com/minimal-agency/wp-content/uploads/sites/71/2022/03/Rectangle-25.png"
                    alt="img"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="team-content px-3 py-4 text-center">
                  <h5>Rajat Ambedkar</h5>
                  <p className="mb-0">CTO</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Testimonial Section */}
      {/* <section className="our-testimonial sec-pd">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="sec-header mb-4">
                <h2 className="fw-bold text-center btm-border position-relative">
                  Our Testimonial
                </h2>
              </div>
            </Col>

            <Col md={12}>
              <div className="testimonial-innr">
                <Carousel responsive={responsive} showDots={true} showNav={false}>
                  <div className="px-3 pt-4">
                    <div className="testimonial-block text-center position-relative">
                      <img src={Quote} alt="quote" className="quote-img mb-4" />
                      <p class="testimonial-title pb-4">
                        Wonderful motivational book! Very uplifting stories. I
                        bought a couple for my Christmas and birthday presents!
                      </p>
                    </div>
                    <div className="testimonial-content text-center">
                      <img
                        src={TestimonialImg1}
                        alt="img"
                        className="testimonial-img rounded-pill mx-auto"
                      />
                      <h5 className="mt-3 mb-0">-Talan Arcard</h5>
                      <p>CEO of Ayesha</p>
                    </div>
                  </div>
               
                  <div className="px-3 pt-4">
                    <div className="testimonial-block text-center position-relative">
                      <img src={Quote} alt="quote" className="quote-img mb-4" />
                      <p class="testimonial-title pb-4">
                        Wonderful motivational book! Very uplifting stories. I
                        bought a couple for my Christmas and birthday presents!
                      </p>
                    </div>
                    <div className="testimonial-content text-center">
                      <img
                        src={TestimonialImg1}
                        alt="img"
                        className="testimonial-img rounded-pill mx-auto"
                      />
                      <h5 className="mt-3 mb-0">-Talan Arcard</h5>
                      <p>CEO of Ayesha</p>
                    </div>
                  </div>

                  <div className="px-3 pt-4">
                    <div className="testimonial-block text-center position-relative">
                      <img src={Quote} alt="quote" className="quote-img mb-4" />
                      <p class="testimonial-title pb-4">
                        Wonderful motivational book! Very uplifting stories. I
                        bought a couple for my Christmas and birthday presents!
                      </p>
                    </div>
                    <div className="testimonial-content text-center">
                      <img
                        src={TestimonialImg1}
                        alt="img"
                        className="testimonial-img rounded-pill mx-auto"
                      />
                      <h5 className="mt-3 mb-0">-Talan Arcard</h5>
                      <p>CEO of Ayesha</p>
                    </div>
                  </div>

                  <div className="px-3 pt-4">
                    <div className="testimonial-block text-center position-relative">
                      <img src={Quote} alt="quote" className="quote-img mb-4" />
                      <p class="testimonial-title pb-4">
                        Wonderful motivational book! Very uplifting stories. I
                        bought a couple for my Christmas and birthday presents!
                      </p>
                    </div>
                    <div className="testimonial-content text-center">
                      <img
                        src={TestimonialImg1}
                        alt="img"
                        className="testimonial-img rounded-pill mx-auto"
                      />
                      <h5 className="mt-3 mb-0">-Talan Arcard</h5>
                      <p>CEO of Ayesha</p>
                    </div>
                  </div>

                  <div className="px-3 pt-4">
                    <div className="testimonial-block text-center position-relative">
                      <img src={Quote} alt="quote" className="quote-img mb-4" />
                      <p class="testimonial-title pb-4">
                        Wonderful motivational book! Very uplifting stories. I
                        bought a couple for my Christmas and birthday presents!
                      </p>
                    </div>
                    <div className="testimonial-content text-center">
                      <img
                        src={TestimonialImg1}
                        alt="img"
                        className="testimonial-img rounded-pill mx-auto"
                      />
                      <h5 className="mt-3 mb-0">-Talan Arcard</h5>
                      <p>CEO of Ayesha</p>
                    </div>
                  </div>

                  <div className="px-3 pt-4">
                    <div className="testimonial-block text-center position-relative">
                      <img src={Quote} alt="quote" className="quote-img mb-4" />
                      <p class="testimonial-title pb-4">
                        Wonderful motivational book! Very uplifting stories. I
                        bought a couple for my Christmas and birthday presents!
                      </p>
                    </div>
                    <div className="testimonial-content text-center">
                      <img
                        src={TestimonialImg1}
                        alt="img"
                        className="testimonial-img rounded-pill mx-auto"
                      />
                      <h5 className="mt-3 mb-0">-Talan Arcard</h5>
                      <p>CEO of Ayesha</p>
                    </div>
                  </div>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}

      {/* start-section */}
      <section className="start-sec sec-pd bg-grey">
        <Container>
          <Row>
            <Col>
              <div className="text-center">
                <span className="title-tag rounded-pill py-1 px-2 mb-2 d-inline-block">
                  Work Togethor
                </span>
                <h2 className="fw-bold">
                  Let’s Work Together On Your Next Project.
                </h2>
                <p className="mx-auto">
                We're thrilled to collaborate with you on your next project! At Equipped IT, 
                we are dedicated to providing exceptional solutions and bringing your vision to life. 
                Whether you have a specific project in mind or need guidance in defining your requirements, 
                we are here to support you every step of the way.{" "}
                </p>
                <Link
                  to="/php"
                  className="rounded blue-btn blue-bg text-decoration-none text-white mt-4"
                  type="button"
                >
                  Let's Get Started
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
