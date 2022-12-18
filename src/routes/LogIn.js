import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { auth } from "../firebase"
import { AuthErrorCodes, getAuth, signInWithEmailAndPassword } from "firebase/auth"
import useWindowDimensions from "../useWindowDimensions"

// Need to make error messages like "Fill in all fields to continue" or "This email hasn't been registered yet"

import colors from "../colors"
const LogIn = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  React.useEffect(() => {
    const favicon = document.getElementById('favicon')
    favicon.href = "/favicon-lively.ico"
  }, [])
  document.title = "Log In | Lively"

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
        fontWeight: 600,
        textAlign: "center"
      }
    }
  }

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const [errorMessages, setErrorMessages] = useState("")
  
  const [emailErrorMessages, setEmailErrorMessages] = useState("")

  const [passErrorMessages, setPassErrorMessages] = useState("")

  const navigate = useNavigate()

  const [showPwd, setShowPwd] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (formData.email === "" || formData.password === "") {
      setErrorMessages("Fill in all fields to continue.")
    } else if (formData.email.length > 0 && formData.password.length > 0) {
      const auth = getAuth()
      
      signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCred) => {
        const user = userCred.user
        navigate("/lively/dashboard", { state: user.uid })
      })
      .catch(err => {
        // console.log(err)
        if (err.code === "auth/invalid-email") {
          setEmailErrorMessages("Enter a valid email.")
        } else if (err.code === "auth/user-not-found") {
          setEmailErrorMessages("User not found. Try signing up!")
        } else if (err.code === "auth/user-disabled") {
          setEmailErrorMessages("This account is currently disabled.")
        } else if (err.code === "auth/invalid-password") {
          setPassErrorMessages("Enter a valid password.")
        } else if (err.code === "auth/wrong-password") {
          setPassErrorMessages("Wrong password.")
        } else {
          setPassErrorMessages("Oops! Something went wrong.")
        }
      })
    }
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    setErrorMessages("")
    setEmailErrorMessages("")
    setPassErrorMessages("")
    setFormData(prev => ({
      ...prev, [name]: value
    }))
  }

  return (
    <div style={{...styles.container, ...paddingControl(), maxWidth: "100%"}}>
      <Link to="/lively" className="nav-home-container">
        <div style={{...styles.returnHomeDiv, width: "14rem"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/lively-logo.png"}
              style={styles.livelyLogo}
              alt="Logo"
            />
            <p className="nav-title">Lively</p>
        </div>
      </Link>
      <p style={h3Control()}>Log in to your account</p>

      <form onSubmit={handleSubmit} style={styles.form}>

        <p className="footer-section-title" style={{...styles.fieldTitle, ...inputWidthControl()}}>EMAIL</p>
        <input
          type="text"
          className="input"
          style={{...inputWidthControl(), ...input()}}
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          name="email"
        />

        {emailErrorMessages.length !== 0 &&
          <div style={styles.errorMessageContainer}>
            <p style={styles.errorMessageText}>{emailErrorMessages}</p>
          </div>
        }

        <p className="footer-section-title" style={{...styles.fieldTitle, ...inputWidthControl()}}>PASSWORD</p>
        <div style={{position: "relative", ...inputWidthControl()}}>
          <input
            type={showPwd ? "text" : "password"}
            className="input"
            style={{...inputWidthControl(), ...input(), position: "relative"}}
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            name="password"
          />
          <button type="button" onClick={() => setShowPwd(prev => !prev)} style={styles.passwordShow}>
            {showPwd ? 
              <img src={process.env.PUBLIC_URL + "/assets/show-password.png"} style={styles.eyeballIcon} alt="Show" /> : 
              <img src={process.env.PUBLIC_URL + "/assets/hide-password.png"} style={styles.eyeballIcon} alt="Hide" />
            }
          </button>
        </div>

        {width > 400 && <div style={{...inputWidthControl(), display: "flex", justifyContent: "space-between"}}>
          {passErrorMessages.length !== 0 &&
            <div style={styles.errorMessageContainer}>
              <p style={styles.errorMessageText}>{passErrorMessages}</p>
            </div>
          }

          <Link
            to="/lively/forgotpassword"
            className="black-blue-container"
            style={{...styles.resetPass, ...inputWidthControl()}}
          >
            <div>
              <p>Forgot password?</p>
            </div>
          </Link>
        </div>}

        {width <= 400 && <div style={{...inputWidthControl()}}>
          {passErrorMessages.length !== 0 &&
            <div style={styles.errorMessageContainer}>
              <p style={styles.errorMessageText}>{passErrorMessages}</p>
            </div>
          }

          <Link
            to="/lively/forgotpassword"
            className="black-blue-container"
            style={{...styles.resetPass, ...inputWidthControl()}}
          >
            <div>
              <p>Forgot password?</p>
            </div>
          </Link>
        </div>}

        <button style={{...styles.continue, ...inputWidthControl()}} type="submit" >
          Log in
        </button>
      </form>

      {errorMessages.length !== 0 &&
        <div style={styles.errorMessageContainer}>
          <p style={styles.errorMessageText}>{errorMessages}</p>
        </div>
      }

      {/* <div style={{...styles.socialContainer, ...inputWidthControl()}}>
        {width > 300 && <div style={styles.line} />}
        <p style={styles.socialLogInText}>or log in with</p>
        {width > 300 && <div style={styles.line} />}
      </div>
    
      <div>
        <button onClick={() => handleSocialLogin("google.com")} style={styles.socialButton}>
          <img src="../assets/register-social-icons/google-option.png" style={width > 400 ? styles.socialIcon : styles.smallerSocialIcon}/>
        </button>
        <button onClick={() => handleSocialLogin("facebook.com")} style={styles.socialButton}>
          <img src="../assets/register-social-icons/facebook-option.png" style={width > 400 ? styles.socialIcon : styles.smallerSocialIcon}/>
        </button>
        <button onClick={() => handleSocialLogin("apple.com")} style={styles.socialButton}>
          <img src="../assets/register-social-icons/apple-option.png" style={width > 400 ? styles.socialIcon : styles.smallerSocialIcon}/>
        </button>
      </div> */}

      <div style={styles.noAccount}>
        <p style={{textAlign: "center"}}>Don't have an account?</p>
        <Link to="/lively/signup" className="blue-black-container">
          <p style={styles.bolded}>Sign up</p>
        </Link>
      </div>

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
  line: {
    height: "0.08rem",
    backgroundColor: colors.darkGray,
    width: "100%",
  },
  bolded: {
    fontWeight: "500",
  },
  eyeballIcon: {
    height: "2rem",
    width: "2rem",
  },
  socialButton: {
    border: "0",
    margin: "1rem",
    backgroundColor: "white",
  },
  socialIcon: {
    height: "4rem",
  },
  smallerSocialIcon: {
    height: "3rem",
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
    width: "100%"
  },
  fieldTitle: {
    marginTop: "2rem",
    marginBottom: "0.2rem",
  },
  resetPass: {
    marginTop: "1rem",
    textAlign: "right",
  },
  continue: {
    marginTop: "1.2rem",
    padding: "0.8rem",
    fontSize: "1.2rem",
    fontFamily: "Jost",
    backgroundColor: colors.darkBlue,
    color: colors.white,
    borderRadius: "0.32rem",
    borderWidth: 0,
    cursor: "pointer",
  },
  socialContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "2rem",
    justifyContent: "center",
    width: "100%",
  },
  socialLogInText: {
    color: colors.darkGray,
    textAlign: "center",
    fontFamily: "Jost",
    fontSize: 16,
    minWidth: "8rem"
  },
  noAccount: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "1.2rem",
    gap: "0.4rem",
    marginTop: "4rem",
  },
  errorMessageContainer: {
    display: "flex",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    maxWidth: "28rem",
    marginTop: "1rem",
    flexDirection: "column"
  },
  errorMessageText: {
    color: "red"
  },
}