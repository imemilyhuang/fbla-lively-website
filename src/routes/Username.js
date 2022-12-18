import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore"
import React, { useEffect, useState } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import colors from "../colors"
import { db } from "../firebase"
import useWindowDimensions from "../useWindowDimensions"

const Username = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  useEffect(() => {
    const favicon = document.getElementById('favicon')
    favicon.href = "/favicon-lively.ico"
  }, [])
  document.title = "Choose a Username | Lively"
  
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
    username: "",
  })

  const [errorMessage, setErrorMessage] = useState("")

  const location = useLocation()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (formData.username==="") {
      setErrorMessage("Please enter a valid username")
      return
    } else if (formData.username.length > 30 || formData.username.length < 3) {
      setErrorMessage("Usernames must be 3-30 characters long.")
      return
    }
    
    const allowed = [".", "_", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    
    for (let i = 0; i < formData.username.length; i++) {
      if (formData.username[i] === ".") {
        if (i === (formData.username.length - 1)) {
          setErrorMessage("Usernames cannot end in a period.")
          return
        }
        if (formData.username[i] === formData.username[i - 1]) {
          setErrorMessage("Usernames cannot contain 2 adjacent periods.")
          return
        }
      } else {
        if (allowed.indexOf(formData.username[i]) === -1) {
          setErrorMessage("Usernames can only use lowercase Roman letters (a-z), numbers, periods, or underscores.")
          return
        }
      }
    }
    
    const q = query(collection(db, "users"), where("username", "==", formData.username))

    getDocs(q)
      .then(querySnapshot => {
        if (querySnapshot.docs.length === 0) {
          // console.log("proceed", location.state.UID)
          setDoc(doc(db, "users", location.state.UID), {
            name: location.state.name,
            username: formData.username,
            UID: location.state.UID,
            email: location.state.email,
            plan: "free",
            profilePicPath: "default",
            spaces: ["Work", "Social"],
            status: {emoji: "😊", text: "Feeling good"},
            quickAddFriends: []
          })
            .then(() => navigate("/lively/dashboard", { state: location.state.UID }))
            // .catch(err => {})
            .catch(err => console.log(err))
          
        } else {
          setErrorMessage("Username already exists. Please choose another one.")
        }
      })
      .catch(err => {}) 
      // .catch(err => console.log(err)) 

  }

  const handleChange = (event) => {
    const {name, value} = event.target
    if (errorMessage !== "") {
      setErrorMessage("")
    }
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

      {location.state === null && <div style={styles.errorContainer}>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          {width > 300 && <img
            src={"/assets/lock.png"}
            style={styles.lockIcon}
            alt="Lock"
          />}
          <p style={{...styles.bolded, textAlign: "center"}}>Oops! This page is locked.</p>
        </div>
        <p className={width > 400 ? "p2" : "p3"} style={{textAlign: "center", marginTop: "1rem", maxWidth: "24rem"}}>
          If you were trying to create a username, you'll need to
          <Link to="/lively/signup" className="blue-black-container">
            <span style={styles.bolded}> sign up </span>
          </Link> 
          first.
        </p>
      </div>}

      {location.state != null && <div style={{...styles.container, maxWidth: "100%"}}>
        <p style={h3Control()}>Choose your username</p>
        <form onSubmit={handleSubmit} style={styles.form}>
          <p className="footer-section-title" style={{...styles.fieldTitle, ...inputWidthControl()}}>USERNAME</p>
          <input
            type="text"
            className="input"
            style={{...inputWidthControl(), ...input()}}
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter a username"
            name="username"
          />
          <button style={{...styles.continue, ...inputWidthControl()}} type="submit" >
            Sign up
          </button>
        </form>
        {
          errorMessage !== "" &&
          <div style={styles.errorMessageContainer}>
            <p style={styles.errorMessageText}>{errorMessage}</p>
          </div>
        }
        <div style={{gap: "0.4rem", maxWidth: "28rem", marginTop: "2rem"}}>
          <p>By creating an account, you agree to our
            <Link to="/terms" className="blue-black-container">
              <span style={styles.bolded}> Terms of Service </span>
            </Link>
            and
            <Link to="/privacy" className="blue-black-container">
              <span style={styles.bolded}> Privacy Policy</span>
            </Link>.
          </p>
        </div>
      </div>}

    </div>
  )
}

export default Username

let styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  errorContainer: {
    marginTop: "2rem",
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
  lockIcon: {
    height: "2rem",
    marginRight: "0.6rem",
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
  }
}