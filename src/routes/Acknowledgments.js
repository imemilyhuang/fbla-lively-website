import React from "react"
import colors from "../colors.js"
import useWidth from "../useWidth.js"

const Acknowledgments = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  React.useEffect(() => {
    document.title = "Acknowledgments | Lively"
    const favicon = document.getElementById('favicon')
    favicon.href = "/favicon-lively.ico"
  }, [])

  const width = useWidth()

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

  const marginBottomControl = () => {
    if (width > 1100) {
      return {
        marginBottom: "2rem",
      }
    } else if (width > 700) {
      return {
        marginBottom: "1rem",
      }
    } else {
      return {
        marginBottom: "1rem",
      }
    }
  }

  return (
    <div style={styles.container}>
        <div style={{...styles.whiteContainer, ...paddingControl()}}>
        <div style={contentWidthControl()}>
          <p style={{...styles.h1Space}} className="h2">
            Acknowledgments
          </p>
          <p className="h5" style={{textAlign: "center", maxWidth: "76rem", ...marginBottomControl()}}>
            This project was made possible by these amazing, open-source projects and platforms!
          </p>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/facebook/create-react-app/" className="p" style={styles.linkStyle}>Create React App</a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/facebook/react/" className="p" style={styles.linkStyle}>React</a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/remix-run/react-router/" className="p" style={styles.linkStyle}>React Router</a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/willmcpo/body-scroll-lock/" className="p" style={styles.linkStyle}>Body Scroll Lock</a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/firebase/firebase-tools/" className="p" style={styles.linkStyle}>Firebase CLI</a>
          <a target="_blank" rel="noopener noreferrer" href="https://firebase.google.com/" className="p" style={styles.linkStyle}>Firebase</a>
          <a target="_blank" rel="noopener noreferrer" href="https://mailchimp.com/" className="p" style={styles.linkStyle}>Mailchimp</a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/revolunet/react-mailchimp-subscribe" className="p" style={styles.linkStyle}>react-mailchimp-subscribe</a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.emailjs.com/" className="p" style={styles.linkStyle}>EmailJS</a>
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
    color: colors.darkBlue,
  }
}
