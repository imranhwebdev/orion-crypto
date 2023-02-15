import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const NoPage = () => {
    return (
        <div className="error_page">
            <Container>
                <Row>
                    <Col md="12" className="text-center">
                        <h1 className="text-white fw-bold">404</h1>
                        <p className="text-white opacity-50">Page Not Found</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}