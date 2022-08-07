import React from "react"

const PremiumPageCard = (props) => {
    return (
        <div style={styles.container}>
            <img src={props.src} style={styles.image} />
            <p style={styles.text} className="h4">{props.title}</p>
            <p style={styles.text} className="p2">{props.caption}</p>
        </div>
    )
}

export default PremiumPageCard

let styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "15rem",
    },
    image: {
        height: "4rem",
        width: "4rem",
        marginBottom: "2rem"
    },
    text: {
        textAlign: "center"
    }
}