import React, { useState } from "react"
import { Link } from "react-router-dom"

import colors from "../colors"
const LogIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const [showPwd, setShowPwd] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  const handleChange = (e) => {
    const {name, value} = e.target

    setFormData(prev => ({
      ...prev, [name]: value
    }))
  }

  return (
    <div className="container" style={styles.container}>
      <Link to="/lively" className="nav-home-container">
        <div style={styles.returnHomeDiv}>
            <img
                src="../assets/lively-logo.png"
                style={styles.livelyLogo}
                alt="Logo"
            />
            <p className="nav-title">Lively</p>
        </div>
      </Link>
      <p className="h3">Login</p>

      <form onSubmit={handleSubmit} style={styles.form}>
      
        <p className="footer-section-title" style={styles.fieldTitle}>EMAIL</p>
        <input
          type="text"
          className="input"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          name="email"
        />

        <p className="footer-section-title" style={styles.fieldTitle}>PASSWORD</p>
        
        <div style={{position: "relative"}}>
          <input
            type={showPwd ? "text" : "password"}
            className="input"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a password"
            name="password"
            style={{position: "relative"}}
          />
          <button type="button" onClick={() => setShowPwd(prev => !prev)} style={styles.passwordShow}>
            {showPwd ? "HIDE (the ugly password)" : "SHOW - Emily please style this"}
          </button>
        </div>


        <button style={styles.continue} type="submit" >
          Log in
        </button>
      </form>
    </div>
  )
}

export default LogIn

let styles = {
  container: {
    alignItems: "center",
  },
  returnHomeDiv: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
  },
  livelyLogo: {
    height: "3rem",
    marginRight: "1rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  fieldTitle: {
    marginTop: "2rem",
    marginBottom: "0.2rem",
  },
  passwordShow: {
    position: "absolute",
    top: "1rem",
    right: "0.5rem",
    cursor: "pointer"
  },
  continue: {
    marginTop: "2rem",
    padding: "0.8rem",
    fontSize: "1.2rem",
    fontFamily: "Jost",
    backgroundColor: colors.darkBlue,
    color: colors.white,
    borderRadius: "0.32rem",
    borderWidth: 0,
    cursor: "pointer"
  }
}