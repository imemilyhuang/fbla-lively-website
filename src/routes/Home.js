import React, { useState } from "react"
import colors from "../colors.js"
import EmailSubForm from "../components/EmailSubForm.js"
import useWidth from "../useWidth"
import "./Home.scss"

const Home = () => {
  React.useEffect(() => {
    // window.scrollTo(0, 0)

    const favicon = document.getElementById('favicon')
    favicon.href = "/favicon-lively.ico"
  }, [])
  document.title = "Lively | A Daily Planner and Journal to Organize Your Life"

  const width = useWidth()

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
        marginTop: "2rem"
      }
    }
  }

  const [openEmailSubForm, setOpenEmailSubForm] = useState(false)

  return (
    <div style={styles.container}>
      <div style={headingContainerControl()}>
        <p style={{...headingContentControl(), marginBottom: "2rem"}} className="h2">
          The all-in-one planner and journal for teens.
        </p>
        <p style={headingContentControl()} className="h5"> 
          Hi there! We're Bubbly Studios, and we made the Lively app to help members of 
          the community find balance and purpose in each day.
        </p>

        <div className="topButtonControl">
          <a
            href="https://www.apple.com/app-store/"
            target="_blank" rel="noopener noreferrer"
            className="catchline-get-premium-container"
          >
            <div className="catchlineButtonText">
              <p>Download for iOS</p>
            </div>
          </a>
        </div>

        <button className="subscribeContainer" onClick={() => setOpenEmailSubForm(prev => !prev)}>
          <div className="subscribeText">Subscribe to our mailing list &nbsp;→</div>
        </button>
      </div>

      <div style={{...styles.whiteContainerRow, ...paddingControl()}}>
        <div style={widthControl()}>
          <div style={{...descriptorControl(), flexDirection: "column", display: "flex"}}>
            <p style={{...styles.h2Space}} className="h2">
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
            <p style={{...styles.h2Space}} className="h2">
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
        <div style={widthControl()}>
          <div style={styles.centeringTextWrap}>
            <p style={{...styles.h2Space}} className="h2">
              Easily organize the next meetup with your friends
            </p>
            <p className="p" style={sharingFeatureControl()}>
              Figuring out when to hang out shouldn't require an endless back-and-forth. 
              When you add friends to shared events, you'll see when they're busy, but 
              the details remain private.
            </p>
            {
              width > 550 ?
              <img
                style={{width: "100%", marginTop: "4rem"}}
                src={process.env.PUBLIC_URL + "/assets/home-features/sharing-feature.png"}
                alt={"Sharing features"}
              /> :
              <img
                style={{width: "100%", marginTop: "4rem"}}
                src={process.env.PUBLIC_URL + "/assets/home-features/sharing-feature-small.png"}
                alt={"Sharing features"}
              />
            }
          </div>
        </div>
      </div>

      <div style={{...styles.grayContainerRow, ...paddingControl()}}>
        <div style={widthControl()}>
          <div style={{...descriptorControl(), flexDirection: "column", display: "flex"}}>
            <p style={{...styles.h2Space}} className="h2">
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

      <div style={{...styles.downloadContainer, ...paddingControl()}}>
        <p className="h5" style={{textAlign: "center", marginBottom: "1rem"}}>
          When it comes to your life, you should be the one behind the steering wheel.
        </p>
        <p style={{maxWidth: "60rem", color: colors.darkBlue, textAlign: "center"}} className="h2">
          Ready to set sail?
        </p>

        <div style={{display: 'flex', ...styles.downloadButtonBottom}}>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank" rel="noopener noreferrer"
            className="catchline-download-container"
          >
            <div className="catchlineButtonText">
              <p>Download for iOS</p>
            </div>
          </a>
        </div>

        
      </div>

      {
        openEmailSubForm &&
        <EmailSubForm setOpen={setOpenEmailSubForm}/>
      }
      
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
  downloadContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: "6rem",
    paddingRight: "6rem",
    marginBottom: "3rem",
  },
  downloadButtonBottom: {
    marginTop: "2rem",
  },
  h2Space: {
    marginBottom: "1rem",
  },
  centeringTextWrap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
}