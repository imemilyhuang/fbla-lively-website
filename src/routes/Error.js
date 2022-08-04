import React from "react"
import { Link, useNavigate } from "react-router-dom"
import colors from "../colors"

const Error = () => {
  const navigate = useNavigate()
  const [backStyle, setBackStyle] = React.useState(styles.backp)

  return (
    <div className="container" style={styles.container}>
      <div style={styles.titleContainer}>
        <p style={styles.title} className="h2">
          Uh oh! You look lost.
        </p>
        <p className="p" style={styles.description}> 
          We couldn't find the page you were looking for. Try 
          navigating somewhere else instead:
        </p>

        <div style={styles.altContainer}>
          <button
            onClick={() => navigate(-1)}
            onMouseOver={() => setBackStyle(styles.backHover)}
            onMouseLeave={() => setBackStyle(styles.backp)}
            style={styles.backButton}
          >
            <p style={backStyle}>Back</p>
          </button>
          <Link to="/lively" className="error-alt-container">
              <div className="error-alt-div">
                  <p>Home</p>
              </div>
          </Link>
          <Link to="/lively/support" className="error-alt-container">
              <div className="error-alt-div">
                  <p>Support</p>
              </div>
          </Link>
        </div>
      </div>

      <img
          src="../assets/404-forklift-cargo.png"
          style={styles.image}
          alt="404"
      />
    </div>
  )
}

export default Error

let styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  title: {
    marginBottom: "2rem",
  },
  description: {
    width: "30rem",
    marginBottom: "2rem",
  },
  altContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "4rem",
  },
  backButton: {
    border: "none",
    background: "none",
    cursor: "pointer",
    marginRight: "5rem",
    padding: 0,
  },
  backHover: {
    fontWeight: 500,
    fontFamily: "Jost",
    color: colors.darkBlue,
    fontSize: "1.3rem",
  },
  backp: {
    fontWeight: 500,
    fontFamily: "Jost",
    color: colors.black,
    fontSize: "1.3rem",
  },
  image: {
    objectFit: "contain",
    width: "100%",
    height: "100%",
    maxWidth: "35rem",
    maxHeight: "20rem",
    margin: 0,
  }
}