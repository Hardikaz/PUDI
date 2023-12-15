import React from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

const infoSection = (props) =>{
    Aos.init()
    
    return (
        <div className="infoSection " id="about">
        <div className="infoSection-body hidden" data-aos="fade-up">
         <div className="infoSection-image">
        
         <img src={props.src} alt={props.alt} />
         </div>
         <div className="infoSection-content">
         <p>The Environmental Protection Agency (EPA) estimates that product packaging makes up 29.9% of the material in municipal solid waste landfills, or 80.1 million tons of trash.
         <br/>
         <br/>
         <br/>
         Companies today need to be more conscious of the environmental impact of their packaging. The future lies in sustainable packaging that consumes fewer resources, generates less trash, and promotes recycling.</p>
         </div>
         </div>
        </div>
    )
}

export default infoSection