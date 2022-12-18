import React from "react"
import colors from "../colors.js"
import useWindowDimensions from "../useWindowDimensions"

const HomePremiumFeature = () => {
    const { height, width } = useWindowDimensions()

    const featureFlexControl = () => {
        if (width > 1100) {
            return {
                display: "flex",
                flexDirection: "row",
            }
        } else {
            return {
                display: "flex",
                flexDirection: "column",
            }
        }
    }

    const featureSpacingControl = () => {
        if (width > 1100) {
            return {
                marginLeft: "3rem",
            }
        } else {
            return {
                marginLeft: 0,
            }
        }
    }

    const featureDescriptionWidthControl = () => {
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

    const columnBottomSpacing = () => {
        if (width > 1100) {
            return {
                marginBottom: 0,
            }
        } else {
            return {
                marginBottom: "4rem"
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

    return (
        <div>
            <div style={{...featureFlexControl(), marginBottom: "4rem"}}>
                <div style={flexRowToColumn()}>
                    <img
                        src={process.env.PUBLIC_URL + "/assets/premium-homepage-icons/widgets.png"}
                        style={{...styles.premiumIcons, ...imageControl()}}
                        alt="Premium widgets"
                    />
                    <div style={{...featureDescriptionWidthControl(), ...columnBottomSpacing()}}>
                        <p className="h4">
                            Intelligent widgets and dark mode
                        </p>
                        <p className="p" style={styles.p}>
                            Keep Lively at your fingertips with 
                            customizable widgets, and unlock dark mode 
                            to better suit your late-night activities.
                        </p>
                    </div>
                </div>
                <div style={{...flexRowToColumn(), ...marginLeft()}}>
                    <img
                        src={process.env.PUBLIC_URL + "/assets/premium-homepage-icons/tools.png"}
                        style={{...styles.premiumIcons, ...imageControl()}}
                        alt="Premium tools"
                    />
                    <div style={featureDescriptionWidthControl()}>
                        <p className="h4">
                            Productivity-boosting tools
                        </p>
                        <p className="p" style={styles.p}>
                            Save time while doing anything and live 
                            life to its fullest with a minimalistic focus 
                            timer and habit tracker.
                        </p>
                    </div>
                </div>
            </div>
            <div style={featureFlexControl()}>
                <div style={flexRowToColumn()}>
                    <img
                        src={process.env.PUBLIC_URL + "/assets/premium-homepage-icons/insights.png"}
                        style={{...styles.premiumIcons, ...imageControl()}}
                        alt="Premium insights"
                    />
                    <div style={{...featureDescriptionWidthControl(), ...columnBottomSpacing()}}>
                        <p className="h4">
                            Advanced insights
                        </p>
                        <p className="p" style={styles.p}>
                            Follow currents in your life, and gain insight into 
                            your schedule, habits, and mood over time.
                        </p>
                    </div>
                </div>
                <div style={{...flexRowToColumn(), ...marginLeft()}}>
                    <img
                        src={process.env.PUBLIC_URL + "/assets/premium-homepage-icons/folder.png"}
                        style={{...styles.premiumIcons, ...imageControl()}}
                        alt="Premium spaces"
                    />
                    <div style={featureDescriptionWidthControl()}>
                        <p className="h4">
                            Unlimited spaces
                        </p>
                        <p className="p" style={styles.p}>
                            Create an unlimited number of spaces to organize different 
                            aspects of your life with maximum flexibility.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePremiumFeature

let styles = {
    premiumIcons: {
        maxWidth: "4rem",
        maxHeight: "4rem",
      },
      p: {
          marginTop: "0.6rem",
          color: colors.darkGray,
      },
}