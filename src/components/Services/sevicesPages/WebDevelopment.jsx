import React from 'react'
import { Container } from 'react-bootstrap'
import webdevimg from '../../../assets/webdevimg.png'


const WebDevelopment = () => {
  return (
<section className='banner'>
    <Container>
    <div className='d-flex'>
      <img variant="top" className='h-50 w-50' src={webdevimg} />
        <div className='p-4'>
          <h2>

        OUR HIGH-END MOBILE APP DEVELOPMENT SERVICES
          </h2>
          <p>

We offer a full cycle of application design, integration and management services. Whether it is a consumer oriented app or a transformative enterprise-class solution, the company leads the entire mobile app development process from ideation and concept to delivery, and to ongoing ongoing support.
          </p>
        </div>
      </div>
    </Container>
</section>
  )
}

export default WebDevelopment
