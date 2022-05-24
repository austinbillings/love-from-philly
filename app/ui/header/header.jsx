import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import './header.scss'
import { Nav } from '../nav/nav'
import { SocialNav } from '../social-nav'
import { isMobile as checkIsMobile } from 'arkade/utils/browser-utils';
import { Icon } from 'arkade/common';
import { ScrollWatcher } from 'arkade/tools';

export const Header = ({ hideLogo = false, hideSocialNav = false, inverted = false }) => {
    const [isNavDrawerVisible, setIsNavDrawerVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(checkIsMobile());
    const isScrolledPastNavbar = process.browser ? Math.abs(document.body.getBoundingClientRect().top) > 300 : false;
    const [isStickyVisible, setStickyVisible] = useState(isScrolledPastNavbar);

    const toggleNavVisibility = () => isNavDrawerVisible ? hideNavDrawer() : showNavDrawer();

    const clickHandler = (evt) => {
        var target = evt.target;
        var parentIsNavDrawer = false;

        while (target && target.parentElement !== target && !parentIsNavDrawer) {
            if (target.classList) parentIsNavDrawer = Array.from(target.classList).includes('nav-drawer');
            target = target.parentElement;
        }

        if (isNavDrawerVisible && !parentIsNavDrawer) hideNavDrawer();
    };

    const showNavDrawer = () => {
        setTimeout(() => setIsNavDrawerVisible(true));

        if (process.browser) {
            setTimeout(() => window.addEventListener('click', clickHandler));
        }
    }

    const hideNavDrawer = () => {
        setTimeout(() => setIsNavDrawerVisible(false));

        if (process.browser) {
            setTimeout(() => window.removeEventListener('click', clickHandler))
        }
    }

    useEffect(() => {
        if (process.browser) window.addEventListener('resize', () => checkIsMobile() === isMobile);
    }, [false]);

    const NavBar = ({ className = '', bgColor = 'rgba(20,20,20,0.7)', children }) => (
        <div className={className} style={{ backgroundColor: bgColor }}>
            <div className="grid items-end justify-end justify-between items-center">
                {children || <span/>}
                <section className="header-nav">
                    <div className="xs-hide sm-hide">
                        <Nav className="text-white" />
                    </div>
                </section>
            </div>
        </div>
    )

    return (
        <React.Fragment>
            <header className={`site-header ${inverted ? 'inverted' : ''}`} style={{ minHeight: 50, position: 'relative', zIndex: 1000 }}>
                <div className="grid row justify-between items-center" style={{ width: '100%', margin: '5px auto 0' }}>
                    <section className="site-header--brand xs-12 md-10">
                        {hideLogo ? null : (
                            <Link href="/home">
                                <img
                                    alt="30 Amp Circuit logo"
                                    src={inverted ? '/logo-white.svg' : '/logo-white.svg'}
                                    style={{ width: '250px', maxWidth: '73%', cursor: 'pointer', margin: '10px auto 10px' }}
                                />
                            </Link>
                        )}
                    </section>


                    <div className="nav-drawer"
                        style={{
                            position: 'fixed',
                            top: 0,
                            transition: 'all 0.5s',
                            width: '200px',
                            pointerEvents: isNavDrawerVisible ? 'all' : 'none',
                            right: isNavDrawerVisible ? 0 : '-240px',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100vh',
                            transform: 'scale(1)',
                            overflow: 'auto',
                            backgroundColor: 'rgba(0, 0, 0, 0.9)',
                            zIndex: 120000,
                            borderLeft: '1px solid rgba(255,255,255,0.3)',
                            justifyContent: 'center'
                        }}>
                        <Icon fa="close text-x-large pad-20 clickable" onClick={hideNavDrawer} />
                        <Nav style={{flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-end'}}/>
                    </div>
                    <div className="_sm-show md_-hide" style={{ position: 'fixed', right: 20, top: 15, zIndex: 40000 }}>
                        <Icon
                            fa="navicon pad-10 text-x-large clickable"
                            onClick={showNavDrawer}
                        />
                    </div>

                    {hideSocialNav ? null : <SocialNav/>}
                </div>
            </header>
            <ScrollWatcher onLeaveStart={() => setStickyVisible(true)} onEnterStart={() => setStickyVisible(false)}>
                <NavBar/>
            </ScrollWatcher>
            {!isStickyVisible ? null : (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 20000 }}>
                    <NavBar bgColor="rgba(20, 20, 20, 0.95)" className="text-med-light-grey">
                        <a href="/">
                            <img
                                alt="30 Amp Circuit logo"
                                className="xs-hide sm-hide"
                                src={'/logo-white.svg'}
                                style={{ width: '200px', cursor: 'pointer', margin: '10px 15px 15px', display: 'inline-block' }}
                            />
                        </a>

                        <div className="_sm-show md_-hide" style={{ position: 'fixed', right: 20, top: 10, zIndex: 40000 }}>
                            <Icon
                                fa="navicon pad-10 text-white text-x-large clickable"
                                onClick={toggleNavVisibility}
                            />
                        </div>
                    </NavBar>
                </div>
            )}
        </React.Fragment>
    )
}
