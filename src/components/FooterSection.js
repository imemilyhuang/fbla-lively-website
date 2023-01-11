import React from "react"
import { Link } from "react-router-dom"

export default function FooterSection(props) {
    const makeLowerCase = props.footerSectionLink.toLowerCase()
    const makeLowerCase2 = props.footerSectionLink2.toLowerCase()

    return (
        <div className="footer-section-container">
            <p className="footer-section-title">
                {props.footerSectionTitle}
            </p>
            <Link to={`/${makeLowerCase}`} className="footer-link-container">
                <div className="footer-link-div">
                    <p>{props.footerSectionLink}</p>
                </div>
            </Link>
            {props.footerSectionLink2 && <Link to={`/${makeLowerCase2}`} className="footer-link-container">
                <div className="footer-link-div">
                    <p>{props.footerSectionLink2}</p>
                </div>
            </Link>}
        </div>
    )
}