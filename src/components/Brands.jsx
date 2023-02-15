import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import poweredImg from "../assets/img/brand-logos/Logo.svg";
import poweredImg2 from "../assets/img/brand-logos/logo2.svg";
import poweredImg3 from "../assets/img/brand-logos/logo3.svg";
import poweredImg4 from "../assets/img/brand-logos/logo4.svg";
import poweredImg5 from "../assets/img/brand-logos/logo5.svg";

import poweredImg6 from "../assets/img/brand-logos/Logo.svg";
import poweredImg7 from "../assets/img/brand-logos/logo2.svg";
import poweredImg8 from "../assets/img/brand-logos/logo3.svg";
import poweredImg9 from "../assets/img/brand-logos/logo4.svg";
import poweredImg10 from "../assets/img/brand-logos/logo5.svg";

const Brands = () => {
  return (
      <section className="brand_logos_area">
          <Container>
            <Row>
                <Col lg='12'>
                    <div className="section-title">
                        <h2>Powered by</h2>
                    </div>
                </Col>
            </Row>
              <Row className="align-items-center g-5">
                  <Col xxl='2' lg='3' sm='6' className="text-center">
                      <a href="/#" target="_blank" className="single_brand_logo_item">
                          <img src={poweredImg} alt="" />
                      </a>
                  </Col>
                  <Col xxl='2' lg='3' sm='6' className="text-center">
                      <a href="/#" target="_blank" className="single_brand_logo_item">
                          <img src={poweredImg2} alt="" />
                      </a>
                  </Col>
                  <Col xxl='2' lg='3' sm='6' className="text-center">
                      <a href="/#" target="_blank" className="single_brand_logo_item">
                          <img src={poweredImg3} alt="" />
                      </a>
                  </Col>
                  <Col xxl='2' lg='3' sm='6' className="text-center">
                      <a href="/#" target="_blank" className="single_brand_logo_item">
                          <img src={poweredImg4} alt="" />
                      </a>
                  </Col>
                  <Col xxl='2' lg='3' sm='6' className="text-center">
                      <a href="/#" target="_blank" className="single_brand_logo_item">
                          <img src={poweredImg5} alt="" />
                      </a>
                  </Col>
              </Row>
              
            <Row>
                <Col lg='12'>
                    <div className="section-title">
                        <h2>Featured by</h2>
                    </div>
                </Col>
            </Row>
            <Row className="align-items-center g-5">
            <Col xxl='2' lg='3' sm='6' className="text-center">
                      <a href="/#" target="_blank" className="single_brand_logo_item">
                          <img src={poweredImg6} alt="" />
                      </a>
                  </Col>
                  <Col xxl='2' lg='3' sm='6' className="text-center">
                      <a href="/#" target="_blank" className="single_brand_logo_item">
                          <img src={poweredImg7} alt="" />
                      </a>
                  </Col>
                  <Col xxl='2' lg='3' sm='6' className="text-center">
                      <a href="/#" target="_blank" className="single_brand_logo_item">
                          <img src={poweredImg8} alt="" />
                      </a>
                  </Col>
                  <Col xxl='2' lg='3' sm='6' className="text-center">
                      <a href="/#" target="_blank" className="single_brand_logo_item">
                          <img src={poweredImg9} alt="" />
                      </a>
                  </Col>
                  <Col xxl='2' lg='3' sm='6' className="text-center">
                      <a href="/#" target="_blank" className="single_brand_logo_item">
                          <img src={poweredImg10} alt="" />
                      </a>
                  </Col>
              </Row>
          </Container>
      </section>
  )
}

export default Brands