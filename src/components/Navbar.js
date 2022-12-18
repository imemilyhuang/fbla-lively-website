import React, { useState } from "react"
import { Link } from "react-router-dom"
import colors from "../colors"
import useWindowDimensions from "../useWindowDimensions"

// Once Premium feature gets added, add the Premium tab back to the website
// Navbar order from left to right should be Premium, Support, Blog, Download
// For now, changing order to Download, Blog, Support

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(prev => {
            if (!prev === false) {
                document.body.style.overflowY = "scroll"
            } else {
                document.body.style.overflowY = "hidden"
            }
            return !prev
        })
    }

    const { height, width } = useWindowDimensions()

    if (width > 1100) {
        document.body.style.overflowY = "scroll"
    } else if (navbarOpen) {
        document.body.style.overflowY = "hidden"
    }
    

    return (
    <nav className="nav-container">
        <div className={width > 700 ? "nav-width-control" : "small-nav-width-control"}>
            <Link to="/lively" className="nav-home-container">
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
                    {/* <Link to="/lively/premium" className="nav-link-container">
                        <div className="nav-link-div">
                            <p>Premium</p>
                        </div>
                    </Link> */}
                    <Link to="/lively/download" className="nav-link-container">
                        <div className="nav-link-div">
                            <p>Download</p>
                        </div>
                    </Link>
                    <Link to="/lively/blog" className="nav-link-container">
                        <div className="nav-link-div">
                            <p>Blog</p>
                        </div>
                    </Link>
                    <Link to="/lively/support" className="nav-link-container">
                        <div className="nav-link-div">
                            <p>Support</p>
                        </div>
                    </Link>
                </div>
            }

            <div className="all-nav-links">
                {width > 700 &&
                    <>
                        <Link to="/lively/login" className="nav-link-container">
                            <div className="nav-link-div">
                                <p>Log in</p>
                            </div>
                        </Link>
                        <Link to="/lively/signup" className="nav-signup-container">
                            <div className="nav-link-div">
                                <p>Sign up</p>
                            </div>
                        </Link>
                    </>
                }
                {width <= 1100 && 
                    <button onClick={handleToggle} style={{backgroundColor: "transparent", borderWidth: 0, marginLeft: "3rem"}}>
                        <img
                            src={process.env.PUBLIC_URL + "/assets/hamburger.png"}
                            style={{width: "2rem"}}
                            alt="Menu"
                        />
                    </button>
                }
            </div>
            
            {width <= 1100 && navbarOpen && 
                <div onClick={handleToggle} style={{...styles.darken, height: "100%"}} />
            }

            {width <= 1100 && navbarOpen &&
                <div style={{...styles.popoutHamburger, height: height}}>
                    <button onClick={handleToggle} style={styles.x}>
                        <img
                            src={process.env.PUBLIC_URL + "/assets/x.png"}
                            style={{width: "1.4rem"}}
                            alt="Close"
                        />
                    </button>
                    <Link to="/lively" className="nav-home-container" style={styles.hamburgerLink}>
                        <div style={styles.navHomeDiv}>
                            <img
                                src={process.env.PUBLIC_URL + "/assets/lively-logo.png"}
                                style={styles.navLivelyLogo}
                                alt="Logo"
                            />
                            <p className="nav-title">Lively</p>
                        </div>
                    </Link>
                    {/* <Link to="/lively/premium" onClick={handleToggle} style={styles.hamburgerLink} className="nav-link-container">
                        <div className="hamburger-link-div">
                            <p>Premium</p>
                        </div>
                    </Link> */}
                    <Link to="/lively/download" onClick={handleToggle} style={styles.hamburgerLink} className="nav-link-container">
                        <div className="hamburger-link-div">
                            <p>Download</p>
                        </div>
                    </Link>
                    <Link to="/lively/blog" onClick={handleToggle} style={styles.hamburgerLink} className="nav-link-container">
                        <div className="hamburger-link-div">
                            <p>Blog</p>
                        </div>
                    </Link>
                    <Link to="/lively/support" onClick={handleToggle} style={styles.hamburgerLink} className="nav-link-container">
                        <div className="hamburger-link-div">
                            <p>Support</p>
                        </div>
                    </Link>

                    <div style={styles.divider} />

                    <Link to="/lively/signup" onClick={handleToggle} style={styles.hamburgerLink} className="nav-link-container">
                        <div className="hamburger-link-div">
                            <p>Sign up</p>
                        </div>
                    </Link>
                    <Link to="/lively/login" onClick={handleToggle} style={styles.hamburgerLink} className="nav-link-container">
                        <div className="hamburger-link-div">
                            <p>Log in</p>
                        </div>
                    </Link>
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
    popoutHamburger: {
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        top: 0,
        right: 0,
        height: "100%",
        width: "22rem",
        padding: "4rem",
        paddingTop: "2.4rem",
        backgroundColor: colors.white,
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