import React from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
    <nav className="nav-container">
        <div className="nav-width-control">
            <Link to="/lively" className="nav-home-container">
                <div style={styles.navHomeDiv}>
                    <img
                        src="../assets/lively-logo.png"
                        style={styles.navLivelyLogo}
                        alt="Logo"
                    />
                    <p className="nav-title">Lively</p>
                </div>
            </Link>
            <div className="all-nav-links">
                <Link to="/lively/premium" className="nav-link-container">
                    <div className="nav-link-div">
                        <p>Premium</p>
                    </div>
                </Link>
                <Link to="/lively/support" className="nav-link-container">
                    <div className="nav-link-div">
                        <p>Support</p>
                    </div>
                </Link>
                <Link to="/lively/blog" className="nav-link-container">
                    <div className="nav-link-div">
                        <p>Blog</p>
                    </div>
                </Link>
                <Link to="/lively/download" className="nav-link-container">
                    <div className="nav-link-div">
                        <p>Download</p>
                    </div>
                </Link>
            </div>
            <div className="all-nav-links">
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
            </div>
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
}