import React from "react"
import logo from "../Assets/logo.png"


const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={logo} alt="Here is an icon" />

            <div className="nav-ele">
                <ul>
                    <li>Home</li>
                    <li>About PUDI</li>
                    <li>Why Us</li>
                    <li>Contact</li>

                </ul>
            </div>
        </div>
    )
}

export default Navbar