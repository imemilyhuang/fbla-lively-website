import React, { useState } from "react"
import { Link } from "react-router-dom"
import { auth } from "../firebase"
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth"
import useWindowDimensions from "../useWindowDimensions"

import colors from "../colors"
const LogIn = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  React.useEffect(() => {
    const favicon = document.getElementById('favicon')
    favicon.href = "/favicon-lively.ico"
  }, [])
  document.title = "Reset Password | Lively"

  const { height, width } = useWindowDimensions()

  const paddingControl = () => {
    if (width > 1100) {
      return {
        padding: "6rem",
      }
    } else if (width > 700) {
      return {
        padding: "4rem",
      }
    } else {
      return {
        padding: "2rem",
      }
    }
  }

  const inputWidthControl = () => {
    if (width > 550) { 
      return {
        width: "28rem"
      }
    } else { 
      return {
        width: "100%",
      }
    } 
  }

  const input = () => {
    if (width > 550) { 
      return {
        width: "28rem",
        fontSize: "1.2rem",
      }
    } else if (width > 400) { 
      return {
        width: "100%",
        fontSize: "1.2rem",
      }
    } else { 
      return {
        width: "100%",
        fontSize: "1rem",
      }
    }
  }
  
  const h3Control = () => {
    if (width > 900) {
      return {
        fontSize: "2rem",
        fontWeight: 500,
        textAlign: "center"
      }
    } else {
      return {
        fontSize: "1.4rem",
        fontWeight: 500,
        textAlign: "center"
      }
    }
  }

  const [formData, setFormData] = useState({
    password1: "",
    password2: ""
  })

  const [showPwd1, setShowPwd1] = useState(false)
  const [showPwd2, setShowPwd2] = useState(false)
  const [successMessage, setSuccessMesssage] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSuccessMesssage(true)
  }

  const handleChange = (e) => {
    const {name, value} = e.target

    setFormData(prev => ({
      ...prev, [name]: value
    }))
  }

  return (
    <div className="container" style={{...styles.container, ...paddingControl(), maxWidth: "100%"}}>
      <Link to="/lively" className="nav-home-container">
        <div style={styles.returnHomeDiv}>
          <img
            src={process.env.PUBLIC_URL + "/assets/lively-logo.png"}
            style={styles.livelyLogo}
            alt="Logo"
          />
          <p className="nav-title">Lively</p>
        </div>
      </Link>
      <p style={{...h3Control(), maxWidth: "28rem"}}>Reset your password</p>

      <form onSubmit={handleSubmit} style={styles.form}>
        <p className="footer-section-title" style={{...styles.fieldTitle, ...inputWidthControl()}}>NEW PASSWORD</p>
        <div style={{position: "relative"}}>
          <input
            type={showPwd1 ? "text" : "password"}
            className="input"
            style={{...inputWidthControl(), ...input(), position: "relative"}}
            value={formData.password1}
            onChange={handleChange}
            placeholder="Enter a new password"
            name="password1"
          />
          <button type="button" onClick={() => setShowPwd1(prev => !prev)} style={styles.passwordShow}>
          {showPwd1 ? 
            <img alt="Show password" src={process.env.PUBLIC_URL + "/assets/show-password.png"} style={styles.eyeballIcon} /> : 
            <img alt="Hide password" src={process.env.PUBLIC_URL + "/assets/hide-password.png"} style={styles.eyeballIcon} />
          }
        </button>
        </div>
        

        <p className="footer-section-title" style={{...styles.fieldTitle, ...inputWidthControl()}}>CONFIRM PASSWORD</p>
        
        <div style={{position: "relative"}}>
          <input
            type={showPwd2 ? "text" : "password"}
            className="input"
            style={{...inputWidthControl(), ...input(), position: "relative"}}
            value={formData.password2}
            onChange={handleChange}
            placeholder="Retype your new password"
            name="password2"
          />
          <button type="button" onClick={() => setShowPwd2(prev => !prev)} style={styles.passwordShow}>
          {showPwd2 ? 
            <img alt="Show password" src={process.env.PUBLIC_URL + "/assets/show-password.png"} style={styles.eyeballIcon} /> : 
            <img alt="Hide password" src={process.env.PUBLIC_URL + "/assets/hide-password.png"} style={styles.eyeballIcon} />
          }
          </button>
        </div>

        <button style={{...styles.continue, ...inputWidthControl()}} type="submit">
          Reset password
        </button>

        {successMessage && 
          <div style={styles.successMessageContainer}>
            <p className="p2">
              Password change successful! Try <span>
                <Link to="/lively/login" className="blue-black-container" style={{fontWeight: "500"}}>
                  logging in
                </Link>
              </span> with your new password.
            </p>
        </div>
        }
      </form>
    </div>
  )
}

export default LogIn

let styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  successMessageContainer: {
    maxWidth: "28rem",
    marginTop: "4rem",
    backgroundColor: colors.superLightBlue,
    borderRadius: "0.32rem",
    padding: "1.12rem",
  },
  eyeballIcon: {
    height: "2rem",
    width: "2rem",
  },
  passwordShow: {
    position: "absolute",
    right: "0.65rem",
    cursor: "pointer",
    border: "none",
    top: "0.65rem",
  },
  returnHomeDiv: {
    display: "flex",
    justifyContent: "center",
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
    alignItems: "center",
    width: "100%",
  },
  fieldTitle: {
    marginTop: "2rem",
    marginBottom: "0.2rem",
  },
  continue: {
    marginTop: "2rem",
    padding: "0.8rem",
    fontSize: "1.2rem",
    fontFamily: "Jost",
    fontWeight: "500",
    backgroundColor: colors.darkBlue,
    color: colors.white,
    borderRadius: "0.32rem",
    borderWidth: 0,
    cursor: "pointer",
  }
}