import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Investment_objectives = () => {
  return (
      <section className="investment_objectives-area">
          <Container>
              <Row>
                  <Col lg="6">
                      <div className="investment_objectives-area-content">
                          <h3>The investment objectives< br /> of Orion Crypto AMC are<br /> Regulated Fund</h3>
                          <a href="/#" className="inline_btn">Learn more</a>
                      </div>
                  </Col>
                  
                  <Col lg="6">
                      <div className="investment_objectives-area-content-right">
                        <div className="single-item-object-count">
                            <h3 className='count'>10+</h3>
                            <p>Orion Crypto AMC is a cutting-edge investment opportunity for those looking to gain exposure to both traditional</p>
                        </div>
                        <div className="single-item-object-count">
                            <h3 className='count'>50+</h3>
                            <p>Orion Crypto AMC is a cutting-edge investment opportunity for those looking to gain exposure to both traditional</p>
                        </div>
                      </div>
                  </Col>
              </Row>
          </Container>
      </section>
  )
}

export default Investment_objectives