import React from "react"
import colors from "../colors.js"
import useWindowDimensions from "../useWindowDimensions"

const Acknowledgments = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  React.useEffect(() => {
    document.title = "Acknowledgments | Lively"
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
        alignItems: "center"
      }
    } else {
      return {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
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
            Acknowledgments
          </p>
          <p className="p" style={{marginBottom: "2rem", textAlign: "center", maxWidth: "76rem"}}>
            This project was made possible by these amazing open-source projects and platforms!
          </p>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/facebook/create-react-app/blob/main/LICENSE" className="p" style={styles.linkStyle}>Create React App</a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/facebook/react/blob/main/LICENSE" className="p" style={styles.linkStyle}>React</a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/remix-run/react-router/blob/main/LICENSE.md" className="p" style={styles.linkStyle}>React Router</a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/willmcpo/body-scroll-lock/blob/master/LICENSE" className="p" style={styles.linkStyle}>Body Scroll Lock</a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/firebase/firebase-tools/blob/master/LICENSE" className="p" style={styles.linkStyle}>Firebase CLI</a>
          <a target="_blank" rel="noopener noreferrer" href="https://firebase.google.com/" className="p" style={styles.linkStyle}>Firebase</a>
          <a target="_blank" rel="noopener noreferrer" href="https://vercel.com/" className="p" style={{...styles.linkStyle, marginBottom: "3rem"}}>Vercel</a>
        </div>
      </div>

    </div>
  )
}

export default Acknowledgments

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
    alignItems: "center",
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
