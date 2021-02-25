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

    }

    const handleClose = () => {
        
    }

    return(
        <div className="header-container">
            <Row>
                <img className="header-logo" src="/img/belgian-boys-logo.jpg" width="100" height="100" />
                <div className="main-menu">
                    <Row>
                        <div className="main-menu-btn">
                            Shop <AiOutlineDown />
                            <div >
                            <ul className="menu-dropdown">
                                <li>All Products</li>
                                <li>Cookies</li>
                                <li>Stroopwafels</li>
                                <li>Breakfast</li>
                                <li>Dessert</li>
                            </ul>
                            </div>
                        </div>
                        <div className="main-menu-btn">Bundles <AiOutlineDown /></div>
                        <div className="main-menu-btn">About Us <AiOutlineDown /></div>
                        <div className="main-menu-btn">Let's Have Fun <AiOutlineDown /></div>
                    </Row>
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