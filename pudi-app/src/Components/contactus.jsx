import React from "react"
import Call from "./Assets/Call.png"
import Email from "./Assets/Email.png"
import Web from "./Assets/Web.png"
const contactUs = () => {
    return (
        <div className="contactUs">
        <p>Contact Us</p>

        <div className="contactUs-body">
        <ul>
            <li><img src={Call}/><span>+91-7535900771</span></li>
            <li><img src={Email}/><span>www.pudi.co.in</span></li>
            <li><img src={Web}/><span>info@pudi.co.in</span></li>
            <li><textarea placeholder="Write a message"></textarea></li>
        </ul>
        </div>
        </div>
    )
}

export default contactUs