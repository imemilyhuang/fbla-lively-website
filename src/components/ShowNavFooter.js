import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ShowNavFooter = (props) => {
    return (
        <>
            <Navbar />
            {props.children}
            <Footer />
        </>
    )
}

export default ShowNavFooter