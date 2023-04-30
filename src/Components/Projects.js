import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import Music from "../assets/img/Music.png";
import Movie from "../assets/img/Movie.png";
import Assignment11 from "../assets/img/Assignment11.png";
import Neomarket from "../assets/img/Neomarket.png";
import Assignment12 from "../assets/img/Assignment12.png";
import Assignment3 from "../assets/img/Assignment3.png";
import Assignment6 from "../assets/img/Assignment6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import { ProjectCard } from "./ProjectCard";
import 'animate.css';

export const Projects = () => {

  let url1 = new URL('https://zingy-nasturtium-6aa2f1.netlify.app/');
  const projects = [
    {
      title: "Enjoy Music of favourites",
      link: url1,
      description: "Collection of my fav songs",
      imgUrl: Music,
    },
    {
      title: "Movies and Shows",
      link: "https://visionary-starlight-8f01ca.netlify.app/",
      description: "Find a movie by calling API",
      imgUrl: Movie,
    },
    {
      title: "Speedo",
      description: "A warehouse management system",
      imgUrl: Assignment11,
    },
  ];


  const projects1 = [
    {
      title: "REST API",
      link: url1,
      description: "Search Products with API",
      imgUrl: Assignment6,
    },
    {
      title: "Ecommerce",
      description: "A platform where you can buy products from online",
      imgUrl: Neomarket,
    },

  ];

  const projects2 = [
    {
      title: "Camerassories",
      description: "A making appointment for building products platform",
      imgUrl: Assignment12,
    },
    {
      title: "Wedding Ceremony",
      description: "A platform where stores happy activities and memories from wedding",
      imgUrl: Assignment3,
    },

  ];



  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                  <h2>My Projects</h2>
                  <p>I've worked at start-ups, wants to work with tech companies and corporates on a range of different projects, including design systems, websites and apps.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">List 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">List 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">List 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            projects1.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            projects2.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

