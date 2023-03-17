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

const CelebrateAppRelease = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  document.title = "Lively App Out Now | Lively Blog"

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
            <img style={imageControl()} src={process.env.PUBLIC_URL + "/assets/blog/celebrate-app-release.png"} alt={"Celebrate"} />
            <p className="h4" style={styles.subtitle}>JANUARY 05, 2023</p>
            <p className="h1" style={{maxWidth: "72rem"}}>
              The Lively app is available in the App Store!
            </p>

            <p className="p" style={styles.space3Above}>
                <span style={styles.bold}>We've finally reached the finish line! </span>
                After months of brainstorming, designing, coding, and testing, Lively is now a fully-functional
                mobile app. But, we're already working on our next update, so I guess this is only 
                the beginning. We can't wait to continue bringing new features to the app.
            </p>
            <p className="p" style={styles.space1Above}>
                Thanks for hopping on this boat with us and joining in on our adventure.
            </p>
          
            <BlogContactSection />
        </div>
      </div>

    </div>
  )
}

export default CelebrateAppRelease

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