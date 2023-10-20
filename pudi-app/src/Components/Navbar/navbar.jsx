import React from "react"
import logo from "../Assets/logo.png"


const Navbar = () => {
    return (
        <div className='navbar'>
            <img className="logo" src={logo} alt="Here is an icon" />

            <div className="nav-ele">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About PUDI</a></li>
                    <li><a href="#">Why Us</a></li>
                    <li><a href="#">Contact</a></li>

                </ul>
            </div>
        </div>
    )
}

export default Navbar