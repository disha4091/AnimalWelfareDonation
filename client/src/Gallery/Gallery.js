import React from 'react'
import './Gallery.css'
import {Container, Col,Row} from 'react-bootstrap'
const Gallery = () => {
    return (
        <Container>
        <br></br> <br></br>
        <Row>
            <Col xs={6} md={4}>
                <div className="images1"></div>
            </Col>
            <Col xs={6} md={4}>
                <div className="images2"></div>
            </Col>
            <Col xs={6} md={4}>
                <div className="images3"></div>
            </Col>
        </Row>
        <br></br><br></br>
        <Row>
            <Col xs={6} md={4}>
                <div className="images4"></div>
            </Col>
            <Col xs={6} md={4}>
                <div className="images5"></div>
            </Col>
            <Col xs={6} md={4}>
                <div className="images6"></div>
            </Col>
        </Row>
        
        </Container>
    )
}

export default Gallery
