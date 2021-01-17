import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Next TEMPLATE</title>
            </Head>
            <Navbar />
            {children}
        </>
    )
}

export default Layout
