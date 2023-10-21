import React from "react"
import Call from "./Assets/Call.png"
import Email from "./Assets/Email.png"
import Web from "./Assets/Web.png"
const contactUs = () => {
    return (
        <div className="contactUs" id="contact">
        <p className="hidden">Contact Us</p>

        <div className="contactUs-body hidden">
        <ul>
            <li><img src={Call} alt="icon here"/><span  className="contactUs-info">+91-7535900771</span></li>
            <li><img src={Email} style={{height:"60px", borderRadius:"10px"}} alt="icon here"/><span className="contactUs-info">www.pudi.co.in</span></li>
            <li><img src={Web} style={{height:"80px"}}alt="icon here"/><span className="contactUs-info">info@pudi.co.in</span></li>
            {/* <li><textarea placeholder="Write a message"></textarea></li> */}
        </ul>
        <div className="divider"></div>
        <div className="contactUs-body-form">
            <form action="#" method="POST">
            <label for="name">Name: </label> 
            <input type="text" className="input" placeholder="Enter your name" name="name"/>
            <label for="number">Number: </label> 
            <input type="number" className="input" placeholder="Enter your name" name="number"/>
            <label for="area">Your Message: </label> 
            <textarea placeholder="Write a message" name="area" className="input-area" ></textarea>
            <button type="submit">Submit</button>
            </form>
        </div>
        </div>
        </div>
    )
}

export default contactUs