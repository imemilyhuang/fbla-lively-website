import React from "react"
import colors from "../colors"
import { Link } from "react-router-dom"
import useWindowDimensions from "../useWindowDimensions"

const Download = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  React.useEffect(() => {
    const favicon = document.getElementById('favicon')
    favicon.href = "/favicon-lively.ico"
    document.title = "Download to Start Organizing Your Work and Life | Lively"
  }, [])

  const { height, width } = useWindowDimensions()

  const contentWidthControl = () => {
    if (width > 1300) {
      return {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        padding: "6rem",
        borderRadius: "2rem",
        maxHeight: "32rem",
        backgroundColor: colors.grayBackground,
        overflow: "hidden",
      }
    } else if (width > 500) {
      return {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "6rem",
        borderRadius: "2rem",
        maxHeight: "40rem",
        backgroundColor: colors.grayBackground,
        overflow: "hidden",
      }
    } else{
      return {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "6rem",
        borderRadius: "2rem",
        maxHeight: "28rem",
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
        marginBottom: "3rem",
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
        alignItems: "center"
      }
    }
  }

  const imageControl = () => {
    if (width > 1300) {
      return {
        maxWidth: "28rem",
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
        <p style={h1Control()}>Download the Lively app</p>
        <p style={{...styles.spaceAbove, ...h5Control(), maxWidth: "52rem"}}>
          You're so close to achieving that school, work, or life balance you've been 
          searching for. Ready to set sail? Your ship awaits!
        </p>
      </div>
      
      <div style={{...styles.whiteContainer, ...paddingControl()}}>
        <div style={styles.container2}>
          <div style={{...contentWidthControl(), ...paddingControl(), ...marginBottomControl()}}>
            <div style={{...postCaption(), ...descriptorControl()}}>
              <p style={{...h2Control(), textAlign: "center"}}>Get it for iPhone</p>
              <div style={{display: "flex"}}>
                <a
                  href="https://www.apple.com/app-store/"
                  target="_blank" rel="noopener noreferrer"
                  className="catchline-get-premium-container"
                  style={{marginTop: "3rem"}}
                >
                  <div style={{...styles.catchlineButtonText, width: "8rem"}}>
                    <p>Download</p>
                  </div>
                </a>
              </div>
            </div>
            {width > 1300 && <div>
              <img
                style={{...imageControl(), ...contentSpacingControl()}}
                src={process.env.PUBLIC_URL + "/assets/download-mockups/ios.png"}
                alt={"iOS mockup"}
              />
            </div>}
            {width <= 1300 && <div style={{display: "flex", justifyContent: "center"}}>
              <img
                style={{...imageControl(), ...contentSpacingControl()}}
                src={process.env.PUBLIC_URL + "/assets/download-mockups/ios.png"}
                alt={"iOS mockup"}
              />
            </div>}
          </div>

          {/*
          <div style={{...reverseWidthControl(), ...paddingControl(), ...marginBottomControl()}}>
            <div style={{...postCaption(), ...descriptorControl()}}>
              <p className="h4" style={styles.subtitle}>NOVEMBER 30, 2022</p>
              <p className="black-blue-container" style={{...styles.spaceAbove, ...h2Control()}}>
                Coming soon: we're releasing Lively on iPhone!
              </p>
            </div>
            <img style={{...imageControl(), ...contentSpacingControl()}} src={process.env.PUBLIC_URL + "/assets/blog/ios-pre-release-announcement.png"} alt={"Code with gears"} />
          </div>
          */}

          <p style={h2Control()}>Be on the lookout...</p>
          <p className="p" style={{...styles.spaceAbove, marginBottom: "3rem"}}>
            If you aren't an iPhone user or prefer to keep things on a laptop or tablet, 
            don't worry! Even though Lively was originally made for iOS, we're working 
            hard to make Lively available on all your devices. {/* Psssst, we're coding 
            Lively for the web and Google Play right now. */} Stay tuned until then.
          </p>
        </div>
      </div>

    </div>
  )
}

export default Download

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
    alignItems: "center",
  },
  subtitle: {
    color: colors.darkGray,
  },
  spaceAbove: {
    marginTop: "1rem",
  },
  catchlineButtonText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.4rem",
  },
}