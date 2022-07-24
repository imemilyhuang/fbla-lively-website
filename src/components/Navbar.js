import React from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
    <nav className="nav-container">
        <div className="nav-width-control">
            <Link to="/lively" className="nav-home-container">
                <div className="nav-home-div">
                    <img
                        src="../assets/lively-logo.png"
                        className="nav-lively-logo"
                        alt="Logo"
                    />
                    <text className="nav-title">Lively</text>
                </div>
            </Link>
            <div className="all-nav-links">
                <Link to="/premium" className="nav-link-container">
                    <div className="nav-link-div">
                        <text>Premium</text>
                    </div>
                </Link>
                <Link to="/support" className="nav-link-container">
                    <div className="nav-link-div">
                        <text>Support</text>
                    </div>
                </Link>
                <Link to="/blog" className="nav-link-container">
                    <div className="nav-link-div">
                        <text>Blog</text>
                    </div>
                </Link>
                <Link to="/download" className="nav-link-container">
                    <div className="nav-link-div">
                        <text>Download</text>
                    </div>
                </Link>
            </div>
            <div className="all-nav-links">
                <Link to="/login" className="nav-link-container">
                    <div className="nav-link-div">
                        <text>Log in</text>
                    </div>
                </Link>
                <Link to="/signup" className="nav-sign-up-container">
                    <div className="nav-link-div">
                        <text>Sign up</text>
                    </div>
                </Link>
            </div>
        </div>
    </nav>
    )
}