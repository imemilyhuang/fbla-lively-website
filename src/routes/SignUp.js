import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import colors from "../colors"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import useWidth from "../useWidth"

const SignUp = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    const favicon = document.getElementById('favicon')
    favicon.href = "/favicon-lively.ico"
  }, [])
  document.title = "Sign Up | Lively"

  const width = useWidth()

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

  const monthPicker = () => {
    if (width > 550) { 
      return {
        width: "12rem",
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

  const littleInput = () => {
    if (width > 550) { 
      return {
        width: "6rem",
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

  const birthdayMargin = () => {
    if (width > 550) { 
      return {
        marginLeft: "2rem",
        marginRight: "2rem",
      }
    } else { 
      return {
        marginLeft: 0,
        marginRight: "1rem",
      }
    }
  }

  const agreement = () => {
    if (width > 550) { 
      return {
        width: "28rem"
      }
    } else { 
      return {
        maxWidth: "100%"
      }
    }
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    birthMonth: "January",
    birthDay: "",
    birthYear: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const [errorMessages, setErrorMessages] = useState({
    email: "",
    password: "",
    birthday: "",
    formFields: ""
  })

  const navigate = useNavigate()

  const [showPwd, setShowPwd] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
  }

  const auth = getAuth();

  useEffect(() => {
    if (isSubmitting) {
      setIsSubmitting(false)
      var newErrorMessages = {}
      for (const formField in formData) {
        if (formData[formField]==="") {
          newErrorMessages = {
            email: "",
            password: "",
            birthday: "",
            formFields: "Fill in all fields to continue."
          }
          break
        }
      }

      if (formData.password.length > 0) {
        const validPass = /(?=.*[a-z])(?=.*[0-9])/
        if (formData.password.length < 6) {
          newErrorMessages = {
            email: "",
            password: "Passwords must contain at least 6 characters.",
            birthday: "",
            formFields: ""
          }
        } else if (!formData.password.match(validPass)) {
          newErrorMessages = {
            email: "",
            password: "Passwords must contain both letters and numbers.",
            birthday: "",
            formFields: ""
          }
        }
      }

      if (formData.email.length > 0) {
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!formData.email.match(validRegex)) {
          newErrorMessages = {
            ...newErrorMessages,
            email: "Enter a valid email."
          }
        }
      }

      const dateString = formData.birthYear + formData.birthMonth + formData.birthDay
      const birthdate = new Date(dateString)

      if (isNaN(formData.birthDay) || isNaN(formData.birthYear)) {
        newErrorMessages = {
          ...newErrorMessages,
          birthday: "Enter a valid birthday."
        }
      } else if (isNaN(birthdate.getTime())) {
        birthdate.setFullYear(birthdate.getFullYear() + 13)
        const today = new Date()
        if (today < birthdate) {
          newErrorMessages = {
            ...newErrorMessages,
            birthday: "You must be at least 13 years old to use Lively."
          }
        }
      } else {
        newErrorMessages = {
          ...newErrorMessages,
          birthday: "Enter a valid birthday."
        }
      }

      if (Object.keys(newErrorMessages).length===0) {
        createUserWithEmailAndPassword(auth, formData.email, formData.password)
          .then((userCredential) => {
            const userData = {...formData, UID: userCredential.user.uid, email: userCredential.user.email}
            navigate("/username", { state: userData })
          })
          .catch((err) => {
            if (err.code === "auth/email-already-in-use") {
              setErrorMessages({
                email: "This email is already in use by another account.",
                password: "",
                birthday: "",
                formFields: ""
              })
            }
          })
        
      } else {
        setErrorMessages(newErrorMessages)
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitting])

  const handleChange = (event) => {
    const {name, value} = event.target
    setFormData(prev => ({
      ...prev, [name]: value
    }))

    if (Object.keys(errorMessages).length > 0) {
      setErrorMessages({
        email: "",
        password: "",
        birthday: "",
        formFields: ""
      })
    }
  }

  const birthMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  const selectBirthMonth = birthMonths.map(value =>
    <option value={value} key={value}>{value}</option>
  )

  return (
    <div className="container" style={{...styles.container, ...paddingControl(), maxWidth: "100%"}}>
      <Link to="/" className="nav-home-container">
        <div style={{...styles.returnHomeDiv, width: "14rem"}}>
            <img
                src={process.env.PUBLIC_URL + "/assets/lively-logo.png"}
                style={styles.livelyLogo}
                alt="Logo"
            />
            <p className="nav-title">Lively</p>
        </div>
      </Link>
      <p className="h3">Create an account</p>

      <form onSubmit={handleSubmit} style={styles.form}>

        <p className="footer-section-title" style={{...styles.fieldTitle, ...inputWidthControl()}}>NAME</p>
        <input
          type="text"
          className="input"
          style={{...inputWidthControl(), ...input()}}
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          name="name"
        />
      
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

        {errorMessages.email.length !== 0 &&
          <div style={styles.errorMessageContainer}>
            <p style={styles.errorMessageText}>{errorMessages.email}</p>
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
            placeholder="Create a password"
            name="password"
          />
          <button type="button" onClick={() => setShowPwd(prev => !prev)} style={styles.passwordShow}>
            {showPwd ? 
              <img src={process.env.PUBLIC_URL + "/assets/show-password.png"} style={styles.eyeballIcon} alt="Show" /> : 
              <img src={process.env.PUBLIC_URL + "/assets/hide-password.png"} style={styles.eyeballIcon} alt="Hide" />
            }
          </button>
        </div>

        {
          errorMessages.password.length !==0 &&
          <div style={styles.errorMessageContainer}>
            <p style={styles.errorMessageText}>{errorMessages.password}</p>
          </div>
        }

        <p className="footer-section-title" style={{...styles.fieldTitle, ...inputWidthControl()}}>BIRTHDAY</p>
        {width > 550 && <div style={{display: "flex", flexDirection: "row", width: "100%", ...inputWidthControl()}}>
          <select
            className="dropdown"
            style={monthPicker()}
            name="birthMonth"
            value={formData.birthMonth}
            onChange={handleChange}
          >
            {selectBirthMonth}
          </select>
          <input
            type="text"
            className="little-input"
            style={{...birthdayMargin(), ...littleInput()}}
            value={formData.birthDay}
            onChange={handleChange}
            placeholder="01"
            name="birthDay"
          />
          <input
            type="text"
            className="little-input"
            style={littleInput()}
            value={formData.birthYear}
            onChange={handleChange}
            placeholder="2000"
            name="birthYear"
          />
        </div>}
      {width <= 550 && <div style={{...inputWidthControl()}}>
        <select
          className="dropdown"
          style={monthPicker()}
          name="birthMonth"
          value={formData.birthMonth}
          onChange={handleChange}
        >
          {selectBirthMonth}
        </select>
        <div style={{display: "flex", flexDirection: "row", width: "100%", marginTop: "1rem"}}>
          <input
            type="text"
            className="little-input"
            style={{...birthdayMargin(), ...littleInput()}}
            value={formData.birthDay}
            onChange={handleChange}
            placeholder="01"
            name="birthDay"
          />
          <input
            type="text"
            className="little-input"
            style={littleInput()}
            value={formData.birthYear}
            onChange={handleChange}
            placeholder="2000"
            name="birthYear"
          />
        </div>
      </div>}
        {errorMessages.birthday.length !== 0 &&
          <div style={styles.errorMessageContainer}>
            <p style={styles.errorMessageText}>{errorMessages.birthday}</p>
          </div>
        }
        <button
          style={{...styles.continue, ...inputWidthControl()}}
          type="submit"
        >
          Continue
        </button>
      </form>
      {errorMessages.formFields.length !== 0 &&
        <div style={styles.errorMessageContainer}>
          <p style={styles.errorMessageText}>{errorMessages.formFields}</p>
        </div>
      }

      <div style={{...agreement(), gap: "0.4rem", marginTop: "2rem"}}>
        <p>
          By clicking continue, you agree that the information you entered is 
          accurate and that you are at least 13 years old.
        </p>
      </div>

      <div style={styles.accountAlready}>
        <p>Already registered?</p>
        <Link to="/login" className="blue-black-container">
          <p style={styles.bolded}>Log in</p>
        </Link>
      </div>
    </div>
  )
}

export default SignUp

let styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  bolded: {
    fontWeight: "500",
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
    backgroundColor: "transparent",
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
    fontWeight: "500",
    backgroundColor: colors.darkBlue,
    color: colors.white,
    borderRadius: "0.32rem",
    borderWidth: 0,
    cursor: "pointer",
  },
  accountAlready: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "1.2rem",
    gap: "0.4rem",
    marginTop: "4rem"
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