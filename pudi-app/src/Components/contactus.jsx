import React from "react"
import Call from "./Assets/Call.png"
import Email from "./Assets/Email.png"
import Web from "./Assets/Web.png"
const contactUs = () => {
    return (
        <div className="contactUs" id="contact">
        <p className="hidden">Contact Us</p>

        <div className="contactUs-body hidden" data-aos="fade-up">
        <ul className="contactUs-body-left" data-aos="fade-right">
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

            <p><iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3559.360974164618!2d81.03497377543763!3d26.860270176678508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDUxJzM3LjAiTiA4McKwMDInMTUuMiJF!5e0!3m2!1sen!2sin!4v1702464619544!5m2!1sen!2sin" width="400" height="300" style={{border:"0", height:"200px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
        </ul>

        <div className="divider"></div>
        <div className="contactUs-body-form" data-aos="fade-left">
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