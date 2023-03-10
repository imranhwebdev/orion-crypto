import React from 'react';
import { Link } from "react-router-dom";
import { FaDiscord, FaPaperPlane, FaTwitter, FaInstagram } from 'react-icons/fa';
import Logo from "../assets/img/site-logo.svg";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => {
    return (
        <footer className="footer-area">
            <Container>
                <Row>
                    <Col lg="4" sm='6'>
                        <div className="footer-left">
                            <Link to='/' className="footer-logo" href="/">
                                <img src={Logo} alt="site-logo" />
                            </Link>
                            <p>Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper </p>
                            <div className="social-icons">
                                <a href="/#"><FaDiscord /></a>
                                <a href="/#"><FaPaperPlane /></a>
                                <a href="/#"><FaTwitter /></a>
                                <a href="/#"><FaInstagram /></a>
                            </div>  
                        </div>
                    </Col>
                    <Col lg={{span: 2, offset: 1}} md="6" className="mt-xxl-0">
                      <div className="footer-widget">
                          <h4>General</h4>
                          <ul>
                              <li><a href="/#">Home</a></li>
                              <li><a href="/#">Support</a></li>
                              <li><a href="/#">Help</a></li>
                              <li><a href="/#">Terms & Conditions</a></li>
                          </ul>
                      </div>
                    </Col>
                    <Col lg='3' sm='6'>
                        <div className="footer-widget">
                            <h4>Contact</h4>
                            <ul>
                                <li><a href="/#">Email</a></li>
                                <li><a href="/#">Website</a></li>
                                <li><a href="/#">Telephone</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg="2" sm="6">
                        <div className="footer-widget">
                            <h4>Office Location</h4>
                            <ul>
                                <li><a href="/#">London</a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer