import React, { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import colors from "../../colors"
import { doc, getDoc } from "firebase/firestore"
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { db } from "../../firebase"
import useWidth from "../../useWidth";

const Account = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    const favicon = document.getElementById('favicon')
    favicon.href = "/favicon-lively.ico"
  }, [])
  document.title = "User Dashboard | Lively"

  const width = useWidth()

  const location = useLocation()
  const navigate = useNavigate()

  const [userData, setUserData] = useState({})
  const [profilePicSource, setProfilePicSource] = useState(process.env.PUBLIC_URL + "/assets/default-profile-pic.png")

  useEffect(() => {
    if (location.state===null) {
      navigate("/login")
    } else {
      if (location.state) {
        const docRef = doc(db, "users", location.state);
        getDoc(docRef)
          .then(doc => {
            setUserData(doc.data())
    
            if (doc.data().profilePicPath !== "default") {
              const storage = getStorage();
    
              const pathReference = ref(storage, doc.data().profilePicPath);
              getDownloadURL(pathReference)
                .then(url => setProfilePicSource(url))
                .catch(err => console.log("Error:", err))
            }
          })
          .catch(err => {}) 
      }
    }

   // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [])

  const paddingControl = () => {
    if (width > 900) {
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

  const marginBottomControl = () => {
    if (width > 700) {
      return {
        marginBottom: "4rem",
      }
    } else {
      return {
        marginBottom: "3rem",
      }
    }
  }

  const imageControl = () => {
    if (width > 1100) {
      return {
        width: 550,
        height: 550,
        aspectRatio: 1,
        objectFit: "cover",
      }
    } else {
      return {
        width: width*0.75,
        height: width*0.75,
        aspectRatio: 1,
        objectFit: "cover",
      }
    }
  }

  return (
    <div style={styles.container}>
        <div style={{...styles.blueContainer, ...paddingControl(), textAlign: "center"}}>
            <p className="h4" style={styles.subtitle}>USER DASHBOARD</p>
            <p className="h1">Welcome, {userData.name}</p>
        </div>

        <div style={{...styles.whiteContainer, ...paddingControl()}}>
        <div style={styles.container2}>
            <img
                style={{...imageControl(), ...marginBottomControl(), ...styles.profilePic}}
                src={profilePicSource}
                alt={"Profile"}
            />
            <p className="h4" style={styles.subtitle}>USERNAME</p>
            <p style={{...marginBottomControl()}} className="h5">
                @{userData.username}
            </p>

            <p className="h4" style={styles.subtitle}>EMAIL</p>
            <p style={{...marginBottomControl()}} className="h5">
                {userData.email}
            </p>

            <p className="h4" style={styles.subtitle}>DOWNLOAD</p>
            <p style={{...marginBottomControl(), textAlign: "center"}} className="h5">
                To use Lively and manage your account, download the app!
            </p>
        </div>
      </div>
    </div>
  )
}

export default Account

let styles = {
    container: {
        display: "flex",
        flexDirection: "column",
    },
    container2: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "76rem",
    },
    blueContainer: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: colors.superLightBlue,
        alignItems: "center",
    },
    whiteContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    subtitle: {
        color: colors.darkBlue,
        marginBottom: "1rem",
    },
    profilePic: {
        borderRadius: "50rem",
    },
    bigSpaceAbove: {
        marginTop: "3rem",
    },
    spaceAbove: {
        marginTop: "1rem",
    },
}