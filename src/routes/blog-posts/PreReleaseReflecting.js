import React from "react"
import colors from "../../colors"
import BlogContactSection from "../../components/BlogContactSection"
import useWidth from "../../useWidth"

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

  const width = useWidth()

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

  return (
    <div style={styles.container}>
      <div style={{...styles.whiteContainer, ...paddingControl()}}>
        <div style={widthControl()}>
            <img style={imageControl()} src={process.env.PUBLIC_URL + "/assets/blog/pre-release-reflecting.png"} alt={"Thinking face"} />
            <p className="h4" style={styles.subtitle}>DECEMBER 01, 2022</p>
            <p className="h1" style={{maxWidth: "72rem"}}>
              A reflection on everything it took to get to this point
            </p>

            <p className="p" style={styles.space3Above}>
                <span style={styles.bold}>When was the last time you spent an entire day 
                without using your phone?</span> Personally, even if such a day exists, 
                it's so far gone in my memory that it basically never happened. This just 
                goes to show how dependent we are on technology in this digital age. 
                Technology has become such an integral, defining part of modern life 
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
                When we founded Bubbly Studios and started working on Lively earlier 
                this year, we jumped in with a vision and the driving belief that we could 
                make our idea come to life. Now, countless months after we began our journey, 
                we're finally in the home stretch of developing this app.
            </p>
            <p className="p" style={styles.space1Above}>
                Taking a step back and looking at how Lively is coming together 
                brings me so much joy and satisfaction. It's incredibly rewarding to know 
                that all our efforts have the potential to help people like me—individuals who 
                might be struggling to find a sense of direction or purpose in their 
                lives—achieve balance between all their daily activities.
            </p>
            <p className="p" style={styles.space1Above}>
                Don't worry, Lively is coming very soon. Stick around for the 
                first release, because we would love for you to try it 
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
