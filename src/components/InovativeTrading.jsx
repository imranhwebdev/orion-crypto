import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InovativeImg from '../assets/img/innovative-trading.png'
const Inovative_trading = () => {
  return (
      <section className="inovative_trading_area">
          <Container>
              <Row className='align-items-center'>
                  <Col xl="7">
                      <div className="inovative_trading_content">
                        <div className="section-title">
                            <h2>Orion Crypto: Innovative <br/> Trading for Consistent Returns</h2>
                        </div>
                        <div className="sngle-item-list">
                           <ol>
                            <li>Investment objective is to achieve passive income and capital growth through investing in highly liquid trading strategies and cryptocurrencies.</li>
                            <li>Engages in yield enhancement strategies with structured notes and financial instruments from leading European institutions.</li>
                            <li>Utilizes an aggressive trading model with algos and bots overseen by expert traders</li>
                            <li>Investors can invest directly in cryptocurrency or through traditional FIAT route.</li>
                            <li>Structured products provide trust, longevity, and sustainability for the fund.</li>
                            <li>Distinguished from other players in the digital asset space.</li>
                           </ol>
                        </div>
                      </div>
                  </Col>
                  <Col xl='5'>
                    <div className="inovative-trading-img">
                        <img src={InovativeImg} alt="" />
                    </div>
                  </Col>
              </Row>
          </Container>
      </section>
  )
}

export default Inovative_trading