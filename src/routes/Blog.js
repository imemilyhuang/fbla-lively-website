import React from "react"
import colors from "../colors"
import { Link } from "react-router-dom"
import useWindowDimensions from "../useWindowDimensions"

const Blog = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { _, width } = useWindowDimensions()

  React.useEffect(() => {
    const favicon = document.getElementById('favicon')
    favicon.href = "/favicon-lively.ico"
    document.title = "Blog | Lively"
  }, [])

  const reverseWidthControl = () => {
    if (width > 1300) {
      return {
        display: "flex",
        flexDirection: "row",
        padding: "6rem",
        borderRadius: "2rem",
        maxHeight: "32rem",
        backgroundColor: colors.grayBackground,
        overflow: "hidden",
      }
    } else {
      return {
        display: "flex",
        flexDirection: "column-reverse",
        alignItems: "flex-start",
        padding: "6rem",
        borderRadius: "2rem",
        backgroundColor: colors.grayBackground,
        overflow: "hidden",
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

  const contentSpacingControl = () => {
    if (width > 1300) {
      return {
        marginLeft: "6rem",
        marginTop: 0,
      }
    } else {
      return {
        marginLeft: 0,
        marginBottom: "2rem",
      }
    }
  }

  const descriptorControl = () => {
    if (width > 1300) {
      return {
        marginRight: "4rem",
        marginBottom: 0,
        maxWidth: "50%",
      }
    } else {
      return {
        marginRight: 0,
        marginTop: "2rem",
        maxWidth: "100%",
      }
    }
  }

  const postCaption = () => {
    if (width > 1300) {
      return {
        alignSelf: "center"
      }
    } else {
      return {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
      }
    }
  }

  const imageControl = () => {
    if (width > 1300) {
      return {
        maxWidth: "50%",
        height: "100%"
      }
    } else if (width <= 1300 && width > 900) {
      return { 
        maxWidth: "75%",
      }
    } else {
      return {
        maxWidth: "100%",
      }
    }
  }

  const marginBottomControl = () => {
    if (width > 1100) {
      return {
        marginBottom: "6rem",
      }
    } else if (width > 700) {
      return {
        marginBottom: "4rem",
      }
    } else {
      return {
        marginBottom: "3rem",
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

  const h5Control = () => {
    if (width > 900) {
      return {
        fontSize: "1.6rem",
      }
    } else {
      return {
        fontSize: "1.4rem",
      }
    }
  }

  return (
    <div style={styles.container}>
      <div style={{...styles.blueContainer, ...paddingControl(), textAlign: "center"}}>
        <p style={h1Control()}>Welcome to the blog</p>
        <p style={{...styles.spaceAbove, ...h5Control()}}>
          Keeping you posted from the crow's nest and sharing all the gems we find.
        </p>
      </div>

      
      <div style={{...styles.whiteContainer, ...paddingControl()}}>
        <div style={styles.container2}>
        <Link to="/blog/celebrate-app-release" className="nav-home-container">
          <div style={{...reverseWidthControl(), ...paddingControl(), ...marginBottomControl()}}>
            <div style={{...postCaption(), ...descriptorControl()}}>
              <p className="h4" style={styles.subtitle}>JANUARY 05, 2023</p>
              <p className="black-blue-container" style={{...styles.spaceAbove, ...h2Control()}}>
                The Lively app is available in the app store!
              </p>
            </div>
            <img style={{...imageControl(), ...contentSpacingControl()}} src={process.env.PUBLIC_URL + "/assets/blog/celebrate-app-release.png"} alt={"Celebration"} />
          </div>
        </Link>

          <Link to="/blog/ios-pre-release-announcement" className="nav-home-container">
            <div style={{...reverseWidthControl(), ...paddingControl(), ...marginBottomControl()}}>
              <div style={{...postCaption(), ...descriptorControl()}}>
                <p className="h4" style={styles.subtitle}>DECEMBER 18, 2022</p>
                <p className="black-blue-container" style={{...styles.spaceAbove, ...h2Control()}}>
                  Coming soon: we're releasing Lively on iPhone!
                </p>
              </div>
              <img style={{...imageControl(), ...contentSpacingControl()}} src={process.env.PUBLIC_URL + "/assets/blog/ios-pre-release-announcement.png"} alt={"Code with gears"} />
            </div>
          </Link>

          <Link to="/blog/pre-release-reflecting" className="nav-home-container">
            <div style={{...reverseWidthControl(), ...paddingControl(), ...marginBottomControl()}}>
              <div style={{...postCaption(), ...descriptorControl()}}>
                <p className="h4" style={styles.subtitle}>DECEMBER 01, 2022</p>
                <p className="black-blue-container" style={{...styles.spaceAbove, ...h2Control()}}>
                  A pre-release reflection
                </p>
              </div>
              <img style={{...imageControl(), ...contentSpacingControl()}} src={process.env.PUBLIC_URL + "/assets/blog/pre-release-reflecting.png"} alt={"Thinking face"} />
            </div>
          </Link>

        </div>
      </div>

    </div>
  )
}

export default Blog

let styles = {
  container: {
    display: "flex",
    flexDirection: "column",
  },
  container2: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "76rem",
  },
  blueContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: colors.superLightBlue,
    alignItems: "center",
  },
  whiteContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "6rem",
    alignItems: "center",
  },
  subtitle: {
    color: colors.darkGray,
  },
  spaceAbove: {
    marginTop: "1rem",
  },
  postCaption: {
    alignSelf: "center",
  },
}