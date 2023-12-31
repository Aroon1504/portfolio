import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';


export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home')

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    })


    const  onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

    return (
        <Navbar expand="lg" className= {scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                   <span className="logo">PORTFOLIO</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className = {activeLink === 'home' ?  'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className = {activeLink === 'skills' ?  'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className = {activeLink === 'projects' ?  'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href='https://www.linkedin.com/in/arun1504/'>
                                <LinkedInIcon className=".icon-links"/>
                            </a>
                            <a href='https://github.com/aroon1504'>
                                <GitHubIcon className=".icon-links"/>
                            </a>
                            <a href='https://www.instagram.com/a_r_o_o_n_15/'>
                               <InstagramIcon className=".icon-links"/>
                            </a>
                        </div>
                        <button className='vvd' onClick={() => console.log('connect')}>
                            <span>
                                Let's Connect
                            </span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


