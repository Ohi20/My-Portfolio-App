import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logowhite from '../assets/img/logowhite.png';
import linkedin from'../assets/img/linkedin.svg';
import github from '../assets/img/github.svg';
import behance from '../assets/img/behance.svg';
import './Navbar.css';
export const NavbarTop = () => {

    // Using state for active link
    const [ activeLink, setActiveLink ] = useState('home');
    // using state for scrollling
    const [ scrolled, setScrolled ] = useState(false);
    const navigate = useNavigate();

    // if scroll goes greater than 50 width then setcrolled true
    useEffect(() =>{
        const onScroll = () => {
            if(window.scrollY>40){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

   

    return (
        // checking if scrolled
        <Navbar expand="lg" className={scrolled? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logowhite} alt='Logo'></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* Checking for active link */}
                        <Nav.Link href="#home" className={activeLink === "home" ? 'nav-link active text-muted link-secondary': 'nav-link text-white hover-menu-links'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === "skills" ? 'nav-link active text-muted link-secondary' : 'nav-link text-white hover-menu-links'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === "projects" ? 'nav-link active text-muted link-secondary' : 'nav-link text-white hover-menu-links'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>        
                        <div className='social-icon'>
                            <a href='https://www.linkedin.com/in/ashraf-ohi-a92b70133/' target="_blank"><img src={linkedin} alt='navicon1'></img></a>
                            <a href='https://github.com/Ohi20' target="_blank"><img src={github} alt='navicon2'></img></a>
                            <a href='https://www.behance.net/ashrafohi1' target="_blank"><img src={behance} alt='navicon3'></img></a>
                        </div>
                       <div>
                       <button onClick={()=> onUpdateActiveLink('connect')}><span><a className='letsConnect' href="#connect">Let's Connect</a></span></button>
                       </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

