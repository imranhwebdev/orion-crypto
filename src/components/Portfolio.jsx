import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const Portfolio = () => {
  return (
      <section className="portfolio-area">
          <Container>
              <Row>
                  <Col lg="12 text-center">
                      <div className="section-title">
                        <h2>Our <span>Portfolio</span> </h2>
                      </div>
                  </Col>
              </Row>
              <Row>
                <Col lg='6'>
                    <div className="portfolio-content-box">
                        <h4>Variable</h4>
                        <p>Variable investment options are a type of investment that can offer potential for higher returns than more traditional investments, but they also come with more risk. </p>
                        <p>With a variable investment, the value of the investment can go up or down, and the investor may not be able to get all of their money back. For this reason, it's important to carefully consider whether a variable investment is right for you before putting any money into it. </p>
                        <p>When making a decision about whether to invest in something, it's important to think about your goals and what you're willing to risk in order to achieve them. Variable investment options can be a great way to grow your money, but only if you're willing and able to take on the additional risk.</p>
                        <p>Our Variable investment option allows investors to deposit through the fund from a range of accepted stable coins, You can then choose how frequently you would like to receive a return on the capital either Monthly, Quarterly and Annually or alternatively you can compound that return. </p>
                        <p>The invested capital will be diversified by our fund managers LAX Capital to provide optimum utilisation of the capital and its performance.</p>
                        <p>Forecast Return :<br /> <b>25% - 150% per annum</b></p>
                    </div>
                    <div className="portfolio-content-box two">
                    </div>
                    <div className="portfolio-content-box three">
                    </div>
                    <div className="portfolio-content-box four">
                    </div>
                </Col>
              
                <Col lg='6'>
                    <div className="portfolio-content-box">
                        <h4>FIXED - Passive Income</h4>
                        <p>We offer a passive income node model for investors backed and supported by the capital protection and performance of the fund?</p>
                        <p>Fixed investment options provide the investor with a number of advantages. First, the investor knows exactly how much money will be invested and how long the investment will last. This predictability is helpful in planning for other financial goals. Second, fixed investment options tend to have lower risks than other types of investments, making them a good choice for risk-averse investors. Finally, fixed investment options often provide higher returns than other types of investments, making them a good choice for long-term growth. Fixed investment options are a popular choice for many investors, and they can be a good way to reach financial goals.</p>
                    </div>
                    <div className="portfolio-content-box">
                        <p>Our Fixed return model provides passive income for investors this model allows investors to purchase our token direct from our DEX. Once you have purchased 25 tokens you can BUY a ???Portfolio??? the crypto spent on this Portfolio goes into the Orion Crypto AMC to be invested by our fund managers LAX Capital, Your ???Portfolio??? then generates 0.01 Orion tokens per day giving you immediate passive income and a return of :</p>
                        <h5>1 Portfolio $500 = 25 Orion Tokens</h5>
                        <ul>
                            <li><a href="#">Daily</a></li>
                            <li><a href="#">Weekly</a></li>
                            <li><a href="#">Monthly</a></li>
                            <li><a href="#">Anually</a></li>
                            <li><a href="#">Break Even</a></li>
                        </ul>
                        <p>You can ???liquidate??? your tokens at your own convenience giving you total control through our interactive dashboard. You can swap your Orion tokens for USDC and move to your personal wallet.</p>
                        <h5>Forecast Return : 25% per annum</h5>
                    </div>
                </Col>
              </Row>
          </Container>
      </section>
  )
}

export default Portfolio