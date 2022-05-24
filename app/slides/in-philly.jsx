import React from 'react';

import { ScrollWatcher } from 'arkade/tools'
import { scrollSnap, isMobile } from 'arkade/utils/browser-utils'

export const InPhillySlide = (props = {}) => (
    <ScrollWatcher
        {...props}
        style={{ minHeight: '100vh', padding: '5vh 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        onCenter={(el) => isMobile() ? null : scrollSnap(el.offsetTop)}>
        <div className="grid stack items-center">
            <img src="/in-philly.svg" alt="30 Amp Circuit in Philadelphia" style={{ width: '900px', maxWidth: '90%' }}/>
            <div className="row pad-vertical-50">
                <div className="xs-12 sm-4 lg-offset-1 pad-20">
                    <img src="/logo-30amp-philly.png" alt="30 Amp Philly logo" style={{ maxWidth: '100%' }} />
                </div>
                <div className="xs-12 sm-8 lg-7 pad-30 text-large">
                    <p className="text-medium text-blue" style={{ maxWidth: '100%' }}>
                        While 30Amp prides itself on its international reach, we continue to act locally as well with our Philly initiative.
                    </p>
                    <p className="text-medium" style={{ maxWidth: '100%' }}>
                        In addition to various community outreach programs and events, 30Amp is creating Philly’s first brick and mortar musicians’ clinic which will be expanded to serve artists of all mediums and host a holistic care unit that teaches supplemental health practices including mindfulness, yoga, nutrition, and personal care.
                    </p>
                    <p className="text-medium" style={{ maxWidth: '100%' }}>
                        30amp has been following the model of our mentors at the New Orleans Musicians Clinic.  With strong local support from the medical and professional world we look forward to this dream coming true.
                    </p>
                </div>
            </div>
        </div>
    </ScrollWatcher>
)
