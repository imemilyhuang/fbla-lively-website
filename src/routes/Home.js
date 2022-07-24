import React from "react"

const Home = () => {
  return (
    <div className="container">
      <text style={styles.catchlineTitle}>
        Insert catchline title.
      </text>
      <text style={styles.catchlineDescription}> 
        Insert catchline description. Insert catchline description. 
        Insert catchline description.
      </text>
    </div>
  )
}

export default Home

let styles = {
  catchlineTitle: {
    marginBottom: "2rem",
    fontSize: "3rem",
    fontWeight: 500,
  },
  catchlineDescription: {
    fontSize: "1.2rem",
  },
}