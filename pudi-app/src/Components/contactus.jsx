import React from "react"
import Call from "./Assets/Call.png"
import Email from "./Assets/Email.png"
import Web from "./Assets/Web.png"
const contactUs = () => {
    return (
        <div className="contactUs">
        <p className="hidden">Contact Us</p>

        <div className="contactUs-body hidden">
        <ul>
            <li><img src={Call} alt="icon here"/><span>+91-7535900771</span></li>
            <li><img src={Email} alt="icon here"/><span>www.pudi.co.in</span></li>
            <li><img src={Web} alt="icon here"/><span>info@pudi.co.in</span></li>
            <li><textarea placeholder="Write a message"></textarea></li>
        </ul>
        </div>
        </div>
    )
}

export default contactUs