import React from 'react';

import './footer.scss';
import { Nav } from '../nav/nav';
import { SocialNav } from '../social-nav';

export const Footer = ({}) => {
    return (
        <footer className="site-footer">
            <div className="site-footer--content">
                <section className="site-footer--brand">
                    <a href="https://30amp.org">
                        <img
                            alt="30 Amp Circuit logo"
                            src="/logo-white.svg"
                            style={{ width: '220px' }}
                        />
                    </a>
                    <p className="site-footer--legal">
                        &copy; 2017 – 2022 Thirty Amp Circuit, LLC.
                        <br />
                        &reg; All rights reserved
                    </p>
                </section>
                {/* <section className="site-footer--nav">
                    <Nav />
                </section> */}
            </div>
        </footer>
    )
}
