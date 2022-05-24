import React from 'react'

import { ScrollWatcher } from 'arkade/tools'
import { scrollSnap, isMobile } from 'arkade/utils/browser-utils'

export const MusiciansNeedHelpSlide = (props = {}) => {
    return (
        <ScrollWatcher
            {...props}
            onCenter={(el) => isMobile() ? null : scrollSnap(el.offsetTop)}
            className="stack items-center justify-center text-white"
            style={{ minHeight: '120vh' }}>
            <div className="grid-fluid row items-center text-large">
                <div className="stack xs-12 md-6 md-offset-6 text-left items-start pad-30">
                    <h2 className="text-light pad-left-0 pad-vertical-30 text-blue">Musicians <b>need</b> our help.</h2>
                    <p style={{ maxWidth: '600px' }} className="text-medium">
                        With music unions a thing of the past outside of the classical world, <span className="text-blue">over 1 million musicians young and old in the United States remain work-for-hires or self-employed artists.</span> Crossing all demographics, musicians, and those who support them, struggle to afford health care while they also exist in unhealthy working conditions, such as constant touring, and lifestyles that further compound an already precarious health and wellness balance in their lives.
                    </p>
                    <p style={{ maxWidth: '600px' }} className="text-light">
                        The situation is profound and the need widespread.  And although pockets of local support systems are set up for working musicians, typically through universities and a smattering of generalized organizations with broad-based initiatives, <span className="text-blue">there is a profound lack of awareness in the general public, and an enormous lack of resources</span> and wasted opportunities to help those who inspire us the most.
                    </p>
                </div>
                <div className="xs-12 sm-4 md-3 self-stretch">
                    {/*<img src="" style={{ maxWidth: '300px', width: '100%' }} alt="A happy, healthy musician behind the scenes at a festival"/>*/}
                </div>
            </div>
        </ScrollWatcher>
    )
}
