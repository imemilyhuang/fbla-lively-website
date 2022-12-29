import React from "react"
import colors from "../colors.js"
import { Link } from "react-router-dom"
import PremiumPageCard from "../components/PremiumPageCard"
import useWindowDimensions from "../useWindowDimensions"

const Premium = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  React.useEffect(() => {
    const favicon = document.getElementById('favicon')
    favicon.href = "/favicon-lively.ico"
  }, [])
  document.title = "Premium and Plus Features | Lively"

  const { height, width } = useWindowDimensions()

  const widthControl = () => {
    if (width > 1200) {
      return {
        maxWidth: "76rem",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
      }
    } else if (width > 1100) {
        return {
          maxWidth: "76rem",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
        }
    } else {
      return {
        display: "flex",
        flexDirection: "column",
      }
    }
  }

  const reverseWidthControl = () => {
    if (width > 1200) {
      return {
        maxWidth: "76rem",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
      }
    } else if (width > 1100) {
        return {
          maxWidth: "76rem",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
        }
    } else {
      return {
        display: "flex",
        flexDirection: "column-reverse",
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

  const shipImageControl = () => {
    if (width > 1400) {
      return {
        maxWidth: "28%",
        marginRight: "8rem"
      }
    } else if (width > 1100) {
      return {
        maxWidth: "28%",
        marginRight: "6rem"
      }
    } else {
      return {
        maxWidth: "28%",
        marginBottom: "2rem"
      }
    }
  }

  const boatImageControl = () => {
    if (width > 1100) {
      return {
        maxWidth: "28%",
        marginLeft: "4rem"
      }
    // } else if (width > 1100) {
    //   return {
    //     maxWidth: "28%",
    //     marginLeft: "4rem"
    //   }
    } else {
      return {
        maxWidth: "28%",
        marginBottom: "2rem"
      }
    }
  }

  const topButtonControl = () => {
    if (width > 1300 || (width <= 1100 && width > 800)) {
      return {
        display: "flex",
        flexDirection: "row",
        padding: "3rem",
        paddingLeft: 0,
      }
    } else if (width > 1100 || width <= 800) {
      return {
        display: "flex",
        flexDirection: "column",
        alignSelf: "flex-start",
        padding: "3rem",
        paddingLeft: 0,
      }
    } else {
      return {
        display: "flex",
        flexDirection: "row",
        padding: "3rem",
        paddingLeft: 0,
      }
    }
  }

  const bottomButtonControl = () => {
    if (width > 1200) {
      return {
        display: "flex",
        flexDirection: "row",
        padding: "3rem",
      }
    } else {
      return {
        display: "flex",
        flexDirection: "column",
        padding: "3rem",
        alignItems: "center",
      }
    }
  }

  const buttonSpacingControl = () => {
    if ((width > 1300) || (width <= 1100 && width > 800)) {
      return {
        marginLeft: "3rem",
        marginTop: 0,
      }
    } else if ((width > 1100) || (width <= 800)) {
      return {
        marginLeft: 0,
        marginTop: "2rem",
        display: "flex",
      }
    } else {
      return {
        marginLeft: "3rem",
        marginTop: 0,
      }
    }
  }

  const bottombuttonSpacingControl = () => {
    if (width > 1200) {
      return {
        marginLeft: "3rem",
        marginTop: 0,
      }
    } else {
      return {
        marginLeft: 0,
        marginTop: "2rem",
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

  const gridColumnControl = () => {
    if (width > 1400) {
      return "four-grid"
    } else if (width <= 1400 && width > 1000) {
      return "three-grid"
    } else if (width <= 1000 && width > 700) {
      return "two-grid-2"
    } else if (width <= 700) {
      return "one-grid"
    }
  }

  const gridColumnControl2 = () => {
    if (width > 1400) {
      return "two-grid"
    } else if (width <= 1400 && width > 700) {
      return "two-grid-2"
    } else if (width <= 700) {
      return "one-grid"
    }
  }

  const featureCaptionWidthControl = () => {
    if (width > 1100) {
        return {
            display: "flex",
            flexDirection: "column",
            maxWidth: "28rem",
        }
    } else if (width > 500) {
        return {
            display: "flex",
            flexDirection: "column",
        }
    } else {
        return {
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
        }
    }
  }

  const flexRowToColumn = () => {
    if (width > 500) {
      return {
        display: "flex",
        flexDirection: "row",
      }
    } else {
      return {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }
    }
  }

  const imageControl = () => {
    if (width > 500) {
      return {
          marginRight: "2.4rem",
          marginBottom: 0,
      }
    } else {
      return {
          marginRight: 0,
          marginBottom: "2rem",
      }
    }
  }

  const marginLeft = () => {
    if (width > 1100) {
      return {
        marginLeft: "6rem",
      }
    } else {
      return {
        marginLeft: 0,
      }
    }
  }

  const premiumCardData1 = [{
    key: 1,  
    src: "/assets/premium-page-icons/widgets.png",
    title: "Intelligent widgets",
    caption: "Keep Lively at your fingertips with home screen widgets.",
  }, {
    key: 2,
    src: "/assets/premium-page-icons/daily-feed.png",
    title: "Custom daily feed",
    caption: "Curate the content that shows up in your feed.",
  }, {
    key: 3,
    src: "/assets/premium-page-icons/mood-face.png",
    title: "Draw mood faces",
    caption: "Full power to express your most authentic self.",
  }, {
    key: 4,
    src: "/assets/premium-page-icons/themes.png",
    title: "More themes",
    caption: "Unlock dark mode for a fresh nighttime look.",
  }, {
    key: 5,
    src: "/assets/premium-page-icons/insights.png",
    title: "Advanced insights",
    caption: "Track your schedule, habits, and mood over time.",
  }, {
    key: 6,
    src: "/assets/premium-page-icons/tools.png",
    title: "Productivity tools",
    caption: "A focus timer and habit tracker to stay in the flow.",
  }, {
    key: 7,
    src: "/assets/premium-page-icons/face-id.png",
    title: "Face ID and passcode",
    caption: "Full protection for your thoughts and plans.",
  }, {
    key: 8,
    src: "/assets/premium-page-icons/uploads.png",
    title: "Upload anything",
    caption: "Insert multiple images and video into your journal.",
  }]
const premiumCardData2 = [{
    key: 1,  
    src: "/assets/premium-page-icons/spaces.png",
    title: "Unlimited spaces",
    caption: "You choose how to organize different aspects of your life.",
  }, {
    key: 2,
    src: "/assets/premium-page-icons/stickers.png",
    title: "Stickers!",
    caption: "Get Premium-exclusive stickers to use in iMessage.",
  }]
const premiumCardData3 = [{
    key: 1,  
    src: "/assets/premium-page-icons/spaces.png",
    title: "Unlimited spaces",
    caption: "You choose how to organize different aspects of your life.",
  }, {
    key: 2,
    src: "",
    title: "",
    caption: "",
  },    
  {
    key: 3,
    src: "/assets/premium-page-icons/stickers.png",
    title: "Stickers!",
    caption: "Get Premium-exclusive stickers to use in iMessage.",
  }]

  const thingArray1 = premiumCardData1.map(item =>
    width > 700 ? <PremiumPageCard
      src={process.env.PUBLIC_URL + item.src}
      title={item.title}
      caption={item.caption}
      key={item.key}
    /> : 
    <div style={{...flexRowToColumn(), ...marginLeft()}} key={item.key}>
      <img
        src={process.env.PUBLIC_URL + item.src}
        style={{...styles.premiumIcons, ...imageControl()}}
        alt={item.title}
      />
      <div style={featureCaptionWidthControl()}>
        <p className="h4">
          {item.title}
        </p>
        <p className="p" style={styles.p}>
          {item.caption}
        </p>
      </div>
    </div>
  )
  const thingArray2 = premiumCardData2.map(item =>
    width > 700 ? <PremiumPageCard
      src={process.env.PUBLIC_URL + item.src}
      title={item.title}
      caption={item.caption}
      key={item.key}
    /> : 
    <div style={{...flexRowToColumn(), ...marginLeft()}} key={item.key}>
      <img
        src={process.env.PUBLIC_URL + item.src}
        style={{...styles.premiumIcons, ...imageControl()}}
        alt={item.title}
      />
      <div style={featureCaptionWidthControl()}>
        <p className="h4">
          {item.title}
        </p>
        <p className="p" style={styles.p}>
          {item.caption}
        </p>
      </div>
    </div>
  )
  const thingArray3 = premiumCardData3.map(item => {
    if (item.title === "") {
      return <div key={item.key}></div>
    } else {
      return <PremiumPageCard src={process.env.PUBLIC_URL + item.src} title={item.title} caption={item.caption} key={item.key} />
    }
  })

  return (
    <div style={styles.container}>
      <div style={{...styles.blueContainer, ...paddingControl()}}>
        <div style={widthControl()}>
          {width > 900 && <img style={shipImageControl()}
            src={process.env.PUBLIC_URL + "/assets/lively-ship.png"}
            alt={"Ship with crown symbol"}
          />}
          <div style={{...styles.textWrap}}>
            <p style={{...styles.hSpace, ...h1Control()}}>
              Life is better with Lively Premium
            </p>
            <p style={h5Control()}>
              The Lively experience you love, 
              but <span style={styles.emphasizedBlue}>a 
              whole lot sparklier.</span>
            </p>

            <div style={topButtonControl()}>
              <Link to="/lively/signup" className={width > 500 ? "get-premium-container" : "catchline-get-premium-container"}>
                <div style={{...styles.contentWrapper, marginLeft: "1rem", marginRight: "1rem"}}>
                  <p className="p">$69.99 per year</p>
                  {width > 500 && <p style={styles.discountOffer}>16% off</p>}
                </div>
              </Link>
              <Link to="/lively/signup" className="get-premium-container" style={{...buttonSpacingControl(), maxWidth: "14.16rem", minWidth: "14.16rem"}}>
                <div className="p" style={{marginLeft: "1rem", marginRight: "1rem", display: "flex"}}>
                  <p>$6.99 per month</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div style={{...styles.whiteContainerColumn, ...paddingControl()}}>
        <div style={styles.contentWrapper2}>
          <p style={{...styles.text, ...h2Control(), marginBottom: "2rem"}}>
            Why choose <span style={styles.emphasizedBlue}>Premium</span>
          </p>
          <p style={{...styles.text, marginBottom: "4rem", maxWidth: "52rem"}} className="p">
            Lively Premium comes with all these exclusive perks 
            for more control, more flexibilty, and better organization.
          </p>
          <div className={gridColumnControl()}>
            {thingArray1}
            {width <= 1400 && width > 1000 && thingArray3}
          </div>
          {(width > 1400 || width <= 1000) && <div className={gridColumnControl2()} style={width > 1000 ? {marginTop: "6rem"} : {marginTop: "4rem"}}>
            {thingArray2}
          </div>}
        </div>
        
        <div style={{...styles.contentWrapper2, ...marginTopControl()}}>
          <p style={{...styles.text, ...h2Control(), ...styles.hSpace}}>
            It's time to start cruising through life with Lively Premium
          </p>
          <p style={styles.text} className="p">
            (Available in the iPhone app via in-app purchases)
          </p>
          <div style={bottomButtonControl()}>
            <Link to="/lively/signup" className={width > 500 ? "get-premium-container" : "catchline-get-premium-container"}>
              <div style={{...styles.contentWrapper, marginLeft: "1rem", marginRight: "1rem"}}>
                <p className="p">$69.99 per year</p>
                {width > 500 && <p style={styles.discountOffer}>16% off</p>}
              </div>
            </Link>
            <Link to="/lively/signup" className="get-premium-container" style={{...bottombuttonSpacingControl(), maxWidth: "14.16rem", minWidth: "14.16rem"}}>
              <div className="p" style={{marginLeft: "1rem", marginRight: "1rem"}}>
                <p>$6.99 per month</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div style={styles.grayContainerRow}>
        <div style={{...reverseWidthControl(), ...paddingControl()}}>
          <div style={styles.textWrap}>
            <p style={{...styles.hSpace, ...h1Control()}}>
              Get just the essentials with Lively Plus
            </p>
            <p style={h5Control()}>
              Lively Plus sticks to the basic add-ons: widgets, themes, advanced 
              insights, and unlimited spaces for more customizability.
            </p>

            <div style={topButtonControl()}>
              <Link to="/lively/signup" className={width > 500 ? "get-premium-container" : "catchline-get-premium-container"}>
                <div style={{...styles.contentWrapper, marginLeft: "1rem", marginRight: "1rem"}}>
                  <p className="p">$39.99 per year</p>
                  {width > 500 && <p style={styles.discountOffer}>16% off</p>}
                </div>
              </Link>
              <Link to="/lively/signup" className="get-premium-container" style={{...buttonSpacingControl(), maxWidth: "14.16rem", minWidth: "14.16rem"}}>
                <div className="p" style={{marginLeft: "1rem", marginRight: "1rem", display: "flex"}}>
                  <p>$3.99 per month</p>
                </div>
              </Link>
            </div>
          </div>

          <img
            style={boatImageControl()}
            src={process.env.PUBLIC_URL + "/assets/crowned-lively.png"}
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
    paddingTop: "0.25rem",
    paddingLeft: "0.6rem",
    paddingRight: "0.6rem",
    borderRadius: "5rem",
  },
  emphasizedBlue: {
    color: colors.darkBlue,
    fontWeight: "600",
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
  },
  whiteContainerColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  blueContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: colors.superLightBlue,
    justifyContent: "center",
    alignItems: "center",
  },
  grayContainerRow: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: colors.grayBackground,
    justifyContent: "center"
  },
  hSpace: {
    marginBottom: "1rem",
  },
  textWrap: {
    display: "flex",
    flexDirection: "column",
  },
  premiumIcons: {
    maxWidth: "4rem",
    maxHeight: "4rem",
  },
}