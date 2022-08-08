import React, { useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import colors from "../colors"

const Username = () => {
  const [formData, setFormData] = useState({
    username: "",
  })

  const navigate = useNavigate()

  console.log(useParams())

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Submit!", formData)
  }

  const handleChange = (event) => {
    const {name, value} = event.target
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
      <p className="h3">Finish creating an account</p>

      <form onSubmit={handleSubmit} style={styles.form}>

        <p className="footer-section-title" style={styles.fieldTitle}>Choose a username</p>
        <input
          type="text"
          className="input"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter a username"
          name="username"
        />

        <button style={styles.continue} type="submit" >
          Create an account
        </button>
      </form>
    </div>
  )
}

export default Username

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