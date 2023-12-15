import react from "react"

const features_card = (props) => {
    return (
        <div className="Card" data-aos="fade-up">

        <div className="Card_icon">
        <img src={props.src} alt="Image"/>
        </div>

        <div className="Card_des">
        <p>{props.name}</p>
        </div>
         
        </div>
    )
}

export default features_card