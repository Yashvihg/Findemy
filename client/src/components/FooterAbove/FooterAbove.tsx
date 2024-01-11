import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./FooterAbove.css";

function FooterAbove() {
  return (
    <Container fluid className="footer-above">
      <Row className="footer-row justify-content-between align-items-center">
        <Col className="footer-text fw-bold" sm={12} md={12} lg={7}>
          Top companies choose <span style={{color: "#be8ae1"}}>Udemy Business</span> to build in-demand career skills.
        </Col>
        <Col className="col-md-5 align-items-center">
          <img className="image"
            src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg"
            alt="nasdaq-logo"
          />
          <img className="image"
            src="	https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg"
            alt="volks-logo"
          />

          <img className="image"
            src="https://s.udemycdn.com/partner-logos/v4/box-light.svg"
            alt="box-logo"
          />

          <img className="image"
            src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg"
            alt="netapp-logo"
          />
        {/* </Col> */}
        {/* <Col> */}
          <img className="image"
            src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg"
            alt="eventbrite-logo"
          />
        </Col>
      </Row>
      {/* <hr />   */}
    </Container>
  );
}


export default FooterAbove;
