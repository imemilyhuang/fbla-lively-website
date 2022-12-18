import React from "react"
import colors from "../../colors"
import BlogContactSection from "../../components/BlogContactSection"
import useWindowDimensions from "../../useWindowDimensions"

// rules to format blog posts
    // use styles.space3Above on text just below title
    // use styles.space3Above to divide bigger sections
    // use styles.space1Above to divide individual paragraphs

    // use className="h4" and styles.subtitle on date tag
    // use className="h1" on title, may need to do inline styling to set a good width
    // use className="h3" on subheadings
    // use className="p" and styles.space1Above on all paragraphs

    // always leave the contact info section at the bottom

    // here's a dash symbol if needed! —

const PreReleaseReflecting = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  document.title = "A Pre-Release Reflection | Lively Blog"

  const { height, width } = useWindowDimensions()

  const widthControl = () => {
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

  const imageControl = () => {
    if (width > 900) {
      return {
        maxWidth: "70%",
        marginBottom: "4rem",
      }
    } else {
      return {
        maxWidth: "100%",
        marginBottom: "4rem",
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

  return (
    <div style={styles.container}>
      <div style={{...styles.whiteContainer, ...paddingControl()}}>
        <div style={widthControl()}>
            <img style={imageControl()} src={process.env.PUBLIC_URL + "/assets/blog/pre-release-reflecting.png"} alt={"Thinking face"} />
            <p className="h4" style={styles.subtitle}>DECEMBER 01, 2022</p>
            <p style={{...h1Control(), maxWidth: "72rem"}}>
                A reflection on everything it took to get to this point
            </p>

            <p className="p" style={styles.space3Above}>
                <span style={styles.bold}>When was the last time you spent an entire day 
                without using your phone?</span> Personally, even if such a day exists, 
                it's so far gone in my memory that it basically never happened. This just 
                goes to show how dependent we are on technology in this digital age. 
                It has become such an integral, defining part of modern life 
                that we rarely go a waking hour without using an electronic device. 
                Millions of mobile apps are available for download to fulfill any 
                need a user could possibly have, and I could add five more 
                to my home screen in under 20 seconds.
            </p>
            <p className="p" style={styles.space1Above}>
                I truly appreciate how easy it is to get new apps and use all the 
                ones I've already downloaded, but working on creating an app of my 
                own brings that appreciation to a new level. Since there are 
                boatloads of existing apps for practically anything a user could 
                want, it's easy to gloss over all the effort that went into getting 
                even a single feature to work, much less a cohesive, usable application.
            </p>
            <p className="p" style={styles.space1Above}>
                When I started working on Lively earlier this year, I jumped 
                in with a great idea, a new laptop, amateur programming skills, and 
                the belief that me and my friend— just the two of us— could do this. 
                Something rather obvious in retrospect that I didn't fully realize 
                at first was that <span style={styles.bold}>creating an app is actually 
                hard.</span> If I never got into developing, I wouldn't know how much a 
                single misspelled word could screw up your code. I wouldn't know how 
                complex it might be to make an on-screen overlay swipeable. You'd be surprised 
                by how little time I spend typing in VS Code in comparison to how much time I spent 
                going down Stack Overflow rabbit holes.
            </p>
            <p className="p" style={styles.space1Above}>
                Now, countless months after beginning to create Lively and years after I first 
                started learning to code, coding is no less of a challenge. I'm faster 
                at squashing bugs, and it's easier to make features work, but there 
                are still so many techniques I don't know and so many I probably never will 
                know. Moving forward, I know that there will never cease to 
                be a problem to conquer or new thing for me to learn when it comes to 
                programming.
            </p>
            <p className="p" style={styles.space1Above}>
                So what exactly am I up to? <span style={styles.bold}>My friend and 
                I are in the home stretch of developing this app.</span> This is the 
                hard part where we might start to lose steam or get bogged down in 
                the more intricate parts of our code. How am I holding up? Quite well, 
                actually. Programming is one of those things that really teaches you to appreciate 
                the journey, and I don't believe a destination exists. There are milestones 
                for sure— I can't wait for the moment Lively gets released to the App Store and 
                gets its first download— but we'll be constantly updating the app and responding to 
                user feedback after the initial release. Plus, programming languages are always 
                changing, and new ones appear all the time. I'll always be learning something 
                new, and it's hard to imagine what reaching the pinnacle of programming would 
                look like.
            </p>
            <p className="p" style={styles.space1Above}>
                Taking a step back and looking at how Lively is coming together 
                brings me so much joy and satisfaction. It's incredibly rewarding to know 
                that all our efforts have the potential to help people like me, individuals who 
                might be struggling to find a sense of direction or purpose in their 
                lives, achieve an equilibrium between all their daily activities.
            </p>
            <p className="p" style={styles.space1Above}>
                Don't worry, Lively is coming very soon. Stick around for the 
                first release, because my friend and I would love for you to try it 
                out. I'll talk about all the ways Lively can specifically help you 
                in another post. Stay tuned for that!
            </p>
          
            <BlogContactSection />
        </div>
      </div>

    </div>
  )
}

export default PreReleaseReflecting

let styles = {
  container: {
    display: "flex",
    flexDirection: "column",
  },
  whiteContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  subtitle: {
    color: colors.darkGray,
  },
  bold: {
    fontWeight: "600"
  },
  space6Above: {
    marginTop: "6rem",
  },
  space3Above: {
    marginTop: "3rem",
  },
  space1Above: {
    marginTop: "1rem",
  },
}