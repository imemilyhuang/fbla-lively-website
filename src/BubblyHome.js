import React from "react"
import colors from "./colors"
import { Link } from "react-router-dom"
import useWindowDimensions from "./useWindowDimensions"

const BubblyHome = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  React.useEffect(() => {
    const favicon = document.getElementById('favicon')
    favicon.href = "/favicon-bubbly-studios.ico"
    const lively = document.getElementById('lively')
    lively.addEventListener('click',()=>{
      // setting new favicon
      favicon.href = "/favicon-lively.ico";
    })
  }, [])
  document.title = "Bubbly Studios | Developing Exciting Apps for Everyday Life"

  const { height, width } = useWindowDimensions()

  const paddingControl = () => {
    if (width > 900) {
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

  const bluePaddingControl = () => {
    if (width > 700) {
      return {
        padding: "4rem",
      }
    } else {
      return {
        padding: "2rem",
      }
    }
  }

  const marginTopControl = () => {
    if (width > 1100) {
      return {
        marginTop: "6rem",
      }
    } else if (width > 700) {
      return {
        marginTop: "4rem",
      }
    } else {
      return {
        marginTop: "3rem",
      }
    }
  }

  const h1Control = () => {
    if (width > 900) {
      return {
        fontSize: "3rem",
        fontWeight: 600,
      }
    } else if (width > 700) {
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

  const imageControl = () => {
    if (width > 900) {
      return {
        maxWidth: "36rem",
        marginBottom: "2rem",
      }
    } else {
      return {
        maxWidth: "100%",
        marginBottom: "2rem",
      }
    }
  }

  return (
    <div style={{...styles.container, ...paddingControl()}} id="bubblyHomeDiv">
      <link rel="icon" href="%PUBLIC_URL%/favicon-bubbly-studios.ico" id="favicon" />
      <div style={{maxWidth: "52rem"}}>

        <div style={{...styles.topContainer, ...bluePaddingControl()}}>
          <div style={{...styles.projectSpace, display: "flex", alignItems: "center"}}>
            <img
              src="../assets/bubbly-studios-logo.png"
              style={width > 500 ? styles.bubblyLogo : styles.bubblyLogo2}
              alt="Logo"
            />
            <p style={h1Control()}>Bubbly Studios</p>
          </div>
          <img
            src="../assets/bubbly-def.png"
            style={imageControl()}
            alt="Definition of bubbly"
          />
          <p className="p">
            We're passionate about creating apps that make everyday life 
            more efficient and exciting. Our apps are made to work with you, wherever 
            you're at right now. <span style={{color: colors.darkBlue, fontWeight: 500}}>Explore 
            all our projects below:</span>
          </p>
        </div>

        <div style={marginTopControl()}>
          <p style={{...styles.projectSpace, ...h1Control()}}>
            Our projects
          </p>
          <Link to="/lively" className="nav-home-container" id="lively">
            <div style={{...styles.projectLogoDiv, ...styles.projectTitleSpace}}>
                <img
                    src="../assets/lively-logo.png"
                    style={styles.projectLogo}
                    alt="Logo"
                />
                <p style={styles.projectTitle}>Lively</p>
            </div>
          </Link>
          <p className="p" style={styles.projectTag}>
            Keeping you anchored in the present
          </p>
          <p className="p">
            A flexible organization and productivity app for journaling 
            and managing your schedule in one place.
          </p>
        </div>

      </div>
    </div>
  )
}

export default BubblyHome

let styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  topContainer: {
    borderRadius: "2rem",
    padding: "4rem",
    backgroundColor: colors.superLightBlue,
  },
  bubblyLogo: {
    height: "4rem",
    marginRight: "1.2rem",
  },
  bubblyLogo2: {
    height: "4rem",
    marginRight: "2rem",
  },
  projectSpace: {
    marginBottom: "2rem",
  },
  projectTitleSpace: {
    marginBottom: "1rem",
  },
  projectTitle: {
    fontSize: "3rem",
    fontWeight: "500",
    color: colors.darkBlue,
  },
  projectTag: {
    fontStyle: "italic",
    marginBottom: "1rem",
  },
  projectLogoDiv: {
    display: "flex",
    alignItems: "center",
  },
  projectLogo: {
      height: "4rem",
      marginRight: "2rem",
  },
}