import React from 'react'
import './Gallery.css'
import {Container, Col,Row} from 'react-bootstrap'
const Gallery = () => {
    return (
        <Container>
        <br></br> <br></br>
        <Row>
            <Col sm>
                <div className="images1"></div>
            </Col>
            <Col sm>
                <div className="images2"></div>
            </Col>
            <Col sm>
                <div className="images3"></div>
            </Col>
        </Row>
        <br></br><br></br>
        <Row>
            <Col sm>
                <div className="images4"></div>
            </Col>
            <Col sm>
                <div className="images5"></div>
            </Col>
            <Col sm >
                <div className="images6"></div>
            </Col>
        </Row>
        <br></br><br></br><br></br><br></br>
        </Container>
    )
}
export default Gallery
