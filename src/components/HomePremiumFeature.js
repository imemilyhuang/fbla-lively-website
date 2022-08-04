import React from "react"
import colors from "../colors.js"

const HomePremiumFeature = () => {
    return (
        <div>
            <div style={{...styles.premiumFeatureRow, marginBottom: "4rem"}}>
                <div style={styles.premiumFeatureContainer}>
                    <img
                        src={"../assets/premium-homepage-icons/widgets.png"}
                        style={styles.premiumIcons}
                        alt="Premium widgets"
                    />
                    <div style={styles.premiumDescContainer}>
                        <p className="h4">
                            Intelligent widgets and themes
                        </p>
                        <p className="p" style={styles.p}>
                            Keep Lively at your fingertips with 
                            customizable widgets that update throughout 
                            the day, and style the app with a library 
                            of themes.
                        </p>
                    </div>
                </div>
                <div style={styles.premiumFeatureContainer2}>
                    <img
                        src={"../assets/premium-homepage-icons/tools.png"}
                        style={styles.premiumIcons}
                        alt="Premium tools"
                    />
                    <div style={styles.premiumDescContainer}>
                        <p className="h4">
                            Productivity-boosting tools
                        </p>
                        <p className="p" style={styles.p}>
                            Save time while working or studying, and make it more 
                            enjoyable with a sound radio, focus timer, habit 
                            tracker, and more.
                        </p>
                    </div>
                </div>
            </div>
            <div style={styles.premiumFeatureRow}>
                <div style={styles.premiumFeatureContainer}>
                    <img
                        src={"../assets/premium-homepage-icons/insights.png"}
                        style={styles.premiumIcons}
                        alt="Premium insights"
                    />
                    <div style={styles.premiumDescContainer}>
                        <p className="h4">
                            Advanced insights
                        </p>
                        <p className="p" style={styles.p}>
                            Follow currents in your life, and gain insight into 
                            your schedule, habits, and mood over time.
                        </p>
                    </div>
                </div>
                <div style={styles.premiumFeatureContainer2}>
                    <img
                        src={"../assets/premium-homepage-icons/folder.png"}
                        style={styles.premiumIcons}
                        alt="Premium spaces"
                    />
                    <div style={styles.premiumDescContainer}>
                        <p className="h4">
                            Unlimited spaces
                        </p>
                        <p className="p" style={styles.p}>
                            Create and join unlimited spaces to organize different 
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
        marginRight: "2.4rem",
      },
      premiumDescContainer: {
        display: "flex",
        flexDirection: "column",
        maxWidth: "28rem",
      },
      premiumFeatureContainer: {
        display: "flex",
        flexDirection: "row",
        marginRight: "3rem",
      },
      premiumFeatureContainer2: {
        display: "flex",
        flexDirection: "row",
        marginLeft: "3rem",
      },
      premiumFeatureRow: {
        display: "flex",
        flexDirection: "row",
      },
      p: {
          marginTop: "0.6rem",
          color: colors.darkGray,
      },
}