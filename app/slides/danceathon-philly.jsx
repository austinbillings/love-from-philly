// danceathon-philly.jsx
import React from 'react';

import { ScrollWatcher } from 'arkade/tools'
import { CentralLayout } from 'arkade/layouts'
import { scrollSnap, isMobile } from 'arkade/utils/browser-utils'
import { Icon } from 'arkade/common';

export const DanceathonPhillySlide = (props = {}) => {
    return (
        <ScrollWatcher {...props} onCenter={(el) => isMobile() ? null : scrollSnap(el.offsetTop)}>
            <CentralLayout>
                <div className="grid-fluid items-center" style={{ minHeight: '80vh' }}>
                    <div className="xs-12 md-4 md-offset-1">
                        <img src="/phillyneedsyou.jpg" style={{ maxWidth: '100%', border: '3px solid white'  }}/>
                    </div>
                    <div className="xs-12 md-7 stack items-center justify-center pad-20">
                        <h4 className="text-white text-light">30Amp Proudly Presents:</h4>
                        <img src="/danceonphilly-wide-white.png" style={{ maxWidth: '90%', width: 600 }} alt="DANCE ON PHILLY" />
                        <h4 className="text-white text-light">6PM - 12AM :: November 14, 2020</h4>
                        <p className="text-regular text-center text-large text-white margin-top-30" style={{ maxWidth: 600, fontWeight: 400 }}>
                            <b class="text-black">THREE DIFFERENT WAYS TO GET INVOLVED</b>
                            <h3><span class="text-black">1.</span> MAKE A DONATION TODAY</h3>
                            Contribute to the cause by donating now.<br/>Simple as that. No dancing required.
                            <h3><span class="text-black">2.</span> SIGN UP TO DANCE</h3>
                            Sign Up to Dance, as a team or an individual.
                            <h3><span class="text-black">3.</span> SHARE ON INSTAGRAM</h3>
                            Spread the Word …And watch the show!

                        </p>
                        <a href="http://danceonphilly.com/" target="_blank">
                            <button className="btn">
                                Visit <b>DanceOnPhilly.com</b> now <Icon fa="chevron-right"/>
                            </button>
                        </a>
                        {/*<a href="/OneSheeter_SmallSize.pdf" target="_blank">
                            <button className="btn btn-ghost">
                                Open the Press Release PDF <Icon fa="info-circle"/>
                            </button>
                        </a>*/}
                    </div>
                </div>
            </CentralLayout>
        </ScrollWatcher>
    )
}
