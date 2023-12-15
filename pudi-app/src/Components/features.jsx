import React from "react"
import Card from "./feature-card"
import JustInTime from "./Assets/justintime.png"
import Inventory from "./Assets/InventoryManagement.png"
import OneStop from "./Assets/onestop.png"
import Support from "./Assets/support.png"
const features = () =>{
    return (
        <div className="features" id="feature">
        <p className="hidden" data-aos="fade-up">Features</p>
        <div className="features_containers hidden" data-aos="fade-up" > 
             <Card data-aos="fade-up" src={JustInTime} name="Just in time" />
             <Card data-aos="fade-up"src={Inventory} name="Inventory" />
             <Card data-aos="fade-up" src={OneStop} name="One stop" />             
             <Card data-aos="fade-up" src={Support} name="24/7 Support"/>
             <Card data-aos="fade-up" src={Inventory} name="Inventory"/>
             <Card data-aos="fade-up" src={Inventory} name="Inventory"/>
             
        </div>
        </div>
    )
}

export default features