import React, { useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import CustomInputField from "../../CustomTags/CustomInputField";
import { Link } from "react-router-dom";
import { useState } from "react";
import emailjs from "@emailjs/browser";   

const ContactUs = () => {

  const [userState,setUserState] = useState({
    name:'',
    email:'',
    phone:'',
    comment:''
  })

  useEffect(()=>{
    emailjs.init("_Q35GWD-iKwyp4567")
  },[])

  const serviceId = "service_auv1ltf";
  const templateId = "template_trw38eg";
  
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setUserState({...userState,[name]:value})
  }

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
      await emailjs.send(serviceId, templateId, {
        to_name: userState.name,
        form_name:userState.email,
        message:`Phone: ${userState.phone} {' '} ${userState.comment}`,
        reply_to:userState.email,
      })
      setUserState({
        name:'',
        email:'',
        phone:'',
        comment:''
      })
      alert("email successfully sent check inbox");
    } catch (error) {
      console.log(error);
    } 
  }


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
            <Form onSubmit={handleSubmit}>
            <CustomInputField placeholder="What's Your Name*"name='name' action={handleChange} />
            <CustomInputField placeholder="Enter Your Email Address*" name='email' action={handleChange} />
            <CustomInputField placeholder="Phone No" name='phone' action={handleChange} />
            <CustomInputField placeholder="How Can We Help You?*" name='comment' action={handleChange}/>
            <div className="d-flex justify-content-end">
            <Button className="px-4 rounded-pill" type="submit" variant="primary"> 
          Submit
</Button>
            </div>
            </Form>
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
                  <i className="fa-solid fa-envelope position-absolute"></i>{" "}
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

export default ContactUs;
