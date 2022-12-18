import React from "react"
import colors from "../colors.js"
import { Link } from "react-router-dom"
import HomePremiumFeature from "../components/HomePremiumFeature"
import useWindowDimensions from "../useWindowDimensions"

const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  React.useEffect(() => {
    const favicon = document.getElementById('favicon')
    favicon.href = "/favicon-lively.ico"
  }, [])
  document.title = "Lively | A Daily Planner and Journal to Organize Your Life"

  const { height, width } = useWindowDimensions()

  const widthControl = () => {
    if (width > 1100) {
      return {
        maxWidth: "76rem",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }
    } else {
      return {
        display: "flex",
        flexDirection: "column",
      }
    }
  }

  const reverseWidthControl = () => {
    if (width > 1100) {
      return {
        maxWidth: "76rem",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }
    } else {
      return {
        display: "flex",
        flexDirection: "column-reverse",
      }
    }
  }

  const premiumWidthControl = () => {
    if (width > 1100) {
      return {
        maxWidth: "76rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }
    } else {
      return {
        display: "flex",
        flexDirection: "column",
      }
    }
  }

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

  const flexRowToColumn = () => {
    if (width > 500) {
      return {
        flexDirection: "row",
      }
    } else {
      return {
        flexDirection: "column",
      }
    }
  }

  const headingContainerControl = () => {
    if (width > 900) {
      return {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: "4rem",
        paddingBottom: "8rem",
        backgroundImage: "url(/assets/full-lighthouse-ship.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "bottom",
        backgroundColor: colors.superLightBlue,
      }
    } else if (width > 700) {
      return {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: "3rem",
        paddingBottom: "2rem",
        backgroundColor: colors.superLightBlue,
      }
    } else {
      return {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: "2rem",
        backgroundColor: colors.superLightBlue,
      }
    }
  }

  const headingContentControl = () => {
    if (width > 900) {
      return {
        textAlign: "center",
        maxWidth: "50rem",
      }
    } else {
      return {
        textAlign: "left",
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

  const topButtonControl = () => {
    if (width > 900) {
      return {
        display: "flex",
        flexDirection: "row",
        padding: "3rem",
        paddingLeft: "3rem",
      }
    } else if (width > 700) {
      return {
        display: "flex",
        flexDirection: "row",
        alignSelf: "flex-start",
        padding: "3rem",
        paddingLeft: 0,
      }
    } else {
      return {
        display: "flex",
        flexDirection: "column",
        alignSelf: "flex-start",
        padding: "3rem",
        paddingLeft: 0,
      }
    }
  }

  const buttonSpacingControl = () => {
    if (width > 700) {
      return {
        marginLeft: "3rem",
        marginTop: 0,
      }
    } else {
      return {
        marginLeft: 0,
        marginTop: "2rem",
      }
    }
  }

  const sharingFeatureControl = () => {
    if (width > 1200) {
      return {
        maxWidth: "68rem",
      }
    } else {
      return {
        maxWidth: "68rem"
      }
    }
  }

  const descriptorControl = () => {
    if (width > 1200) {
      return {
        marginRight: "8rem",
        maxWidth: "26rem"
      }
    } else if (width <= 1200 && width > 1100) {
      return { 
        marginRight: "4rem"
      }
    } else {
      return {
        marginRight: "0rem"
      }
    }
  }

  const reverseDescriptorControl = () => {
    if (width > 1200) {
      return {
        marginLeft: "8rem",
        maxWidth: "26rem"
      }
    } else if (width <= 1200 && width > 1100) {
      return { 
        marginLeft: "4rem"
      }
    } else {
      return {
        marginLeft: "0rem"
      }
    }
  }

  const imageControl = () => {
    if (width > 1100) {
      return {
        maxWidth: "50%"
      }
    } else if (width <= 1100 && width > 900) {
      return { 
        maxWidth: "75%",
        marginTop: "4rem"
      }
    } else {
      return {
        maxWidth: "100%",
        marginTop: "4rem"
      }
    }
  }

  return (
    <div style={styles.container}>
      <div style={headingContainerControl()}>
        <p style={{...headingContentControl(), ...h1Control(), marginBottom: "2rem"}}>
          Create an organized, smooth-sailing life with no limits.
        </p>
        <p style={headingContentControl()} className="p">
          Achieve balance in your work and life with a single app. 
          Lively helps you spend less time planning and 
          worrying and more time enjoying the things 
          that matter.
        </p>

        <div style={topButtonControl()}>
          {/* <Link to="/lively/premium" className="catchline-get-premium-container" style={{width: "12rem"}}>
            <div style={{...styles.catchlineButtonText}}>
                <p>Get Premium</p>
            </div>
          </Link> */}
          <a
            href="https://www.apple.com/app-store/"
            target="_blank" rel="noopener noreferrer"
            className="catchline-get-premium-container"
            // Once Premium is up and running, change className back to catchline-download-container
            // style={buttonSpacingControl()}
            // This is the style we use once we get Premium up and running
          >
            <div style={{...styles.catchlineButtonText, width: "13rem"}}>
                <p>Download for iOS</p>
            </div>
          </a>
        </div>
      </div>

      <div style={{...styles.whiteContainerRow, ...paddingControl()}}>
        <div style={widthControl()}>
          <div style={{...descriptorControl(), flexDirection: "column", display: "flex"}}>
            <p style={{...styles.h2Space, ...h2Control()}}>
            Streamline your events with a dynamic calendar
            </p>
            <p className="p">
              Lively makes managing your time effortless. Schedule any 
              personal or group event in seconds, and add all the details and 
              reminders you need to never miss a thing.
            </p>
          </div>
          <img
            style={imageControl()}
            src={process.env.PUBLIC_URL + "/assets/home-features/calendar-feature.png"}
            alt={"Calendar feature"}
          />
        </div>
      </div>

      <div style={{...styles.grayContainerRow, ...paddingControl()}}>
        <div style={reverseWidthControl()}>
          <img
            style={imageControl()}
            src={process.env.PUBLIC_URL + "/assets/home-features/journal-feature.png"}
            alt={"Journal feature"}
          />
          <div style={{...reverseDescriptorControl(), flexDirection: "column", display: "flex"}}>
            <p style={{...styles.h2Space, ...h2Control()}}>
              Reflect on your mood and meaningful parts of your day
            </p>
            <p className="p">
              A private, safe place to keep your thoughts and 
              feelings. Take a moment to appreciate what went well 
              in your day, or let go and rant about something 
              when you need to. 
            </p>
          </div>
        </div>
      </div>

      <div style={{...styles.whiteContainerColumn, ...paddingControl()}}>
        {/* Make style above styles.blueContainer once we get Premium up and running */}
        <div style={widthControl()}>
          <div style={styles.centeringTextWrap}>
            <p style={{...styles.h2Space, ...h2Control()}}>
              Easily organize the next meetup with your friends
            </p>
            <p className="p" style={sharingFeatureControl()}>
              Figuring out when to hang out shouldn't require an endless back-and-forth. 
              When you add friends to shared events, you'll see when they're busy, but 
              the details remain private.
            </p>
            <img
              style={{width: "100%", marginTop: "4rem"}}
              src={process.env.PUBLIC_URL + "/assets/home-features/sharing-feature.png"}
              alt={"Sharing features"}
            />
          </div>
        </div>
      </div>

      <div style={{...styles.grayContainerRow, ...paddingControl()}}>
        <div style={widthControl()}>
          <div style={{...descriptorControl(), flexDirection: "column", display: "flex"}}>
            <p style={{...styles.h2Space, ...h2Control()}}>
              View your days at a glance
            </p>
            <p className="p">
              Lively keeps it simple without sacrificing the content.
              The comprehensive home tab serves as a hub that helps you 
              remember and get things done consistently.
            </p>
          </div>
          <img
            style={imageControl()}
            src={process.env.PUBLIC_URL + "/assets/home-features/home-feature.png"}
            alt={"Home screen"}
          />
        </div>
      </div>

      {/* <div style={{...styles.whiteContainerColumn, ...paddingControl()}}>
        <div style={premiumWidthControl()}>
          <div style={styles.centeringTextWrap}>
            <p style={{...styles.h2Space, ...h2Control()}}>
              Add more sparkle to your life with Lively Premium
            </p>
            <p className="p" style={{marginBottom: "4rem"}}>
              Upgrade to Premium for the same Lively experience you love, 
              but with more power to achieve your goals and make the most out of every 
              day. Check out a few of the perks you'll gain access to:
            </p>
          </div>
          <HomePremiumFeature />
        </div>

        <div style={{...flexRowToColumn(), display: "flex", justifyContent: "center", alignItems: "center", marginTop: "3rem"}}>
          <Link
            to="/lively/signup"
            className="catchline-get-premium-container"
            style={width > 500 ? {marginRight: "4rem"} : {marginRight: 0}}
          >
              <div style={{...styles.catchlineButtonText, width: "10rem"}}>
                  <p>Get Premium</p>
              </div>
          </Link>
          <Link to="/lively/premium" className="black-blue-container" style={width <= 500 ? {marginTop: "1.4rem"} : {marginTop: 0}}>
              <div>
                  <p className="h4">Learn more</p>
              </div>
          </Link>
        </div>
      </div> */}


      <div style={{...styles.downloadContainer, ...paddingControl()}}>
        <p className="p" style={{textAlign: "center", marginBottom: "1rem"}}>
          When it comes to your life, you should be the one behind the steering wheel.
        </p>
        <p style={{...h2Control(), maxWidth: "60rem", color: colors.darkBlue, textAlign: "center"}}>
          Ready to set sail?
        </p>

        <div style={{display: "flex"}}>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank" rel="noopener noreferrer"
            className="catchline-download-container"
            style={{...styles.downloadButtonBottom, marginLeft: 0}}
          >
            <div style={{...styles.catchlineButtonText, width: "13rem"}}>
                <p>Download for iOS</p>
            </div>
          </a>
        </div>
      </div>

    </div>
  )
}

export default Home

let styles = {
  container: {
    display: "flex",
    flexDirection: "column",
  },
  whiteContainerRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  whiteContainerColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  blueContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "6rem",
    backgroundColor: colors.superLightBlue,
    alignItems: "center",
  },
  grayContainerRow: {
    display: "flex",
    flexDirection: "row",
    padding: "6rem",
    backgroundColor: colors.grayBackground,
    justifyContent: "center",
  },
  catchlineDescription: {
    textAlign: "center",
    width: "50rem",
  },
  topButtonOptions: {
    display: "flex",
    flexDirection: "row",
    padding: "3rem",
  },
  catchlineButtonText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.4rem",
  },
  downloadContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: "6rem",
    paddingRight: "6rem",
    marginBottom: "3rem",
  },
  downloadButtonBottom: {
    marginTop: "3rem",
  },
  h2Space: {
    marginBottom: "1rem",
  },
  centeringTextWrap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  }
}