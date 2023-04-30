import React from 'react';
import { Col } from 'react-bootstrap';
import './ProjectCard.css';

export const ProjectCard = ({ title, description, imgUrl, link }) => {
    return (
        <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img className='imgSize' src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br></br>
          <button><a href={link}></a>See</button>
        </div>
      </div>
      
    </Col>
    );
};

 