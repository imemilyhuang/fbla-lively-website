import React from "react"
import colors from "../colors"
import useWidth from "../useWidth"

const Download = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  React.useEffect(() => {
    const favicon = document.getElementById('favicon')
    favicon.href = "/favicon-lively.ico"
    document.title = "Download to Start Organizing Your Work and Life | Lively"
  }, [])

  const width = useWidth()

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

  const downloadHeading = () => {
    if (width > 1300) {
      return {
        textAlign: "left"
      }
    } else {
      return {
        textAlign: "center"
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

  return (
    <div style={styles.container}>
      <div style={{...styles.blueContainer, ...paddingControl(), textAlign: "center"}}>
        <p className="h2">Download the Lively app</p>
        <p style={{...styles.spaceAbove, maxWidth: "52rem"}} className="h5">
          You're so close to achieving that school, work, and life balance you've been 
          searching for. Ready to set sail? Your ship awaits!
        </p>
      </div>
      
      <div style={{...styles.whiteContainer, ...paddingControl()}}>
        <div style={styles.container2}>
          <div style={{...contentWidthControl(), ...paddingControl(), ...marginBottomControl()}}>
            <div style={{...postCaption(), ...descriptorControl()}}>
              <p style={downloadHeading()} className="h2">Get it for iPhone</p>
              <div style={{display: "flex"}}>
                <a
                  href="https://www.apple.com/app-store/"
                  target="_blank" rel="noopener noreferrer"
                  className="catchline-get-premium-container"
                  style={{marginTop: "2rem"}}
                >
                  <div className="catchlineButtonText--small">
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

          <p className="h2">Be on the lookout...</p>
          <p className="p" style={{...styles.spaceAbove, marginBottom: "3rem"}}>
            If you aren't an iPhone user or prefer to keep things on a laptop or tablet, 
            don't worry! Even though Lively was originally made for iOS, we're working 
            hard to make Lively available on all your devices. Stay tuned until then.
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