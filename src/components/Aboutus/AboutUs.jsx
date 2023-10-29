import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from 'react-bootstrap';
import Carousel from '../Carousel/Carousel';
import CollaborationImg from "../../assets/img/collaboration.jpg";
import CommitmentImg from "../../assets/img/commitment.jpg";
import InnovationImg from "../../assets/img/innovation.jpg";
import ResearchAndDevelopmentImg from "../../assets/img/research-and-development.png";
import ProudImg from "../../assets/img/proud.jpg";
const aboutUs = () => {
  return (
    <>
      <section className="banner">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="banner-content text-lg-start text-center">
                <p>
                  At Equipped IT, We believe in the power of technology to transform businesses and drive innovation.
                  As a leading IT company, we specialize in providing cutting-edge solutions tailored to meet the unique needs of our clients.
                  As you step into our realm, you will discover a dynamic team of experts who are passionate about harnessing the power of
                  technology to drive innovation and accelerate growth. We invest in the latest tools, methodologies, and best practices to
                  deliver superior results. Our mission is simple: to connect you with transformative solutions that will propel your business
                  to new heights.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="banner-img">
                <img src={InnovationImg} alt="innovation-img" className="img-fluid d-lg-block d-none" />
              </div>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="banner-img">
                <img src={CommitmentImg} alt="commitement-img" className="img-fluid d-lg-block d-none" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="banner-content text-lg-start text-center">
                <p>
                  What sets us apart is our unwavering commitment to delivering excellence and pushing boundaries.
                  We don't settle for the status quo; we thrive on challenges and relish the opportunity to pioneer groundbreaking solutions.
                  Our startup culture is fueled by creativity, agility, and a relentless pursuit of excellence. We take a client-centric
                  approach, working closely with our customers to understand their goals and challenges. Our team then leverages their
                  technical expertise and industry knowledge to develop strategic solutions that drive tangible results.
                  We understand that every business is unique, and that's why we offer tailor-made solutions designed specifically for
                  your needs. Whether you require cutting-edge software development, transformative AI solutions, robust cybersecurity
                  measures, or seamless cloud integration, Equipped IT has you covered.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="banner-content text-lg-start text-center">
                <p>
                  Our secret ingredient? Collaboration. We believe in building strong partnerships with our clients, working hand in hand
                  to understand their vision, goals, challenges, aspirations and pain points. This collaborative approach allows us to craft
                  personalized strategies and deliver solutions that make a tangible impact on your bottom line. Innovation is in our DNA,
                  but we also value reliability and integrity. We prioritize building long-term relationships with our clients, earning their
                  trust through transparent communication, timely delivery, and unparalleled customer service. Your success is our success,
                  and we are fully committed to going above and beyond to ensure it.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="banner-img">
                <img src={CollaborationImg} alt="collaboration-img" className="img-fluid d-lg-block d-none" />
              </div>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="banner-img">
                <img src={ResearchAndDevelopmentImg} alt="research-and-development-img" className="img-fluid d-lg-block d-none" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="banner-content text-lg-start text-center">
                <p>
                  In the ever-evolving landscape of technology, we recognize the importance of staying ahead of the curve when it comes to
                  emerging technologies. We continuously invest in research and development, offer a comprehensive suite of services,
                  enabling us to offer innovative solutions that keep our clients ahead of the competition. Our agile and adaptable approach
                  ensures that we can quickly respond to evolving market trends and deliver solutions that meet the ever-changing needs of
                  our clients. We possess the expertise and experience to guide you through every step of your digital journey.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="banner-content text-lg-start text-center">
                <p>
                  We are proud of our track record of success and the long-term partnerships we have built with our clients.
                  Our dedication to quality, integrity, and professionalism has earned us a reputation as a trusted IT partner.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="banner-img">
                <img src={ProudImg} alt="proud-img" className="img-fluid d-lg-block d-none" />
              </div>
            </Col>
          </Row>

        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <h1>Why Choose Us?</h1>
          </Row>
          <Row className="align-items-center">
            <div className="container"><Carousel /></div>
          </Row>
          <Row>
            <div className="banner-content text-lg-start text-center">
              <h6>Personalized Approach</h6>
              <p>We treat each client as unique and understand that one size does not fit all.
                Our solutions are customized to address your specific challenges and business objectives.
              </p>

              <h6>Reliability and Expertise</h6>
              <p>With years of experience in the IT industry, our dedicated team of professionals
                has the expertise to deliver top-quality solutions that meet the highest standards.
              </p>

              <h6>Timely and Responsive Support</h6>
              <p>Your business can't afford to wait. We respond promptly to your requests and strive
                to resolve any IT issues quickly, ensuring minimal disruption to your operations.
              </p>
              <h6>Comprehensive IT Solutions</h6>
              <p> From IT consulting to custom software development, cloud solutions,
                cybersecurity, and more, we offer a comprehensive suite of IT services tailored to meet
                your specific needs. Our end-to-end solutions streamline your technology requirements under one roof.
              </p>
              <h6>Data Security and Privacy</h6>
              <p>Your data's security and privacy are paramount to us.
                We implement robust security measures to safeguard your sensitive information,
                ensuring compliance with relevant regulations.
              </p>
              <h6>Innovation and Adaptability</h6>
              <p> Technology is ever-evolving, and we stay at the forefront of innovation.
                Our team keeps abreast of the latest trends and emerging technologies,
                enabling us to provide cutting-edge solutions that keep your business ahead of the curve.
              </p>
              <h6>Cost-Effective Solutions</h6>
              <p>We believe that superior IT services shouldn't break the bank.
                Our cost-effective solutions deliver value without compromising on quality.
              </p>

              <h6>Customer Satisfaction</h6>
              <p>Our ultimate goal is your satisfaction.
                We take pride in delivering exceptional services and solutions that exceed expectations.
                Your success is a testament to our dedication.
              </p>
              <h6>Long-Term Partnership</h6>
              <p>We are not just your IT service provider; we aim to be your long-term partner in success.
                Our dedication to your growth drives us to go the extra mile in exceeding your expectations.
              </p>

            </div>
          </Row>
        </Container>
      </section>
    </>

  )
}

export default aboutUs
