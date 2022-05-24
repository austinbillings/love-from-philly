import React from 'react'
import Head from 'next/head'
import ReactGA from 'react-ga'

import '../../theme.scss'

import appConfig from '../../config'
const { APP_NAME, API_BASE_URL, APP_GA_ID } = appConfig

export const AppBase = ({ children, ...props } = {}) => {
    ReactGA.initialize(APP_GA_ID)

    return (
        <div {...props}>
            <Head>
                <title>{APP_NAME}</title>
                <meta charSet="UTF-8" />
                <link rel="icon" href="/favicon.png" />
                <link rel="stylesheet" href="https://unpkg.com/mansion-ui@2.6.1/dist/mansion.css" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" />
                <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
            </Head>
            {children}
        </div>
    )
}
