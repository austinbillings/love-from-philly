import React, { useState } from 'react'

import { Icon } from 'arkade/common'
import { backgrounds } from 'app/content'
import { useStorage } from 'arkade/hooks'
import { AppBase, Header, Footer, DonateButton } from 'app/ui'

export const MainLayout = ({ children, className, style, headerProps = {}, footerProps = {}, innerStyle = {}, backgroundId = null }) => {
    const [isBannerDismissed, setIsBannerDismissed] = useStorage('dismissedDonationBanner')

    const appBaseStyle = {
        position: 'relative',
        top: 0,
        width: '100vw',
        maxWidth: '100vw',
        zIndex: 100
    }

    const backgroundStyleFor = (styleName) => ({
        background: backgrounds[styleName],
        opacity: styleName === backgroundId ? 1 : 0,
        transition: 'opacity 1s',
        position: 'fixed',
        zIndex: 50,
        top: 0,
        left: 0,
        pointerEvents: 'none',
        width: '100vw',
        height: '100vh'
    })

    return (
        <div className={className || 'layout main-layout'} style={style || {}}>
            <div className="background-set-container">
                {Object.keys(backgrounds).map(styleName => <div key={styleName} name={styleName} style={backgroundStyleFor(styleName)} />)}
            </div>
            <AppBase style={appBaseStyle}>
                {/* <Header {...headerProps} style={{ ...headerProps.style,  }} /> */}
                <main className="site-content" style={{ minHeight: '90vh', ...innerStyle }}>
                    {children}
                </main>
                <Footer {...footerProps} />
            </AppBase>
        </div>
    )
}
