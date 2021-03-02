import React, {Fragment, useState} from 'react';
import Row from 'react-bootstrap/Row';
import {AiOutlineDown, AiOutlineShoppingCart} from 'react-icons/ai';
import {MdLocationOn} from 'react-icons/md';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import MenuItem from 'react-bootstrap/MenuItem'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    return(
        <div className="header-container">
            <Row>
                <img className="header-logo" src="/img/belgian-boys-logo.jpg" width="100" height="100" />
                <div className="main-menu">
                    {/* <Row> */}
                        {/* <div className="main-menu-btn"> */}
                            {/* Shop <AiOutlineDown /> */}
                            <Nav className="main-menu-btn">
                            <Navbar.Collapse id="basic-navbar-nav">
                                <NavDropdown 
                                    className="menu-dropdown"
                                    title="Shop"
                                    id="collasible-nav-dropdown" 
                                    show={isOpen}
                                    onMouseEnter={handleOpen}
                                    onMouseLeave={handleClose}
                                >
                                    <NavDropdown.Item href="#one">All Products</NavDropdown.Item>
                                    <NavDropdown.Item href="#two">Cookies</NavDropdown.Item>
                                    <NavDropdown.Item href="#three">Stroopwafels</NavDropdown.Item>
                                    <NavDropdown.Item href="#four">Breakfast</NavDropdown.Item>
                                    <NavDropdown.Item href="#five">Dessert</NavDropdown.Item>
                                </NavDropdown>
                            </Navbar.Collapse>
                            </Nav>
                        {/* </div> */}
                        <div className="main-menu-btn">Bundles <AiOutlineDown /></div>
                        <div className="main-menu-btn">About Us <AiOutlineDown /></div>
                        <div className="main-menu-btn">Let's Have Fun <AiOutlineDown /></div>
                    {/* </Row> */}
                </div>
                <div className="secondary-menu">
                    <MdLocationOn /> 
                    <AiOutlineShoppingCart />
                </div>
            </Row>
        </div>
    );
}

export default Home;