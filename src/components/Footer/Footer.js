import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="py-5 bg-dark text-white">
            <Container>
                <Row>
                    <Col xs={12} md={3}>
                        <div>
                            <h5 className="text-danger mb-3">ABOUT MOVIE STAR</h5>
                            <p className="mb-0">About us</p>
                            <p className="mb-0">Find us</p>
                            <p className="mb-0">Schedule</p>
                        </div>
                    </Col>
                    <Col xs={12} md={3}>
                        <div>
                            <h5 className="text-danger mb-3">GET IN TOUCH</h5>
                            <p className="mb-0">FAQs</p>
                            <p className="mb-0">Give us feedback</p>
                            <p className="mb-0">Contact us</p>
                        </div>
                    </Col>
                    <Col xs={12} md={3}>
                        <div>
                            <h5 className="text-danger mb-3">LEGAL STUFF</h5>
                            <p className="mb-0">Terms & Conditions</p>
                            <p className="mb-0">Privacy policy</p>
                            <p className="mb-0">Cookie policy</p>
                        </div>
                    </Col>
                    <Col xs={12} md={3}>
                        <div>
                            <h5 className="text-danger mb-3">CONNECT WITH US</h5>
                            <p className="mb-0">Facebook</p>
                            <p className="mb-0">Twitter</p>
                            <p className="mb-0">Google</p>
                        </div>
                    </Col>
                </Row>
                <div className="mt-5">
                    <hr />
                    <p className="text-muted">2021 © Movie Star / Web design by Hayatul Emon</p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;