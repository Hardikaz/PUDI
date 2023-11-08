import React from "react"
import logo from "../Assets/logo.png"
import Button from 'react-bootstrap/Button';

const Navbar = () => {
    return (
        <div className="navbar" >
            <img className="logo" src={logo} alt="Here is an icon" />

            <div className="nav-ele" >
                <ul>
                   <a href="#home" style={{textDecoration:"none"}}><li>Home</li></a>
                   <a href="#about" style={{textDecoration:"none"}}><li>About PUDI</li></a>
                   <a href="#feature" style={{textDecoration:"none"}}><li>Features</li></a>
                   <a href="#contact" style={{textDecoration:"none"}}><li>Contact US</li></a>
                   <a ><Button variant="outline-success">Our Team</Button>{' '}</a>
                </ul>
                
            </div>
        </div>
    )
}

export default Navbar