import React from "react"
import Freshness from "../Assets/Freshness.png"
const infoSection2 = () =>{
    return (
        <div className="infoSection2">
            <div className="infoSection2-body " data-aos="fade-up">
                <div className="infoSection2-content">
                <div className="infoSection2-content-heading">
                    <p>Freshness is Vital</p>
                </div>
                <p>Freshness is vital for the agriculture industry. Though some fruits remain safe to eat for months, <span style={{fontWeight:"bold",color:"rgb(3, 251, 152)",fontSize:"25px",fontStyle:"italic"}}>they may have shorter shelf lives for optimal flavor and freshness.</span>
​                <br/>
<br/>
Freshness is a critical aspect when it comes to fruits. Fresh fruits not only taste better but are also more nutritious.
​
<span style={{fontWeight:"bold",color:"rgb(3, 251, 152)",fontSize:"25px",fontStyle:"italic"}}>Packaging must account for keeping the goods at their peak until purchase.</span></p>
                </div>
                
                <div className="infoSection2-img">
                <img src={Freshness}/>
                </div>
            </div>
        </div>
    )
}

export default infoSection2