import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import linkedin from'../assets/img/linkedin.svg';
import github from '../assets/img/github.svg';
import behance from '../assets/img/behance.svg';
import logowhite from '../assets/img/logowhite.png';

export const Footer = () => {
    return (
        <footer className="footer">
        <Container>
          <Row className="align-items-center">
            <MailchimpForm />
            <Col size={12} sm={6}>
              <img src={logowhite} alt="Logo" />
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/ashraf-ohi-a92b70133/" target="_blank"><img src={linkedin} alt="Icon" /></a>
                <a href="https://github.com/Ohi20" target="_blank"><img src={github} alt="Icon" /></a>
                <a href="https://www.behance.net/ashrafohi1" target="_blank"><img src={behance} alt="Icon" /></a>
              </div>
              <p>Copyright 2023. All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
};

