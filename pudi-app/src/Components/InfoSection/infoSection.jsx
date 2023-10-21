import React from "react";

const infoSection = (props) =>{
    return (
        <div className="infoSection ">
        <div className="infoSection-body hidden">
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