import React from "react"
import { useNavigate } from "react-router-dom"
import colors from "../colors"
import useWidth from "../useWidth"

const Error = () => {
  const navigate = useNavigate()
  const [backStyle, setBackStyle] = React.useState(styles.backp)

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  document.title = "Page Not Found | Lively"

  const width = useWidth()

  const widthControl = () => {
    if (width > 1200) {
      return {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }
    } else {
      return {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
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

  const marginRightControl = () => {
    if (width > 1280) {
      return {
       marginRight: "8rem",
      }
    } else if (width > 1200) {
        return {
         marginRight: "4rem",
        }
    } else {
      return {
        marginRight: 0,
      }
    }
  }

  const description = () => {
    if (width > 1200) {
      return {
        maxWidth: "24rem",
        marginBottom: "2rem",
      }
    } else {
      return {
        maxWidth: "100%",
        marginBottom: "2rem",
      }
    }
  }

  const image = () => {
    if (width > 1200) {
      return {
        objectFit: "contain",
        width: "100%",
        height: "100%",
        maxWidth: "35rem",
        maxHeight: "20rem",
        margin: 0,
      }
    } else {
      return {
        maxWidth: "100%"
      }
    }
  }

  return (
    <div style={{...styles.container, ...paddingControl()}}>
      <div style={widthControl()}>
        <div style={{...styles.titleContainer, ...marginRightControl()}}>
          <p style={{...styles.title}} className="h2">
            Uh oh! You look lost.
          </p>
          <p className="p" style={description()}> 
            We couldn't find the page you were looking for. Try 
            going back or navigating somewhere else instead.
          </p>

          <div style={styles.altContainer}>
            <button
              onClick={() => navigate(-1)}
              onMouseOver={() => setBackStyle(styles.backHover)}
              onMouseLeave={() => setBackStyle(styles.backp)}
              style={styles.backButton}
            >
              <p style={backStyle}>Go back</p>
            </button>
          </div>
        </div>

        <img
            src={process.env.PUBLIC_URL + "/assets/404-forklift-cargo.png"}
            style={image()}
            alt="404"
        />
      </div>
    </div>
  )
}

export default Error

let styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  title: {
    marginBottom: "2rem",
  },
  description: {
    maxWidth: "24rem",
    marginBottom: "2rem",
  },
  altContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "4rem",
  },
  backButton: {
    border: "none",
    background: "none",
    cursor: "pointer",
    padding: 0,
  },
  backHover: {
    fontWeight: 500,
    fontFamily: "Jost",
    color: colors.darkBlue,
    fontSize: "1.3rem",
  },
  backp: {
    fontWeight: 500,
    fontFamily: "Jost",
    color: colors.black,
    fontSize: "1.3rem",
  },
}