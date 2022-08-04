import React from "react"
import colors from "../colors.js"
import { Link } from "react-router-dom"
import PremiumPageCard from "../components/PremiumPageCard"

const Premium = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const premiumCardData = [{
      src: "../assets/premium-page-icons/widgets.png",
      title: "Intelligent widgets",
      caption: "Bring Lively to your home screen.",
    }, {
      src: "../assets/premium-page-icons/daily-feed.png",
      title: "Custom daily feed",
      caption: "Curate everything that shows up.",
    }, {
      src: "../assets/premium-page-icons/mood-face.png",
      title: "Draw mood faces",
      caption: "Express your most authentic self.",
    }, {
      src: "../assets/premium-page-icons/themes.png",
      title: "More themes",
      caption: "Unlock fresh presets, or create your own.",
    }, {
      src: "../assets/premium-page-icons/insights.png",
      title: "Advanced insights",
      caption: "Track your schedule, habits, and mood over time.",
    }, {
      src: "../assets/premium-page-icons/tools.png",
      title: "Productivity-boosting tools",
      caption: "A sound radio, focus timer, habit tracker, and more.",
    }, {
      src: "../assets/premium-page-icons/face-id.png",
      title: "Face-ID and passcode lock",
      caption: "Full protection for your thoughts and plans.",
    }, {
      src: "../assets/premium-page-icons/uploads.png",
      title: "Upload anything",
      caption: "Multiple images, video, and audio for journal entries.",
    }, {
      src: "../assets/premium-page-icons/spaces.png",
      title: "Unlimited spaces",
      caption: "Organize different aspects of your life.",
    }, {
      src: "../assets/premium-page-icons/stickers.png",
      title: "Stickers!",
      caption: "Design your own, and get Premium-exclusive stickers.",
  }]

  const thingArray = premiumCardData.map(item =>
      <PremiumPageCard src={item.src} title={item.title} caption={item.caption} />
  )

  return (
    <div style={styles.container}>
      <div style={styles.blueContainer}>
        <div style={styles.contentWrapper}>
          <img
            style={styles.shipImage}
            src={"../assets/lively-ship.png"}
            alt={"Ship with crown symbol"}
          />
          <div style={{...styles.textWrap}}>
            <p className="h1" style={styles.h1Space}>
              Life is better with Lively Premium
            </p>
            <p className="h5" style={{marginBottom: "3rem"}}>
              The Lively experience you love, but <span style={{...styles.emphasizedBlue, fontWeight: "600"}}>a 
              whole lot sparklier.</span>
            </p>

            <div style={styles.topButtonOptions}>
            <Link to="/lively/login" className="get-premium-container">
                <div style={{...styles.contentWrapper, marginLeft: "1rem", marginRight: "1rem"}}>
                    <p className="p">$69.99 per year</p>
                    <p style={styles.discountOffer}>16% off</p>
                </div>
            </Link>
            <Link to="/lively/login" className="get-premium-container" style={{marginLeft: "2rem"}}>
                <div className="p" style={{marginLeft: "1rem", marginRight: "1rem"}}>
                    <p>$6.99 per month</p>
                </div>
            </Link>
        </div>
          </div>

          
        </div>
      </div>


      <div style={styles.whiteContainerColumn}>
        <div style={styles.contentWrapper2}>
        <p className="h2">
          Why <span style={styles.emphasizedBlue}>Premium</span>
        </p>
        </div>
        {thingArray}
      </div>

    </div>
  )
}

export default Premium

let styles = {
  container: {
    display: "flex",
    flexDirection: "column",
  },
  discountOffer: {
    marginLeft: "1rem",
    backgroundColor: colors.darkBlue,
    paddingTop: "0.2rem",
    paddingBottom: "0.2rem",
    paddingLeft: "0.6rem",
    paddingRight: "0.6rem",
    borderRadius: "5rem",
  },
  emphasizedBlue: {
    color: colors.darkBlue,
  },
  topButtonOptions: {
    display: "flex",
    flexDirection: "row",
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  contentWrapper2: {
    display: "flex",
    justifyContent: "center",
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
    marginTop: "6rem",
    marginBottom: "8rem",
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
    flexDirection: "column",
    alignItems: "center",
    padding: "6rem",
    paddingBottom: "8rem",

    backgroundImage: "url(/assets/center-small-ship-waves.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "bottom",
    backgroundColor: colors.superLightBlue,
  },
  topButtonOptions: {
    display: "flex",
    flexDirection: "row",
  },
  catchlineButtonText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.4rem",
  },
  shipImage: {
    maxWidth: "16rem",
    marginRight: "8rem",
  },
  h1Space: {
    marginBottom: "2rem",
  },
  textWrap: {
    display: "flex",
    flexDirection: "column",
  },
  centeringTextWrap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }
}