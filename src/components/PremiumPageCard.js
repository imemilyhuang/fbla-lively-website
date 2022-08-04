import React from "react"

const PremiumPageCard = (props) => {
    return (
        <div>
            <img src={props.src} style={{height: 80, width: 80}} />
            <p className="h3">{props.title}</p>
            <p className="p">{props.caption}</p>
        </div>
    )
}

export default PremiumPageCard