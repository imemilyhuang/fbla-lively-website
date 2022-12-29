import React from 'react'

import Navbar from './Navbar'
import Footer from './Footer'

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