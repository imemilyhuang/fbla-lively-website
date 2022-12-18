import React from "react"

const SocialIcon = (props) => {
    var defaultIcon
    var hoverIcon
    if (props.alt === "Instagram") {
        defaultIcon = "/assets/footer-social-icons/insta-default.png"
        hoverIcon = "/assets/footer-social-icons/insta-hover.png"
    }
    if (props.alt === "Twitter") {
        defaultIcon = "/assets/footer-social-icons/twitter-default.png"
        hoverIcon = "/assets/footer-social-icons/twitter-hover.png"
    }
    if (props.alt === "Facebook") {
        defaultIcon = "/assets/footer-social-icons/facebook-default.png"
        hoverIcon = "/assets/footer-social-icons/facebook-hover.png"
    }
    if (props.alt === "Youtube") {
        defaultIcon = "/assets/footer-social-icons/youtube-default.png"
        hoverIcon = "/assets/footer-social-icons/youtube-hover.png"
    }
    
    const [icon, setIcon] = React.useState(defaultIcon)


    function handleHover() {
        setIcon(hoverIcon)
    }
    function handleLeave() {
        setIcon(defaultIcon)
    }

    const iconStyle = props.alt !== "Instagram" ? styles.container : styles.container2

    return (
    <div style={iconStyle}>
        <a href={`${props.link}`}
            target="_blank" rel="noopener noreferrer"
            onMouseOver={handleHover}
            onMouseLeave={handleLeave}
        >
            <div>
                <img
                    src={process.env.PUBLIC_URL + icon}
                    style={styles.icon}
                    alt={`${props.alt}`}
                />
            </div>
        </a>
    </div>
)
}

export default SocialIcon

let styles = {
    container: {
        marginLeft: "2.5rem", 
        marginTop: "0rem",
    },
    container2: {
        marginTop: "0rem",
    },
    icon: {
        width: "2rem",
    }
  }