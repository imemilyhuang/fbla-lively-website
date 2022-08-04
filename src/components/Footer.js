import React from "react"
import FooterSection from "./FooterSection"
import SocialIcon from "./SocialIcon"
import { Link } from "react-router-dom"

export default function Footer() {
    const footerSectionData = [
        {
            id: 1,
            footerSectionTitle: "PRODUCT",
            footerSectionLink: "Download",
            footerSectionLink2: "Premium",
        }, {
            id: 2,
            footerSectionTitle: "RESOURCES",
            footerSectionLink: "Blog",
            footerSectionLink2: "Support",
        }, {
            id: 3,
            footerSectionTitle: "COMPANY",
            footerSectionLink: "About",
            footerSectionLink2: "",
        },
    ]
    const socialIconData = [
        {
            id: 1,
            alt: "Instagram",
            link: "https://www.instagram.com/livelymobile/",

        }, {
            id: 2,
            alt: "Twitter",
            link: "https://www.instagram.com/livelymobile/",
        }, {
            id: 3,
            alt: "Facebook",
            link: "https://www.instagram.com/livelymobile/",
        }, {
            id: 4,
            alt: "Youtube",
            link: "https://www.instagram.com/livelymobile/",
        },
    ]

    const renderFooterSection = footerSectionData.map(data => {
        return (
            <FooterSection
                key = {data.id}
                footerSectionTitle = {data.footerSectionTitle}
                footerSectionLink = {data.footerSectionLink}
                footerSectionLink2 = {data.footerSectionLink2}
            />
        )
    })
    const renderSocialIcons = socialIconData.map(data => {
        return (
            <SocialIcon
                key = {data.id}
                alt = {data.alt}
                link = {data.link}
                img = {data.img}
                hover = {data.hover}
            />
        )
    })

    return (  
        <div className="footer-container">
            <div className="top-footer-container">
                <div>
                <Link to="/lively">
                    <img
                        src="../assets/lively-logo.png"
                        className="footer-lively-logo"
                        alt="Logo"
                        />
                </Link>
                </div>
                {renderFooterSection}

                <div className="footer-social-container">
                    {renderSocialIcons}
                </div>
            </div>

            <div className="bottom-footer-container">
                <div className="flex-row">
                    <Link to="/lively/terms" className="terms-privacy-cookies bottom-footer-dark-gray-color">
                        Terms
                    </Link>
                    <Link to="/lively/privacy" className="terms-privacy-cookies bottom-footer-dark-gray-color">
                        Privacy
                    </Link>
                    <p className="bottom-footer-dark-gray-color">
                        Cookie settings
                    </p>
                </div>
                <p className="bottom-footer-dark-gray-color">© 2022 Bubbly Studios LLC. All rights reserved.</p>
            </div>

        </div>
    )
}
