import React from "react"
import Call from "./Assets/Call.png"
import Email from "./Assets/Email.png"
import Web from "./Assets/Web.png"
const contactUs = () => {
    return (
        <div className="contactUs" id="contact">
        <p className="hidden">Contact Us</p>

        <div className="contactUs-body hidden">
        <ul className="contactUs-body-left">
            <li>
            <img src={Call} alt="icon here"/>
            <div className="contactUs-info">
            <p className="contactUs-body-left-heading">Phone no:</p>
            <p className="contactUs-body-left-subHeading">+91-7535900771</p>           
            </div>
            </li>

            <li>
            <img src={Email}  alt="icon here"/>
            <div className="contactUs-info">
            <p className="contactUs-body-left-heading">Email:</p>
            <p className="contactUs-body-left-subHeading">pudi@gmail.com</p>           
            </div>
            </li>


            <li>
            <img src={Web} alt="icon here"/>           
            <div className="contactUs-info">
            <p className="contactUs-body-left-heading">Website:</p>
            <p className="contactUs-body-left-subHeading">www.pudi.co.in</p>           
            </div>
            </li>
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