import React from "react"
import colors from "../colors"
import useWindowDimensions from "../useWindowDimensions"

const Support = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  React.useEffect(() => {
    const favicon = document.getElementById('favicon')
    favicon.href = "/favicon-lively.ico"
  }, [])
  document.title = "Support | Lively"

  const { _, width } = useWindowDimensions()

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

  const marginTopControl = () => {
    if (width > 1100) {
      return {
        marginTop: "6rem",
      }
    } else if (width > 700) {
      return {
        marginTop: "4rem",
      }
    } else {
      return {
        marginTop: "3rem",
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

  const h3Control = () => {
    if (width > 900) {
      return {
        fontSize: "2rem",
        fontWeight: 500,
      }
    } else {
      return {
        fontSize: "1.4rem",
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
        <p className="h4" style={styles.subtitle}>LIVELY SUPPORT</p>
        <p style={h1Control()}>How can we help you?</p>
        <p style={{...styles.spaceAbove, ...h5Control()}}>
          If you're looking for something, you're in the right place.
        </p>
      </div>
      
      <div style={{...styles.whiteContainer, ...paddingControl()}}>
        <div style={styles.container2}>
          <p className="h4" style={styles.subtitle}>SELF-SERVE HELP</p>
          <p style={h2Control()}>Browse topics</p>

          <p style={{...styles.bigSpaceAbove, ...h3Control()}}>Group events and adding friends</p>
          <p className="p" style={styles.spaceAbove}>
            Lively gives you the flexibility to share events with other users. When creating a new event, 
            the "Share event" property allows you to add other people to that event. If you get invited to an 
            event, accepting the invitation in your notifications tab adds it to your calendar under the 
            "Friend events" space.
          </p>
          <p className="p" style={styles.spaceAbove}>
            Adding friends is another way to connect with people on Lively. Click on the profile icon in the 
            top-right corner of the "Home" tab. The "Friends" tab under settings allows you to manage all your 
            friends and pending friend requests, and you can also search for new friends by their username.
          </p>

          <p style={{...styles.bigSpaceAbove, ...h3Control()}}>How to add new calendar events and journal entries</p>
          <p className="p" style={styles.spaceAbove}>
            To add events or entries, navigate to the "Events" or "Journal" tab. Click 
            the big plus button in the lower right hand corner. After creation, the date 
            property of your new event or entry will be set as the selected date.
          </p>

          <p style={{...styles.bigSpaceAbove, ...h3Control()}}>Options to view your calendar</p>
          <p className="p" style={styles.spaceAbove}>
            Your calendar comes in two different views. In "Timeline" view, your events appear as blocks 
            on a grid. In "Schedule" view, events take on more of a list appearance. You can easily switch 
            between these viewing options by tapping on the hamburger menu in the top-left corner, depending 
            on what works best for you. Tapping on any event pulls up more details and lets you edit that 
            event.
          </p>
          <p className="p" style={styles.spaceAbove}>
            You also get to categorize your events under spaces to stay more organized! Show and hide spaces and 
            all the events associated with that space at any time.
          </p>

          <p style={{...styles.bigSpaceAbove, ...h3Control()}}>Options to view your journal</p>
          <p className="p" style={styles.spaceAbove}>
            When viewing your journal, you can sort entries from newest to oldest, or from oldest to newest. 
            You can easily switch between these viewing options by tapping on the hamburger menu in the 
            top-left corner, depending on what works best for you. When you select on any existing journal 
            entry, you'll be able to view the actual content of that entry.
          </p>
          <p className="p" style={styles.spaceAbove}>
            Not just that, you can choose various time frames depending on if you want to see all your journal entries 
            at once, if you want to reflect on your past week or month, or if you just want to focus in on today.
          </p>

          <p style={{...styles.bigSpaceAbove, ...h3Control()}}>How to edit existing calendar events and journal entries</p>
          <p className="p" style={styles.spaceAbove}>
            Navigate into an event or entry by tapping on the title. From there, you can edit text 
            details of your selection by tapping on the field you want to change. If you want to change 
            the image you uploaded into a journal entry, tap the three white dots in the upper right 
            hand corner of the image.
          </p>

          <p style={{...styles.bigSpaceAbove, ...h3Control()}}>Customizing your profile</p>
          <p className="p" style={styles.spaceAbove}>
            On the "Home" tab, tap on the settings icon in the top-right corner. The "Account" settings tab 
            allows you to change profile picture. You can't change your name, username, or email just yet, but 
            look out for our next update to see when those features become available!
          </p>
        
          <p className="h4" style={{...styles.subtitle, ...marginTopControl()}}>CONTACT</p>
          <p style={h2Control()}>Couldn't find what you were looking for?</p>
          <p className="p" style={{...styles.spaceAbove, marginBottom: "3rem"}}>
            For any inquiries related specifically to Lively, please contact 
            lively@bubblystudios.com. For other general questions or needs relating to 
            our company as a whole, you can reach us at contact@bubblystudios.com. We 
            love hearing what you have to say!
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
  bigSpaceAbove: {
    marginTop: "3rem",
  },
  spaceAbove: {
    marginTop: "1rem",
  },
}