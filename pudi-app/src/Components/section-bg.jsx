import React from "react"
import BG1 from "./Assets/bg1.png"
import BG2 from "./Assets/bg2.gif"
import BG3 from "./Assets/bg3.png"
const SectionBg = () => {
return (
  <div> 
    <div className="sectionBg">
        <img decoding="async" className="img-slide active" src={BG1} alt="Here is an image 1"></img>
        {/* <img decoding="async" className="img-slide" src={BG2} alt="Here is an image 2"></img>
        <img className="img-slide" src={BG3} alt="Here is an image 3"/>
        */}
    </div>
    <div class="slider-navigation">
            <div class="nav-btn active"></div>
            <div class="nav-btn"></div>
            <div class="nav-btn"></div>
            <div class="nav-btn"></div>
            <div class="nav-btn"></div>
    </div>
</div> 
)
}

export default SectionBg