import { getAuth, sendPasswordResetEmail } from "firebase/auth"
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import colors from "../colors"
import useWindowDimensions from "../useWindowDimensions"

const ForgotPassword = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  React.useEffect(() => {
    const favicon = document.getElementById('favicon')
    favicon.href = "/favicon-lively.ico"
  }, [])
  document.title = "Reset Password Instructions | Lively"

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
    email: "",
  })

  const [errorMessages, setErrorMessages] = useState("")

  const [resetMessage, setResetMesssage] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.email === "") {
      setErrorMessages("Enter a valid email.")
    } else {
      const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!formData.email.match(validRegex)) {
        setErrorMessages("Enter a valid email.")
      } else {
        const auth = getAuth()
        
        sendPasswordResetEmail(auth, formData.email)
        .then(() => {
            setResetMesssage(true)
          })
        .catch(err => {
          // console.log(err)
          if (err.code === "auth/invalid-email") {
            setErrorMessages("Enter a valid email.")
          } else if (err.code === "auth/user-not-found") {
            setErrorMessages("There is no account associated with the email you entered.")
          }
        })
      }
    }
  }

  const handleChange = (event) => {
    const {name, value} = event.target
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
      <p style={{...h3Control(), maxWidth: "28rem"}}>Let's get you back on track</p>

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

        {errorMessages.length !== 0 &&
          <div style={styles.errorMessageContainer}>
            <p style={styles.errorMessageText}>{errorMessages}</p>
          </div>
        }

        <button style={{...styles.continue, ...inputWidthControl()}} type="submit" disabled={resetMessage}>
          Send instructions
        </button>
      </form>

      {resetMessage && 
        <p className={width > 400 ? "p2": "p3"} style={styles.resetMessageContainer}>
          We sent an email to <span style={{fontWeight: "500"}}>{formData.email}</span> with 
          password reset instructions. Make sure to check both your inbox and spam folder!
        </p>
      }

      <div style={styles.backToLogIn}>
        <p style={{textAlign: "center"}}>Finished resetting?</p>
        <Link to="/lively/login" className="blue-black-container">
          <p style={styles.bolded}>Log in</p>
        </Link>
      </div>
    </div>
  )
}

export default ForgotPassword

let styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  resetMessageContainer: {
    maxWidth: "28rem",
    marginTop: "4rem",
    backgroundColor: colors.superLightBlue,
    borderRadius: "0.32rem",
    padding: "1.12rem",
  },
  bolded: {
    fontWeight: "500",
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
  continue: {
    marginTop: "2rem",
    padding: "0.8rem",
    fontSize: "1.2rem",
    fontFamily: "Jost",
    backgroundColor: colors.darkBlue,
    color: colors.white,
    borderRadius: "0.32rem",
    borderWidth: 0,
    cursor: "pointer",
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
  backToLogIn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "1.2rem",
    gap: "0.4rem",
    marginTop: "4rem",
  },
}