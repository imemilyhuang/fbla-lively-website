import React from "react"
import colors from "../colors.js"
import useWindowDimensions from "../useWindowDimensions"

const Acknowledgements = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  React.useEffect(() => {
    document.title = "Acknowledgements Our Purpose and Values | Lively"
    const favicon = document.getElementById('favicon')
    favicon.href = "/favicon-lively.ico"
  }, [])

  const { _, width } = useWindowDimensions()

  const contentWidthControl = () => {
    if (width > 1100) {
      return {
        maxWidth: "76rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
      }
    } else {
      return {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
      }
    }
  }

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

  const h2Control = () => {
    if (width > 900) {
      return {
        fontSize: "2.6rem",
        fontWeight: 500,
      }
    } else {
      return {
        fontSize: "2rem",
        fontWeight: 500,
      }
    }
  }

  return (
    <div style={styles.container}>
        <div style={{...styles.whiteContainer, ...paddingControl()}}>
        <div style={contentWidthControl()}>
          <p style={{...styles.h1Space, ...h2Control()}}>
            Acknowledgements
          </p>
          <p className="p" style={{marginBottom: "1rem", maxWidth: "76rem"}}>
            This project was made possible by these open-source projects and amazing platforms!
          </p>
          <a href="https://create-react-app.dev/" className="p" style={styles.linkStyle}>Create React App</a>
          <a href="https://reactjs.org/" className="p" style={styles.linkStyle}>React</a>
          <a href="https://reactrouter.com/en/main" className="p" style={styles.linkStyle}>React Router</a>
          <a href="https://firebase.google.com/" className="p" style={styles.linkStyle}>Firebase</a>
          <a href="https://www.npmjs.com/package/firebase-tools" className="p" style={styles.linkStyle}>Firebase CLI</a>
          <a href="https://vercel.com/" className="p" style={styles.linkStyle}>Vercel</a>
          <a href="https://github.com/willmcpo/body-scroll-lock" className="p" style={styles.linkStyle}>Body scroll lock</a>
        </div>
      </div>

    </div>
  )
}

export default Acknowledgements

let styles = {
  container: {
    display: "flex",
    flexDirection: "column",
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  whiteContainer: {
    display: "flex",
    flexDirection: "column",
  },
  blueContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: colors.superLightBlue,
    alignItems: "center",
  },
  h1Space: {
    marginBottom: "1rem",
  },
  textWrap: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "flex-start",
  },
  linkStyle: {
    marginBottom: "1rem",
    maxWidth: "76rem",
    color: colors.darkBlue
  }
}