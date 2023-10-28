import React from 'react';
import { Container } from 'react-bootstrap';
import CarouselForService from '../Carousel/CarouselForService';

const ITConsultingAndStrategy = () => {
  return (
    <>
    <section className="banner">
      <CarouselForService />      
    </section>
    <section className='our-services'>
      <Container>
        
        We practice of providing expert advice and guidance to businesses and 
        organizations on how to use information technology effectively to achieve their objectives and 
        improve overall performance. 
        We with specialized knowledge and experience in various IT domains. 
        We work closely with clients to understand their unique needs and challenges and 
        then develop tailored solutions to address those issues.
      </Container>
    </section>
    </>
  )
}

export default ITConsultingAndStrategy
