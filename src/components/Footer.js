import React from "react"
import FooterSection from "./FooterSection"
import SocialIcon from "./SocialIcon"
import { Link } from "react-router-dom"
import useWindowDimensions from "../useWindowDimensions"

export default function Footer() {
    const footerSectionData = [
        {
            id: 1,
            footerSectionTitle: "PRODUCT",
            footerSectionLink: "Download",
            footerSectionLink2: "",
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
            link: "https://twitter.com/livelymobile",
        }, {
            id: 3,
            alt: "Facebook",
            link: "https://www.facebook.com/thelivelyapp/",
        }, {
            id: 4,
            alt: "Youtube",
            link: "https://www.youtube.com/channel/UC4f0yvJ86_pkjo6Z6uDPjUQ",
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

    
    const { _, width } = useWindowDimensions()

    const copyrightMessage = "© 2023 Bubbly Studios LLC. Website and graphics created by Emily Huang and Serena Huang. All rights reserved."

    return (
    <div>
        {width > 1100 &&
            <div className="footer-container">
                <div className="top-footer-container">
                    <div>
                        <Link to="/">
                            <img
                                src={process.env.PUBLIC_URL + "/assets/lively-logo.png"}
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
                        <Link to="/terms" className="terms-privacy-cookies bottom-footer-dark-gray-color">
                            Terms
                        </Link>
                        <Link to="/privacy" className="terms-privacy-cookies bottom-footer-dark-gray-color">
                            Privacy
                        </Link>

                        <Link to="/acknowledgments" className="terms-privacy-cookies bottom-footer-dark-gray-color">
                            Acknowledgments
                        </Link>
                    </div>
                </div>
                <div className="bottom-footer-container">
                    <p className="bottom-footer-dark-gray-color" style={{display: "flex", alignSelf: "flex-start"}}>
                        {copyrightMessage}
                    </p>        
                </div>
            </div>
        }

        {width <= 1100 && width > 900 &&
            <div className="footer-container">
                <div style={styles.containerBP1}>
                    <Link to="/" className="nav-home-container">
                        <div style={styles.footerHomeDiv}>
                            <img
                                src={process.env.PUBLIC_URL + "/assets/lively-logo.png"}
                                style={styles.footerLivelyLogo}
                                alt="Logo"
                            />
                            <p className="nav-title">Lively</p>
                        </div>
                    </Link>
                </div>

                <div className="top-footer-container">
                    {renderFooterSection}

                    <div className="footer-social-container">
                        {renderSocialIcons}
                    </div>
                </div>

                <div className="bottom-footer-container">
                    <div style={styles.containerBP1} className="flex-row">
                        <Link to="/terms" className="terms-privacy-cookies bottom-footer-dark-gray-color">
                            Terms
                        </Link>
                        <Link to="/privacy" className="terms-privacy-cookies bottom-footer-dark-gray-color">
                            Privacy
                        </Link>

                        <Link to="/acknowledgments" className="terms-privacy-cookies bottom-footer-dark-gray-color">
                            Acknowledgments
                        </Link>
                    </div>
                </div>

                <p className="bottom-footer-dark-gray-color" style={{display: "flex", alignSelf: "flex-start"}}>
                    {copyrightMessage}
                </p>
            </div>
        }

        {width <= 900 && width > 700 &&
            <div className="footer-container">
                <div style={styles.containerBP2}>
                    <Link to="/" className="nav-home-container">
                        <div style={styles.footerHomeDiv}>
                            <img
                                src={process.env.PUBLIC_URL + "/assets/lively-logo.png"}
                                style={styles.footerLivelyLogo}
                                alt="Logo"
                            />
                            <p className="nav-title">Lively</p>
                        </div>
                    </Link>
                    <div className="footer-social-container">
                        {renderSocialIcons}
                    </div>
                </div>

                <div className="top-footer-container">
                    {renderFooterSection}
                </div>

                <div className="bottom-footer-container">
                    <div style={styles.containerBP1} className="flex-row">
                        <Link to="/terms" className="terms-privacy-cookies bottom-footer-dark-gray-color">
                            Terms
                        </Link>
                        <Link to="/privacy" className="terms-privacy-cookies bottom-footer-dark-gray-color">
                            Privacy
                        </Link>

                        <Link to="/acknowledgments" className="terms-privacy-cookies bottom-footer-dark-gray-color">
                            Acknowledgments
                        </Link>
                    </div>
                </div>

                <p className="bottom-footer-dark-gray-color" style={{display: "flex", alignSelf: "flex-start"}}>
                    {copyrightMessage}
                </p>
            </div>
        }

        {width <= 700 && width > 550 &&
            <div className="small-footer-container">
                <div style={styles.containerBP1}>
                    <Link to="/" className="nav-home-container">
                        <div style={styles.footerHomeDiv}>
                            <img
                                src={process.env.PUBLIC_URL + "/assets/lively-logo.png"}
                                style={styles.footerLivelyLogo}
                                alt="Logo"
                            />
                            <p className="nav-title">Lively</p>
                        </div>
                    </Link>
                </div>

                <div className="footer-social-container" style={styles.containerBP1}>
                    {renderSocialIcons}
                </div>

                <div className="top-footer-container" style={styles.containerBP1}>
                    {renderFooterSection}
                </div>

                <div style={styles.containerBP1} className="flex-row">
                    <Link to="/terms" className="terms-privacy-cookies bottom-footer-dark-gray-color">
                        Terms
                    </Link>
                    <Link to="/privacy" className="terms-privacy-cookies bottom-footer-dark-gray-color">
                        Privacy
                    </Link>

                    <Link to="/acknowledgments" className="terms-privacy-cookies bottom-footer-dark-gray-color">
                        Acknowledgments
                    </Link>
                </div>

                <p className="bottom-footer-dark-gray-color" style={{display: "flex", alignSelf: "flex-start"}}>
                    {copyrightMessage}
                </p>
            </div>
        }

        {width <= 550 &&
            <div className="small-footer-container">
                <div style={styles.containerBP1}>
                    <Link to="/" className="nav-home-container">
                        <div style={styles.footerHomeDiv}>
                            <img
                                src={process.env.PUBLIC_URL + "/assets/lively-logo.png"}
                                style={styles.footerLivelyLogo}
                                alt="Logo"
                            />
                            <p className="nav-title">Lively</p>
                        </div>
                    </Link>
                </div>

                <div className="footer-social-container" style={styles.containerBP1}>
                    {renderSocialIcons}
                </div>

                <div className="top-footer-container" style={styles.gridColumn}>
                    {renderFooterSection}
                </div>

                <div style={styles.containerBP1} className="flex-row">
                    <Link to="/terms" className="terms-privacy-cookies bottom-footer-dark-gray-color">
                        Terms
                    </Link>
                    <Link to="/privacy" className="terms-privacy-cookies bottom-footer-dark-gray-color">
                        Privacy
                    </Link>

                    <Link to="/acknowledgmens" className="terms-privacy-cookies bottom-footer-dark-gray-color">
                        Acknowledgments
                    </Link>
                </div>

                <p className="bottom-footer-dark-gray-color" style={{display: "flex", alignSelf: "flex-start"}}>
                    {copyrightMessage}
                </p>
            </div>
        }
    </div>
    )
}

let styles = {
    containerBP1: {
        display: "flex",
        alignSelf: "flex-start",
        marginBottom: "3rem",
    },
    containerBP2: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginBottom: "3rem",
    },
    gridColumn: {
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "3rem",
        marginBottom: "3rem",
    },
    footerHomeDiv: {
        display: "flex",
        alignItems: "center",
    },
    footerLivelyLogo: {
        height: "3rem",
        marginRight: "1rem",
    },
}