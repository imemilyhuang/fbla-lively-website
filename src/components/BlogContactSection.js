import React from "react"
import colors from "../colors"
import useWidth from "../useWidth"

const BlogContactSection = () => {
  const width  = useWidth()

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

  return (
    <div style={styles.container}>
        <p className="h3" style={marginTopControl()}>Contact us</p>
        <p className="p" style={{...styles.space1Above}}>
            We'd love to hear all the feedback, burning questions, and brilliant 
            ideas you have to share! If your message is related to the Lively 
            app specifically, contact lively@bubblystudios.com. Otherwise, shoot 
            us a message at contact@bubblystudios.com.
        </p>
        <p className="p" style={{...styles.space1Above, marginBottom: "3rem"}}>
            Thank you for being here, and we hope to see you again soon! 💙
        </p>
    </div>
  )
}

export default BlogContactSection

let styles = {
  container: {
    display: "flex",
    flexDirection: "column",
  },
  subtitle: {
    color: colors.darkGray,
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