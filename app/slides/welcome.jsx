import React from 'react';

import { Icon } from 'arkade/common'
import { ScrollWatcher } from 'arkade/tools'
import { CentralLayout } from 'arkade/layouts'
import { scrollSnap, isMobile } from 'arkade/utils/browser-utils'

import { RWJAwardBox } from 'app/ui'

export const WelcomeSlide = (props = {}) => {
    return (
        <ScrollWatcher {...props}>
            <CentralLayout style={{ minHeight: '100vh', paddingTop: '120px' }}>
                <div className="row items-center text-white pad-20" style={{ marginTop: '-120px' }}>
                    <img src="/logo-icon-white.png" alt="30 Amp Circuit logo" style={{ width: '270px', maxWidth: '40%', padding: '35px', margin: '10px 20px' }}/>
                    <div className="stack items-start text-large">
                        <img src="/welcome.png" alt="Welcome to 30 Amp Circuit" style={{ width: '500px', maxWidth: '80vw' }} className="self-stretch"/>
                        <div style={{ width: '600px', maxWidth: '80vw', marginTop: '40px' }}>
                            <h6 className="text-engraved">Mission Statement</h6>
                            <p>30Amp is a non-profit organization formed in 2018 as a <b>Pennsylvania 501c3</b> dedicated to the health, wellness, and professional needs of musicians and artists of all mediums.</p>

                            <h6 className="text-engraved">Vision Statement</h6>
                            <p>Global in nature, local by practice, our vision includes supporting Philadelphia-based musicians and artists, serving the overall cultural and artistic well-being of the city, and empowering the next generation of local talent.</p>

                            <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=AUH2XANK4J9YU&source=url" target="_blank">
                                <button className="btn btn-primary">
                                    <Icon fa={'lock'} className="icon-left"/>
                                    <b>Donate Now</b> via <b>PayPal</b>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </CentralLayout>
        </ScrollWatcher>
    )
}
