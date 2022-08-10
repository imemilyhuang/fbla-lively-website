import React from 'react'
import colors from '../colors'

const Support = () => {
  return (
    <div style={styles.container}>
      <div style={styles.blueContainer}>
        <p className="h4" style={styles.supportSubTitle}>LIVELY SUPPORT</p>
        <p className="h1">How can we help you?</p>
      </div>
      
      <div style={styles.whiteContainer}>
        <div style={{width: "80rem"}}>
            <p className="h4" style={styles.supportSubTitle}>SELF-SERVE HELP</p>
            <p className="h2">Browse topics</p>

            <p className="h3" style={styles.spaceAbove}>Group events, shared spaces, and adding friends</p>
            <p className="p">Insert an answer</p>

            <p className="h3" style={styles.spaceAbove}>How to add new calendar events and journal entries</p>
            <p className="p">Insert an answer</p>

            <p className="h3" style={styles.spaceAbove}>Options to view your calendar</p>
            <p className="p">Insert an answer</p>

            <p className="h3" style={styles.spaceAbove}>Options to view your journal</p>
            <p className="p">Insert an answer</p>

            <p className="h3" style={styles.spaceAbove}>How to edit existing calendar events and journal entries</p>
            <p className="p">Insert an answer</p>

            <p className="h3" style={styles.spaceAbove}>Customizing your profile</p>
            <p className="p">Insert an answer</p>

            <p className="h3" style={styles.spaceAbove}>Curating your home feed</p>
            <p className="p">Insert an answer</p>

            <p className="h3" style={styles.spaceAbove}>Managing your Premium or Plus plan</p>
            <p className="p">Insert an answer</p>
          
            <p className="h4" style={{...styles.supportSubTitle, marginTop: "6rem"}}>CONTACT</p>
            <p className="h2">Couldn't find what you were looking for?</p>
            <p className="p" style={styles.spaceAbove}>
              You can reach us directly by emailing lively@bubblystudios.com. We love hearing 
              your feedback and questions!
            </p>
        </div>
      </div>

    </div>
  )
}

export default Support

let styles = {
  container: {
    display: "flex",
    flexDirection: "column",
  },
  blueContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "6rem",
    backgroundColor: colors.superLightBlue,
    alignItems: "center",
  },
  whiteContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "6rem",
    alignItems: "center",
  },
  supportSubTitle: {
    color: colors.darkGray,
  },
  spaceAbove: {
    marginTop: "2rem"
  }
}