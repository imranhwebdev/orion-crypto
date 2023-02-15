import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Cta = () => {
  return (
      <section className="cta-area">
          <Container>
              <Row>
                  <Col lg="12">
                      <div className="cta-area-content">
                          <h2>Need Any Help?</h2>
                          <a href="/#" className="boxed-btn">Contact us</a>
                      </div>
                  </Col>
              </Row>
          </Container>
      </section>
  )
}

export default Cta