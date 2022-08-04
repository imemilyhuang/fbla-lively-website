import React from "react"

const Terms = () => {
  return (
    <div className="container">
      <div style={styles.catchlineContainer}>
        <p style={styles.catchlineTitle}>
          Insert catchline title.
        </p>
        <p style={styles.catchlineDescription}> 
          Insert catchline description. Insert catchline description. 
          Insert catchline description. Insert catchline description.
        </p>
      </div>
    </div>
  )
}

export default Terms

let styles = {
  catchlineContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  catchlineTitle: {
    textAlign: "center",
    marginBottom: "2rem",
    fontSize: "3rem",
    fontWeight: 500,
  },
  catchlineDescription: {
    textAlign: "center",
    fontSize: "1.5rem",
    width: "50rem",
  },
}