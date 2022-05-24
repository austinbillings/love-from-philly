import React from 'react'

import { DirectorsSlide } from './founders'

export const AboutSlideOLD = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '5vh 20px', justifyContent: 'center' }}>

                <img
                    src="/logo-icon-black.png"
                    alt="30 Amp Logo"
                    style={{ width: '220px', margin: '2em 30px' }}
                />

                <h1>About Us</h1>

                <article className="background-black text-white" style={{ maxWidth: '700px', margin: '2em auto' }}>
                    <p className="text-medium" style={{ lineHeight: '190%' }}>
                        With music unions a thing of the past (outside of the Classical world), over 1 million musicians young and old in the United States remain work-for-hires or self-employed artists.
                        <br/><br/>
                        Across all demographics, musicians and those who support them struggle to afford health care while simultaneously being subject to unhealthy working conditions such as constant touring, long performances sometimes subject to the elements, and lifestyles that further compound an already precarious health and wellness balance in their lives.
                    </p>
                    <p className="text-medium" style={{ lineHeight: '190%' }}>
                        The situation is profound and the need widespread.  And although pockets of local support systems are set up for working musicians, typically through universities and a smattering of generalized organizations with broad-based initiatives, there is a profound lack of awareness in the general public, and an enormous lack of resources and wasted opportunities to help those who inspire us the most.
                    </p>
                </article>

                <article className="background-black text-white" style={{ maxWidth: '700px', margin: '2em auto' }}>
                    <h3 className="margin-0"><span className="text-teal">Thirty Amp Circuit</span> helps musicians through:</h3>
                    <ul className="pad-left-5 text-large">
                        <li className="text-italic">
                            <a className="text-bold text-teal" href="/backstage-clinic">Backstage Clinics</a> - bringing health and wellness to musicians and those who support them, at their place of work.
                        </li>
                        <br/>
                        <li className="text-italic">
                            <a className="text-bold text-teal" href="/centerstage-events">Center Stage Events</a> - banding musicians together to raise awareness and funding for the healthcare plight of those who inspire us through their art.
                        </li>
                    </ul>
                    <br/>
                    <p className="text-medium">
                        This is only the beginning! <b>Founded by a music industry veteran, a celebrated doctor, and one of the most important musicians of our time</b>, we are a small non-profit that thinks big.
                    </p>
                </article>

                <DirectorsSlide />
            </div>
        );
}
