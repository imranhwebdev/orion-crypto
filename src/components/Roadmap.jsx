import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const Roadmap = () => {
  return (
        <Container>
            <Row>
                <Col lg={12}>

                <div class="ftl-horizontal-accordion">
                    <form action="" method="post">
                        <ul>
                            <li>
                                <input type="radio" name="group-01" id="group-01-01" />
                                <label for="group-01-01">HTML5</label>
                                <div>
                                    <h3>HTML5</h3>
                                    <p>HTML5 (No space between "HTML" and "5")is a markup language 
                                    used for structuring and presenting content on the World Wide Web. 
                                    It is the fifth and current version of the HTML standard.</p>
                                </div>
                            </li>
                            <li>
                                <input type="radio" name="group-01" id="group-01-02" />
                                <label for="group-01-02">CSS3</label>
                                <div>
                                    <h3>CSS3</h3>
                                    <p>The CSS was started to develop around 1998. And till 2009, 
                                    it was under development. The first working draft of CSS3 came 
                                    in 19-01-2001. but it was initially declared early in the 
                                    June 1999. The main difference between css2 and css3 is Media 
                                    Queries, Namespaces, Selectors Level 3, Color.</p>
                                </div>
                            </li>
                            <li>
                                <input type="radio" name="group-01" id="group-01-03" checked="checked" />
                                <label for="group-01-03">Bootstrap</label>
                                <div>
                                    <h3>Bootstrap</h3>
                                    <p>Bootstrap is the most popular HTML, CSS and JavaScript 
                                    framework for developing responsive, mobile-first web sites. 
                                    Bootstrap is faster and easier web development.</p>
                                </div>
                            </li>
                            <li>
                                <input type="radio" name="group-01" id="group-01-04" />
                                <label for="group-01-04">JavaScript</label>
                                <div>
                                    <h3>JavaScript</h3>
                                    <p>JavaScript is the programming language of the Web. 
                                    Javascript Most commonly used websites this is client-side 
                                    script to interact with the user and make dynamic pages. 
                                    All modern web browsers on desktops, tablets, and smart 
                                    phones are using JavaScript.</p>
                                </div>
                            </li>
                            <li>
                                <input type="radio" name="group-01" id="group-01-05" />
                                <label for="group-01-05">jQuery</label>
                                <div>
                                    <h3>jQuery</h3>
                                    <p>jQuery is a set of (a rich bundle of) JavaScript libraries 
                                    that helps users apply dynamic functionality to web pages with great ease. 
                                    It is designed to simplify the client-side scripting of HTML.  
                                    jQuery provides several powerful features, including the ability
                                    to access a part of a webpage,..</p>
                                </div>
                            </li>
                            <li>
                                <input type="radio" name="group-01" id="group-01-06" />
                                <label for="group-01-06">PHP</label>
                                <div>
                                    <h3>PHP</h3>
                                    <p>PHP is an acronym for PHP: Hypertext Preprocessor it 
                                    is a widely-used open source(free).  PHP is a server-side 
                                    scripting language designed primarily for web development 
                                    and web applications. Originally created by Rasmus Lerdorf 
                                    in 1994.  PHP files have extension ".php".</p>
                                </div>
                            </li>
                        </ul>
                    </form>
                </div>
                </Col>
            </Row>
        </Container>
  )
}

export default Roadmap