import React from 'react';
import { Carousel, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="container mt-3">
      <div className="text-danger">
        <h1>Home Page</h1>
      </div>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/images/slide1.jpg"
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/images/slide2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/images/slide3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="mt-4">
        <Row>
          <Col xs={6} md={2}>
            <Image src="/assets/images/menu-01.jpg" roundedCircle className="d-block w-100" alt="Menu Item 1" />
          </Col>
          <Col xs={6} md={2}>
            <Image src="/assets/images/menu-02.jpg" roundedCircle className="d-block w-100" alt="Menu Item 2" />
          </Col>
          <Col xs={6} md={2}>
            <Image src="/assets/images/menu-03.jpg" roundedCircle className="d-block w-100" alt="Menu Item 3" />
          </Col>
          <Col xs={6} md={2}>
            <Image src="/assets/images/menu-04.jpg" roundedCircle className="d-block w-100" alt="Menu Item 4" />
          </Col>
          <Col xs={6} md={2}>
            <Image src="/assets/images/menu-05.jpg" roundedCircle className="d-block w-100" alt="Menu Item 5" />
          </Col>
          <Col xs={6} md={2}>
            <Image src="/assets/images/menu-06.jpg" roundedCircle className="d-block w-100" alt="Menu Item 5" />
          </Col>
          {/* Add more columns as needed */}
        </Row>
      </div>
      <div className="text-danger">
        <h2>This is Home Page</h2>
      </div>
    </div>
  );
}

export default Home;
