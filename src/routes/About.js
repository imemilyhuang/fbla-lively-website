import React from "react"
import colors from "../colors.js"
import useWidth from "../useWidth.js"

const About = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  React.useEffect(() => {
    document.title = "About Our Purpose and Values | Lively"
    const favicon = document.getElementById('favicon')
    favicon.href = "/favicon-lively.ico"
  }, [])

  const width = useWidth()

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

  return (
    <div style={styles.container}>
      <div style={{...styles.blueContainer, ...paddingControl()}}>
        <div style={{...styles.contentWrapper, ...widthControl()}}>
          <div style={{...styles.textWrap}}>
            <p style={{...styles.hSpace}} className="h2">
              Staying afloat in a world of turbulence
            </p>
            <p className="h5">
              Lively is the <span style={{fontWeight: "600"}}> all-in-one 
              planner and journal</span> that serves as an anchor for 
              teens to find balance and purpose in their fast-paced lives.
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
          <p style={{...styles.hSpace}} className="h3">
            Our story
          </p>
          <p className="p" style={{marginBottom: "1rem", maxWidth: "76rem"}}>
            In a life flooded with activities, expectations, and distractions, 
            it's hard to stay organized. Lifestyle and productivity apps that 
            attempt to solve this problem are very common, but keeping track of 
            things isn't any easier when your thoughts and plans are divided 
            into multiple pieces.
          </p>
          <p className="p" style={{...paddingBottomControl(), maxWidth: "76rem"}}>
            That's why we founded Bubbly Studios—a software development business based in 
            Chesterfield, Missouri. We're the developers behind Lively, 
            and we're committed to making life more streamlined and enjoyable through a 
            single, powerful app. Lively's clean and light interface allows you to schedule 
            events, block out your time, and write in a journal, all in one centralized 
            place. With the <span style={{fontWeight: "600"}}>perfect blend of 
            structure and flexibility</span> that Lively gives you, you'll finally 
            be able to find balance and purpose in each day without feeling overwhelmed.
          </p>
          <p style={{...styles.hSpace}} className="h3">
            Our purpose
          </p>
          <p className="p" style={{...paddingBottomControl(), maxWidth: "76rem"}}>
            Lively is about giving teens the true clarity they need to 
            navigate life's challenges. We want to make it easier 
            to focus on the present moment so you'll spend less time stressing 
            about the future. We want to provide a personal space for you 
            to organize your activities and reflect on your experiences 
            and wellbeing.
          </p>
          <p style={{...styles.hSpace}} className="h3">
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
  hSpace: {
    marginBottom: "1rem",
  },
  textWrap: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "flex-start",
  }
}