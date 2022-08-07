import React from "react"
import colors from "../colors.js"
import { Link } from "react-router-dom"
import PremiumPageCard from "../components/PremiumPageCard"

const Premium = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const premiumCardData1 = [{
      src: "../assets/premium-page-icons/widgets.png",
      title: "Intelligent widgets",
      caption: "Keep Lively at your fingertips with home screen widgets.",
    }, {
      src: "../assets/premium-page-icons/daily-feed.png",
      title: "Custom daily feed",
      caption: "Curate the content that shows up in your feed.",
    }, {
      src: "../assets/premium-page-icons/mood-face.png",
      title: "Draw mood faces",
      caption: "Full power to express your most authentic self.",
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
      title: "Productivity tools",
      caption: "A sound radio, focus timer, habit tracker, and more.",
    }, {
      src: "../assets/premium-page-icons/face-id.png",
      title: "Face ID and passcode",
      caption: "Full protection for your thoughts and plans.",
    }, {
      src: "../assets/premium-page-icons/uploads.png",
      title: "Upload anything",
      caption: "Insert multiple images, video, and audio into your journal.",
    }
  ]

  const premiumCardData2 = [{
      src: "../assets/premium-page-icons/spaces.png",
      title: "Unlimited spaces",
      caption: "You choose how to organize different aspects of your life.",
    }, {
      src: "../assets/premium-page-icons/stickers.png",
      title: "Stickers!",
      caption: "Design your own, and get Premium-exclusive stickers.",
    }
  ]

  const thingArray1 = premiumCardData1.map(item =>
      <PremiumPageCard src={item.src} title={item.title} caption={item.caption} />
  )
  const thingArray2 = premiumCardData2.map(item =>
    <PremiumPageCard src={item.src} title={item.title} caption={item.caption} />
  )

  return (
    <div style={styles.container}>
      <div style={styles.blueContainer}>
        <div style={styles.contentWrapper}>
          <img style={styles.shipImage}
            src={"../assets/lively-ship.png"}
            alt={"Ship with crown symbol"}
          />
          <div style={{...styles.textWrap}}>
            <p className="h1" style={styles.hSpace}>
              Life is better with Lively Premium
            </p>
            <p className="h5" style={{marginBottom: "3rem"}}>
              The Lively experience you love, 
              but <span style={{...styles.emphasizedBlue, fontWeight: "600"}}>a 
              whole lot sparklier.</span>
            </p>

            <div style={styles.buttonOptions}>
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
          <p className="h2" style={{...styles.text, marginBottom: "2rem"}}>
            Why choose <span style={styles.emphasizedBlue}>Premium</span>
          </p>
          <p style={{...styles.text, marginBottom: "4rem", width: "52rem"}} className="p">
            Lively Premium comes with all these exclusive perks 
            for more control, more flexibilty, and better 
            organization.
          </p>
        </div>
        <div className="four-grid">
          {thingArray1}
        </div>
        <div className="two-grid" style={{marginTop: "6rem", marginBottom: "12rem"}}>
          {thingArray2}
        </div>
        
        <p style={{...styles.text, marginBottom: "4rem", width: "80rem"}} className="h2">
          It's time to start cruising through life with Lively Premium
        </p>
        <div style={{...styles.buttonOptions, marginBottom: "4rem"}}>
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
        <div style={styles.grayContainerRow}>
          <div style={styles.contentWrapper}>
            <div style={styles.textWrap}>
              <p className="h1" style={styles.hSpace}>
                Get the essentials with Lively Plus
              </p>
              <p className="h5" style={{width: "52rem", marginBottom: "2rem"}}>
                Lively Plus sticks to the basic add-ons: widgets, themes, advanced 
                insights, and unlimited spaces for more customizability.
              </p>

              <div style={{...styles.buttonOptions}}>
                <Link to="/lively/login" className="get-premium-container">
                    <div style={{...styles.contentWrapper, marginLeft: "1rem", marginRight: "1rem"}}>
                        <p className="p">$39.99 per year</p>
                        <p style={styles.discountOffer}>16% off</p>
                    </div>
                </Link>
                <Link to="/lively/login" className="get-premium-container" style={{marginLeft: "2rem"}}>
                    <div className="p" style={{marginLeft: "1rem", marginRight: "1rem"}}>
                        <p>$3.99 per month</p>
                    </div>
                </Link>
              </div>
            </div>

            <img
              style={styles.boatImage}
              src={"../assets/crowned-lively.png"}
              alt={"Lively paper boat wearing crown"}
            />
          </div>
        
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
  text: {
    textAlign: "center",
  },
  discountOffer: {
    marginLeft: "1rem",
    fontWeight: "500",
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
  buttonOptions: {
    display: "flex",
    flexDirection: "row",
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  contentWrapper2: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "80rem",
  },
  whiteContainerColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
    paddingBottom: "8rem",
    backgroundColor: colors.grayBackground,
    justifyContent: "center"
  },
  shipImage: {
    maxWidth: "16rem",
    marginRight: "8rem",
  },
  boatImage: {
    maxWidth: "16rem",
    marginLeft: "4rem",
  },
  hSpace: {
    marginBottom: "1rem",
  },
  textWrap: {
    display: "flex",
    flexDirection: "column",
  },
}