import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import colors from "../colors"

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    birthMonth: "",
    birthDay: "",
    birthYear: "",
  })

  const navigate = useNavigate()

  const [showPwd, setShowPwd] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const dateString = formData.birthYear + formData.birthMonth + formData.birthDay
    const birthdate = new Date(dateString)
    const today = new Date()
    const difference = birthdate.getTime() - today.getTime()

    console.log(difference)

    console.log("Submit!", formData)
    navigate('/lively/username', { state: formData })
  }

  const handleChange = (event) => {
    const {name, value} = event.target
    setFormData(prev => ({
      ...prev, [name]: value
    }))
  }

  const today = new Date()
  const birthMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const birthDays = [...Array(31).keys()]

  let year = today.getFullYear() - 122
  let birthYears = []
  while (year < today.getFullYear()) {
    birthYears.push(year)
    year += 1
  }

  const selectBirthMonth = birthMonths.map(value =>
    <option value={value} key={value}>{value}</option>
  )
  const selectBirthDay = birthDays.map(value => {
    const actualValue = value + 1
    return <option value={actualValue} key={actualValue}>{actualValue}</option>
  })
  const selectBirthYear = birthYears.map(value =>
    <option value={value} key={value}>{value}</option>
  )

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
      <p className="h3">Create an account</p>

      <form onSubmit={handleSubmit} style={styles.form}>

        <p className="footer-section-title" style={styles.fieldTitle}>NAME</p>
        <input
          type="text"
          className="input"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          name="name"
        />
      
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
            style={{position: "relative"}}
            type={showPwd ? "text" : "password"}
            className="input"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a password"
            name="password"
          />
          <button type="button" onClick={() => setShowPwd(prev => !prev)} style={styles.passwordShow}>
            {showPwd ? 
              <img src="../assets/show-password.png" style={styles.eyeballIcon} /> : 
              <img src="../assets/hide-password.png" style={styles.eyeballIcon} />
            }
          </button>
        </div>

        <p className="footer-section-title" style={styles.fieldTitle}>BIRTHDAY</p>

        <div style={{display: "flex", flexDirection: "row"}}>
          <select
            onFocus={() => console.log("focus")}
            className="dropdown"
            style={styles.dropdownMargin}
            name="birthMonth"
            value={formData.birthMonth}
            onChange={handleChange}
          >
            {selectBirthMonth}
          </select>
          <select
            className="dropdown"
            style={styles.dropdownMargin}
            name="birthDay"
            value={formData.birthDay}
            onChange={handleChange}
          >
            {selectBirthDay}
          </select>
          <select
            className="dropdown"
            style={styles.dropdown}
            name="birthYear"
            value={formData.birthYear}
            onChange={handleChange}
          >
            {selectBirthYear}
          </select>
        </div>
        <button style={styles.continue} type="submit" >
          Continue
        </button>
      </form>
    </div>
  )
}

export default SignUp

let styles = {
  container: {
    alignItems: "center",
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
  dropdownMargin: {
    marginRight: "2rem",
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
  }
}