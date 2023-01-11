import React from "react"
import colors from "../colors.js"
import useWindowDimensions from "../useWindowDimensions"

const About = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  React.useEffect(() => {
    document.title = "About Our Purpose and Values | Lively"
    const favicon = document.getElementById('favicon')
    favicon.href = "/favicon-lively.ico"
  }, [])

  const { height, width } = useWindowDimensions()

  const widthControl = () => {
    if (width > 1300) {
      return {
        maxWidth: "76rem",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
      }
    } else {
      return {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }
    }
  }

  const contentWidthControl = () => {
    if (width > 1100) {
      return {
        maxWidth: "76rem",
        display: "flex",
        flexDirection: "column",
      }
    } else {
      return {
        display: "flex",
        flexDirection: "column",
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

  const paddingBottomControl = () => {
    if (width > 1100) {
      return {
        paddingBottom: "6rem",
      }
    } else if (width > 700) {
      return {
        paddingBottom: "4rem",
      }
    } else {
      return {
        paddingBottom: "2rem",
      }
    }
  }

  const imageControl = () => {
    if (width > 1300) {
      return {
        maxWidth: "36rem",
        marginLeft: "4rem"
      }
    } else if (width > 700) {
      return {
        maxWidth: "75%",
       marginTop: "4rem"
      }
    } else {
      return {
        maxWidth: "100%",
        marginTop: "3rem"
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

  return (
    <div style={styles.container}>
      <div style={{...styles.blueContainer, ...paddingControl()}}>
        <div style={{...styles.contentWrapper, ...widthControl()}}>
          <div style={{...styles.textWrap}}>
            <p style={{...styles.h1Space, ...h1Control()}}>
              Staying afloat in a world of turbulence
            </p>
            <p className="p">
              Lively is an <span style={{fontWeight: "600"}}> all-in-one 
              planner and journal</span> that serves as an anchor for 
              people to find balance and purpose.
            </p>
          </div>
          <img
            style={imageControl()}
            src={"../assets/center-small-ship-waves.png"}
            alt={"Ship with waves"}
          />
        </div>
      </div>

      <div style={{...styles.whiteContainer, ...paddingControl()}}>
        <div style={contentWidthControl()}>
          <p style={{...styles.h1Space, ...h2Control()}}>
            Lively's story
          </p>
          <p className="p" style={{marginBottom: "1rem", maxWidth: "76rem"}}>
            In a life flooded with activities, expectations, and distractions, 
            it's hard to stay organized. Lifestyle and productivity apps that 
            attempt to solve this problem are very common, but keeping track of 
            things isn't any easier when your thoughts and plans are divided 
            into multiple pieces.
          </p>
          <p className="p" style={{...paddingBottomControl(), maxWidth: "76rem"}}>
            Lively was started by two best friends in high school 
            aiming to replace cluttered home 
            screens with a single powerful app. Our app's clean and light interface 
            allows you to schedule personal and shared events, time block, and 
            write in a journal in a centralized place, all without feeling 
            overwhelmed. With the <span style={{fontWeight: "600"}}>perfect blend of 
            structure and flexibility</span> that Lively gives you, you'll finally 
            be able to find balance and purpose in each day.
          </p>
          <p style={{...styles.h1Space, ...h2Control()}}>
            Our purpose
          </p>
          <p className="p" style={{...paddingBottomControl(), maxWidth: "76rem"}}>
            Lively is about giving people the true clarity they need to 
            navigate life's challenges.  We want to make it easier 
            to focus on the present moment so you'll spend less time stressing 
            about the future. We want to provide a personal space for you 
            to organize your activities and reflect on your experiences 
            and wellbeing.
          </p>
          <p style={{...styles.h1Space, ...h2Control()}}>
            Contact us
          </p>
          <p className="p" style={{marginBottom: "1rem", maxWidth: "76rem"}}>
          We'd love to hear all the feedback, burning questions, and brilliant 
            ideas you have to share! Please feel free to reach out to us at 
            lively@bubblystudios.com, and if you have more of a generic question 
            related to our company as a whole, send you comments to 
            contact@bubblystudios.com.
          </p>
          <p className="p" style={{marginBottom: "3rem", maxWidth: "76rem"}}>
            Thanks for joining us on this journey!
          </p>
        </div>
      </div>

    </div>
  )
}

export default About

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
  }
}