import React from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

const infoSection = (props) =>{
    Aos.init()
    
    return (
        <div className="infoSection " id="about">
        <div className="infoSection-body hidden">
        
         <div className="infoSection-image">
        
         <img data-aos="fade-up" src={props.src} alt={props.alt} />
         </div>
         <div className="infoSection-content">
         <div className="infoSection-content-heading">
            <p data-aos="fade-up">PUDI implements sustainable packaging </p>
         </div>
         <p data-aos="fade-up" style={{fontWeight:"300"}}>The Environmental Protection Agency (EPA) estimates that <span style={{fontWeight:"bold",color:"rgb(3, 251, 152)",fontSize:"25px",fontStyle:"italic"}}>product packaging makes up 29.9% of the material</span> in municipal solid waste landfills, or 80.1 million tons of trash.
         <br/>
         
         <br/>
         Companies today need to be more conscious of the environmental impact of their packaging. The future lies in <span style={{fontWeight:"bold",color:"rgb(3, 251, 152)",fontSize:"25px",fontStyle:"italic"}}>sustainable packaging that consumes fewer resources, generates less trash, and promotes recycling.</span></p>
         </div>
         </div>
        </div>
    )
}

export default infoSection