import React from "react"
import colors from "../colors.js"
import { Link } from "react-router-dom"
import HomePremiumFeature from "../components/HomePremiumFeature"

const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={styles.container}>
      <div style={styles.catchlineContainer}>
        <p className="h1" style={styles.catchlineTitle}>
          Create an organized, smooth-sailing life with no limits.
        </p>
        <p style={styles.catchlineDescription} className="p"> 
          Achieve balance in your work and life with a single app. 
          Lively helps you spend less time planning and 
          worrying and more time enjoying the things 
          that matter.
        </p>

        <div style={styles.topButtonOptions}>
          <Link to="/lively/premium" className="catchline-get-premium-container">
              <div style={{...styles.catchlineButtonText, width: "10rem"}}>
                  <p>Get Premium</p>
              </div>
          </Link>
          <Link to="/lively/download" className="catchline-download-container">
              <div style={{...styles.catchlineButtonText, width: "13rem"}}>
                  <p>Download for iOS</p>
              </div>
          </Link>
        </div>
      </div>

      <div style={styles.whiteContainerRow}>
        <div style={styles.contentWrapper2}>
          <div style={{...styles.textWrap, paddingTop: "2rem"}}>
            <p className="h2" style={styles.h2Space}>
            Streamline your events with a dynamic calendar
            </p>
            <p className="p">
              Lively makes managing your time effortless. Schedule any 
              personal or group event in seconds, and add all the details and 
              reminders you need to never miss a thing.
            </p>
          </div>
          <img
            style={styles.calendarImage}
            src={"../assets/home-features/calendar-feature.png"}
            alt={"Calendar feature"}
          />
        </div>
      </div>

      <div style={styles.grayContainerRow}>
        <div style={styles.contentWrapper2}>
          <img
            style={styles.journalImage}
            src={"../assets/home-features/journal-feature.png"}
            alt={"Journal feature"}
          />
          <div style={{...styles.textWrap, paddingTop: "2rem"}}>
            <p className="h2" style={{...styles.h2Space, maxWidth: "28rem"}}>
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

      <div style={styles.blueContainer}>
        <div style={styles.contentWrapper1}>
          <div style={styles.centeringTextWrap}>
            <p className="h2" style={styles.h2Space}>
              Easily organize the next meetup with your friends
            </p>
            <p className="p" style={{maxWidth: "68rem", textAlign: "center"}}>
              Figuring out when to hang out shouldn't require an endless back-and-forth. 
              When you add friends to shared events, you'll see when they're busy, but 
              the details remain private.
            </p>
          </div>
          <img
            style={styles.sharingImage}
            src={"../assets/home-features/sharing-feature.png"}
            alt={"Sharing features"}
          />
        </div>
      </div>

      <div style={styles.grayContainerRow}>
        <div style={styles.contentWrapper2}>
          <div style={{...styles.textWrap, paddingTop: "2rem"}}>
            <p className="h2" style={{...styles.h2Space, maxWidth: "22rem"}}>
              View your days at a glance
            </p>
            <p className="p">
              Lively keeps it simple without sacrificing the content.
              The comprehensive home tab serves as a hub that helps you 
              remember and get things done consistently.
            </p>
          </div>
          <img
            style={styles.homeImage}
            src={"../assets/home-features/home-feature.png"}
            alt={"Home screen"}
          />
        </div>
      </div>

      <div style={styles.whiteContainerColumn}>
        <div style={styles.contentWrapper1}>
          <div style={styles.centeringTextWrap}>
            <p className="h2" style={styles.h2Space}>
              Add more sparkle to your life with Lively Premium
            </p>
            <p className="p" style={{marginBottom: "4rem", maxWidth: "70rem", textAlign: "center"}}>
              Upgrade to Premium for the same Lively experience you love, 
              but with more power to achieve your goals and make the most out of every 
              day. Check out a few of the perks you'll gain access to:
            </p>
          </div>
          <HomePremiumFeature />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "4rem"
          }}
        >
          <Link
            to="/lively/login"
            className="catchline-get-premium-container"
            style={{marginRight: "4rem"}}
          >
              <div style={{...styles.catchlineButtonText, width: "10rem"}}>
                  <p>Get Premium</p>
              </div>
          </Link>
          <Link to="/lively/premium" className="learn-more-premium-container">
              <div>
                  <p className="h4">Learn more</p>
              </div>
          </Link>
        </div>
      </div>


      <div style={styles.downloadContainer}>
        <p className="h2" style={{width: "60rem", textAlign: "center"}}>
          When it comes to your life, you should be the one behind 
          the steering wheel. Ready to set sail?
        </p>

        <div style={{display: "flex"}}>
        <Link
          to="/lively/download"
          className="catchline-download-container"
          style={{...styles.downloadButtonBottom, marginLeft: 0}}
        >
          <div style={{...styles.catchlineButtonText, width: "13rem"}}>
              <p>Download for iOS</p>
          </div>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Home

let styles = {
  container: {
    display: "flex",
    flexDirection: "column",
  },
  contentWrapper1: {
    width: "76rem",
  },
  contentWrapper2: {
    width: "76rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  whiteContainerRow: {
    display: "flex",
    flexDirection: "row",
    padding: "6rem",
    justifyContent: "center"
  },
  whiteContainerColumn: {
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
  grayContainerRow: {
    display: "flex",
    flexDirection: "row",
    padding: "6rem",
    backgroundColor: colors.grayBackground,
    justifyContent: "center"
  },
  grayContainerColumn: {
    display: "flex",
    flexDirection: "column",
    padding: "6rem",
    backgroundColor: colors.grayBackground,
  },
  catchlineContainer: {
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
  },
  catchlineTitle: {
    textAlign: "center",
    marginBottom: "2rem",
    width: "50rem",
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
  catchlineButtonText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.4rem",
  },
  calendarImage: {
    maxWidth: "40rem",
    marginLeft: "10rem",
  },
  journalImage: {
    maxWidth: "36rem",
    marginRight: "8rem",
  },
  sharingImage: {
    maxWidth: "80rem",
    marginTop: "4rem",
  },
  homeImage: {
    maxWidth: "44rem",
    marginLeft: "8rem",
  },
  downloadContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "6rem",
    marginBottom: "8rem",
  },
  downloadButtonBottom: {
    marginTop: "4rem",
  },
  h2Space: {
    marginBottom: "1rem",
  },
  textWrap: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "flex-start",
  },
  centeringTextWrap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }
}