import React from "react"
import Card from "./feature-card"
import JustInTime from "./Assets/justintime.png"
import Inventory from "./Assets/InventoryManagement.png"
import OneStop from "./Assets/onestop.png"
import Support from "./Assets/support.png"
const features = () =>{
    return (
        <div className="features">
        <p>Features</p>
        <div className="features_containers"> 
             <Card src={JustInTime} name="Smile"/>
             <Card src={Inventory} name="Inventory"/>
             <Card src={OneStop} name="One stop"/>
             <Card src={Support} name="24/7 Support"/>
             <Card src={Inventory} name="Inventory"/>
             <Card src={Inventory} name="Inventory"/>
             
        </div>
        </div>
    )
}

export default features