import React from "react"
import colors from "../colors.js"

const About = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={styles.container}>
      <div style={styles.blueContainer}>
        <div style={styles.contentWrapper}>
          <div style={{...styles.textWrap}}>
            <p className="h1" style={styles.h1Space}>
              Staying afloat in a world of turbulence
            </p>
            <p className="p" style={{width: "36rem"}}>
              Lively is an <span style={{fontWeight: "600"}}> all-in-one 
              planner and journal</span> that serves as an anchor for 
              people to find balance and purpose.
            </p>
          </div>
          <img
            style={styles.shipImage}
            src={"../assets/center-small-ship-waves.png"}
            alt={"Ship with waves"}
          />
        </div>
      </div>


      <div style={styles.whiteContainer}>
        <div>
          <p className="h2" style={styles.h1Space}>
            Lively's story
          </p>
          <p className="p" style={{marginBottom: "2rem", maxWidth: "80rem"}}>
            In a life flooded with activities, expectations, and distractions, 
            it's hard to stay organized. Lifestyle and productivity apps that 
            attempt to solve this problem are very common, but keeping track of 
            things isn't any easier when your thoughts and plans are divided 
            into multiple pieces.
          </p>
          <p className="p" style={{marginBottom: "6rem", maxWidth: "80rem"}}>
            Lively was started by two best friends aiming to replace cluttered home 
            screens with a single powerful app. Our app's clean and light interface 
            allows you to schedule personal and shared events, time block, and 
            write in a journal in a centralized place, all without feeling 
            overwhelmed. With the <span style={{fontWeight: "600"}}>perfect blend of 
            structure and flexibility</span> that Lively gives you, you'll finally 
            be able to find balance and purpose in each day.
          </p>
          <p className="h2" style={styles.h1Space}>
            Our purpose
          </p>
          <p className="p" style={{marginBottom: "2rem", maxWidth: "80rem"}}>
            Lively is about giving people the true clarity they need to 
            navigate life's challenges.  We want to make it easier 
            to focus on the present moment so you'll spend less time stressing 
            about the future. We want to provide a personal space for you 
            to organize your activities and reflect on your experiences 
            and wellbeing.
          </p>
          <p className="p" style={{marginBottom: "2rem", maxWidth: "80rem"}}>
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
    width: "80rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  whiteContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "6rem",
    alignItems: "center",
  },
  blueContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "6rem",
    backgroundColor: colors.superLightBlue,
    alignItems: "center",
  },
  shipImage: {
    maxWidth: "36rem",
    marginLeft: "4rem",
  },
  h1Space: {
    marginBottom: "2rem",
  },
  textWrap: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "flex-start",
  }
}