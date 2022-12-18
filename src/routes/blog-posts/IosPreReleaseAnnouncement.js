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

const IosPreReleaseAnnouncement = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  document.title = "Coming Soon: Lively for iPhone | Lively Blog"

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
            <img style={imageControl()} src={process.env.PUBLIC_URL + "/assets/blog/ios-pre-release-announcement.png"} alt={"Code with gears"} />
            <p className="h4" style={styles.subtitle}>DECEMBER 18, 2022</p>
            <p style={{...h1Control(), maxWidth: "72rem"}}>
                Coming soon: we're releasing the first version of Lively on iPhone!
            </p>

            <p className="p" style={styles.space3Above}>
                <span style={styles.bold}>This is the moment we've been looking forward 
                to for months, and it's finally here.</span> I'll keep this update short 
                and sweet... I'm back with another blog post to announce that we just 
                submitted Lively for review before it gets released to the App Store!
            </p>
            <p className="p" style={styles.space1Above}>
                Yep, we went through all of Apple's guidelines and checked the boxes. 
                Even though Lively is a fun app meant to make your life more enjoyable 
                and fulfilling, we take our final products seriously. We want our apps to 
                be simple and beautiful while simultaneously offering a fluid user experience 
                and a multitude of practical tools. We want Lively to be as best as it 
                can be so that it's actually useful to you and you can use it every day 
                to make life better.
            </p>
            <p className="p" style={styles.space1Above}>
                I hope you're as excited as we are for the Lively launch! We'll keep you 
                posted when the app becomes available for download.
            </p>
          
            <BlogContactSection />
        </div>
      </div>

    </div>
  )
}

export default IosPreReleaseAnnouncement

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