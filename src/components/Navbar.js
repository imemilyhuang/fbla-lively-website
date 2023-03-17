import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from "body-scroll-lock"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import colors from "../colors"
import useWidth from "../useWidth"

import "./Navbar.scss"

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false)

    const targetElement = document.querySelector("#root");
    
    useEffect(() => {
        if (navbarOpen) {
            disableBodyScroll(targetElement)
        } else {
            enableBodyScroll(targetElement)
        }

        return () => clearAllBodyScrollLocks()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navbarOpen])
    

    const width = useWidth()

    if (width > 1100) {
        document.body.style.overflowY = "scroll"
    } else if (navbarOpen) {
        document.body.style.overflowY = "hidden"
    }

    return (
    <nav className="nav-container">
        <div className={width > 700 ? "nav-width-control" : "small-nav-width-control"}>
            <Link to="/" className="nav-home-container">
                <div style={styles.navHomeDiv}>
                    <img
                        src={process.env.PUBLIC_URL + "/assets/lively-logo.png"}
                        style={styles.navLivelyLogo}
                        alt="Logo"
                    />
                    <p className="nav-title">Lively</p>
                </div>
            </Link>

            {width > 1100 &&
                <div className="all-nav-links">
                    <Link to="/download" className="nav-link-container">
                        <div className="nav-link-div">
                            <p>Download</p>
                        </div>
                    </Link>
                    <Link to="/blog" className="nav-link-container">
                        <div className="nav-link-div">
                            <p>Blog</p>
                        </div>
                    </Link>
                    <Link to="/acknowledgments" className="nav-link-container">
                        <div className="nav-link-div">
                            <p>Acknowledgments</p>
                        </div>
                    </Link>
                    <Link to="/support" className="nav-link-container">
                        <div className="nav-link-div">
                            <p>Support</p>
                        </div>
                    </Link>
                </div>
            }

            <div className="all-nav-links">
                {width > 700 &&
                    <>
                        <Link to="/login" className="nav-link-container">
                            <div className="nav-link-div--auth">
                                <p>Log in</p>
                            </div>
                        </Link>
                        <Link to="/signup" className="nav-signup-container">
                            <div className="nav-link-div--auth">
                                <p>Sign up</p>
                            </div>
                        </Link>
                    </>
                }
                {width <= 1100 && 
                    <button onClick={() => setNavbarOpen(prev => !prev)} style={{backgroundColor: "transparent", borderWidth: 0, marginLeft: "3rem"}}>
                        <img
                            src={process.env.PUBLIC_URL + "/assets/hamburger.png"}
                            style={{width: "2rem"}}
                            alt="Menu"
                        />
                    </button>
                }
            </div>
            
            {width <= 1100 && navbarOpen && 
                <div onClick={() => setNavbarOpen(false)} className="gray-background">
                    <div className="navWhiteContainer">
                        <button onClick={() => setNavbarOpen(false)} style={styles.x}>
                            <img
                                src={process.env.PUBLIC_URL + "/assets/x.png"}
                                style={{width: "1.4rem"}}
                                alt="Close"
                            />
                        </button>
                        <Link to="/" className="nav-home-container" style={styles.hamburgerLink}>
                            <div style={styles.navHomeDiv}>
                                <img
                                    src={process.env.PUBLIC_URL + "/assets/lively-logo.png"}
                                    style={styles.navLivelyLogo}
                                    alt="Logo"
                                />
                                <p className="nav-title">Lively</p>
                            </div>
                        </Link>
                        <Link to="/download" onClick={() => setNavbarOpen(prev => !prev)} style={styles.hamburgerLink} className="nav-link-container">
                            <div className="hamburger-link-div">
                                <p>Download</p>
                            </div>
                        </Link>
                        <Link to="/blog" onClick={() => setNavbarOpen(prev => !prev)} style={styles.hamburgerLink} className="nav-link-container">
                            <div className="hamburger-link-div">
                                <p>Blog</p>
                            </div>
                        </Link>
                        <Link to="/acknowledgments" onClick={() => setNavbarOpen(prev => !prev)} style={styles.hamburgerLink} className="nav-link-container">
                            <div className="hamburger-link-div">
                                <p>Acknowledgments</p>
                            </div>
                        </Link>
                        <Link to="/support" onClick={() => setNavbarOpen(prev => !prev)} style={styles.hamburgerLink} className="nav-link-container">
                            <div className="hamburger-link-div">
                                <p>Support</p>
                            </div>
                        </Link>

                        <div style={styles.divider} />

                        <Link to="/signup" onClick={() => setNavbarOpen(prev => !prev)} style={styles.hamburgerLink} className="nav-link-container">
                            <div className="hamburger-link-div">
                                <p>Sign up</p>
                            </div>
                        </Link>
                        <Link to="/login" onClick={() => setNavbarOpen(prev => !prev)} style={styles.hamburgerLink} className="nav-link-container">
                            <div className="hamburger-link-div">
                                <p>Log in</p>
                            </div>
                        </Link>
                    </div>
                </div>
            }

        </div>
    </nav>
    )
}

let styles = {
    navHomeDiv: {
        display: "flex",
        alignItems: "center",
    },
    navLivelyLogo: {
        height: "3rem",
        marginRight: "1rem",
    },
    hamburgerLink: {
        margin: 0,
        marginTop: "2rem",
    },
    x: {
        backgroundColor: "#00000000",
        borderWidth: 0,
        alignSelf: "flex-end",
        padding: "0.4rem",
    },
    divider: {
        height: "0.16rem",
        marginTop: "4rem",
        width: "88%",
        backgroundColor: colors.lightGray,
    },
    darken: {
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        backgroundColor: "#00000050",
    }
}