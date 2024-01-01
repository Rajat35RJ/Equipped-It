import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import mobileui from '../../assets/mobileUI.png'
import ondemand from '../../assets/onDemandimg.png'
import webdevimg from '../../assets/webdevimg.png'
import uiuximg from '../../assets/uiuximg.png'
import hireimg from '../../assets/hireimg.png'
import ecomimg from '../../assets/ecomimg.png'
import { Link } from 'react-router-dom'




const Services = () => {
  return (
    <section className='banner'>

    <Container >
        <Row className='mb-4'>
           <Col>
           <Card style={{ width: '26rem',height:'30rem' }} className='border-0 shadow'>
      <Card.Img variant="top" className='h-100 w-100' src={mobileui} />
      <Card.Body>
        <Card.Title>Mobile Development</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">   <Link className='text-decoration-none text-white' to='/mobile-development'>
          {'View More ->'} 
          </Link></Button>
      </Card.Body>
    </Card>
           </Col> 
           <Col>
           <Card style={{ width: '26rem',height:'30rem' }} className='border-0 shadow'>
      <Card.Img variant="top" className='h-100 w-100' src={ondemand} />
      <Card.Body>
        <Card.Title>On Demand Solution</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">   <Link className='text-decoration-none text-white' to='/on-demand-solution'>
          {'View More ->'}
          </Link></Button>
      </Card.Body>
    </Card>
           </Col> 
           <Col>
           <Card style={{ width: '26rem',height:'30rem' }} className='border-0 shadow'>
      <Card.Img variant="top" className='h-100 w-100' src={webdevimg} />
      <Card.Body>
        <Card.Title>Web Development</Card.Title>
        <Card.Text>
          Some quick example bulk of the card's content.
        </Card.Text>
        <Button variant="primary">   <Link className='text-decoration-none text-white' to='/web-development'>
          {'View More ->'}
          </Link></Button>

      </Card.Body>
    </Card>
           </Col> 
        </Row>
        <Row>
           <Col>
           <Card style={{ width: '26rem',height:'30rem' }} className='border-0 shadow'>
      <Card.Img variant="top" className='h-100 w-100' src={uiuximg} />
      <Card.Body>
        <Card.Title>UI UX Development</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">   <Link className='text-decoration-none text-white' to='/ui-ux-dev'>
          {'View More ->'}
          </Link></Button>

      </Card.Body>
    </Card>
           </Col> 
           <Col>
           <Card style={{ width: '26rem',height:'30rem' }} className='border-0 shadow'>
      <Card.Img variant="top" className='h-100 w-100' src={hireimg} />
      <Card.Body>
        <Card.Title>Hire Developer</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">   <Link className='text-decoration-none text-white' to='/hire-development'>
          {'View More ->'}
          </Link></Button>

      </Card.Body>
    </Card>
           </Col> 
           <Col>
           <Card style={{ width: '26rem',height:'30rem' }} className='border-0 shadow'>
      <Card.Img variant="top" className='h-100 w-100' src={ecomimg} />
      <Card.Body>
        <Card.Title>E-Commerce Development</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">
          <Link className='text-decoration-none text-white' to='/e-commerce-development'>
          {'View More ->'}
          </Link>
          </Button>
      </Card.Body>
    </Card>
           </Col> 
        </Row>
      
    </Container>
    </section>
  )
}

export default Services
