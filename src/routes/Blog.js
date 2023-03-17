import React from "react"
import colors from "../colors"
import { Link } from "react-router-dom"
import useWidth from "../useWidth"

const Blog = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const width = useWidth()

  React.useEffect(() => {
    const favicon = document.getElementById('favicon')
    favicon.href = "/favicon-lively.ico"
    document.title = "Blog | Lively"
  }, [])

  const reverseWidthControl = () => {
    if (width > 700) {
      return {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "6rem",
        borderRadius: "2rem",
        maxHeight: "32rem",
        backgroundColor: colors.grayBackground,
        overflow: "hidden",
        justifyContent: "space-between"
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
        justifyContent: "space-between"
      }
    }
  }

  const paddingControl = () => {
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

  const contentSpacingControl = () => {
    if (width > 900) {
      return {
        marginLeft: "4rem",
        marginBottom: 0,
      }
    } else if (width > 700) {
      return {
        marginLeft: "2rem",
        marginBottom: 0,
      }
    } else {
      return {
        marginLeft: 0,
        marginBottom: "2rem",
      }
    }
  }

  const descriptorControl = () => {
    if (width > 900) {
      return {
        maxWidth: "70%",
      }
    } else if (width > 700) {
      return {
        maxWidth: "50%",
      }
    } else {
      return {
        maxWidth: "100%",
      }
    }
  }

  const postCaption = () => {
    if (width > 700) {
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
    if (width > 900) {
      return {
        maxWidth: "30%",
        height: "100%",
      }
    } else if (width > 700) {
      return {
        maxWidth: "50%",
        height: "100%",
      }
    }else if (width > 500) {
      return {
        maxWidth: "50%",
        height: "100%",
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
        marginBottom: "2rem",
      }
    }
  }

  return (
    <div style={styles.container}>
      <div style={{...styles.blueContainer, ...paddingControl(), textAlign: "center"}}>
        <p className="h2">Welcome to the blog</p>
        <p style={{...styles.spaceAbove}} className="h5">
          Keeping you posted from the crow's nest and sharing all the gems we find.
        </p>
      </div>

      
      <div style={{...styles.whiteContainer, ...paddingControl()}}>
        <div style={styles.container2}>
        <Link to="/blog/celebrate-app-release" className="nav-home-container" style={marginBottomControl()}>
          <div style={{...reverseWidthControl(), ...paddingControl()}}>
            <div style={{...postCaption(), ...descriptorControl()}}>
              <p className="h4" style={styles.subtitle}>JANUARY 05, 2023</p>
              <p className="black-blue-container h3" style={{...styles.spaceAbove}}>
                Lively is now available in the App Store!
              </p>
            </div>
            <img style={{...contentSpacingControl(), ...imageControl()}} src={process.env.PUBLIC_URL + "/assets/blog/celebrate-app-release.png"} alt={"Celebration"} />
          </div>
        </Link>

          <Link to="/blog/ios-pre-release-announcement" className="nav-home-container" style={marginBottomControl()}>
            <div style={{...reverseWidthControl(), ...paddingControl()}}>
              <div style={{...postCaption(), ...descriptorControl()}}>
                <p className="h4" style={styles.subtitle}>DECEMBER 18, 2022</p>
                <p className="black-blue-container h3" style={{...styles.spaceAbove}}>
                  We're releasing Lively on iOS soon!
                </p>
              </div>
              <img style={{...contentSpacingControl(), ...imageControl()}} src={process.env.PUBLIC_URL + "/assets/blog/ios-pre-release-announcement.png"} alt={"Code with gears"} />
            </div>
          </Link>

          <Link to="/blog/pre-release-reflecting" className="nav-home-container" style={marginBottomControl()}>
            <div style={{...reverseWidthControl(), ...paddingControl()}}>
              <div style={{...postCaption(), ...descriptorControl()}}>
                <p className="h4" style={styles.subtitle}>DECEMBER 01, 2022</p>
                <p className="black-blue-container h3" style={{...styles.spaceAbove}}>
                  A pre-release reflection
                </p>
              </div>

              <img style={{...contentSpacingControl(), ...imageControl()}} src={process.env.PUBLIC_URL + "/assets/blog/pre-release-reflecting.png"} alt={"Thinking face"} />
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
    marginTop: "0.8rem"
  },
  postCaption: {
    alignSelf: "center",
  },
}