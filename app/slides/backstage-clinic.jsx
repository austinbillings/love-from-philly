import React from 'react'
import Link from 'next/link'

import { Icon } from 'arkade/common'
import { ScrollWatcher } from 'arkade/tools'
import { scrollSnap, isMobile } from 'arkade/utils/browser-utils'

export const BackstageClinicSlide = (props = {}) => {
    return (
        <ScrollWatcher
            {...props}
            onCenter={(el) => isMobile() ? null : scrollSnap(el.offsetTop)}
            className="grid-fluid stack items-center justify-center pad-20 text-white"
            style={{ minHeight: '100vh' }}>
            <img alt="Backstage Clinic" src="/circle-backstage-clinic-logo.svg" style={{ width: '400px', maxWidth: '100%' }}/>
            <p className="text-large text-light text-left margin-vertical-50 pad-20" style={{ maxWidth: '600px' }}>
                With the ability to roll into any festival, concert or event, Thirty Amp Circuit’s Backstage Clinicis a pop-up medical center that brings services directly to musicians at their place of work.   We colonize a backstage space, turning it into a cozy, relaxed and experiential health and wellness center.   Artists and their support staff can either drop in or make an appointment in advance.
                <br />
                <br />
                Backstage Clinic visitors may choose from any of our individual services or walk through the Circuit and experience all of our four core offerings.
                <br />
                <Link href="/backstage-clinic">
                    <button className="btn btn-dark text-upper text-bold margin-top-30">Learn more <Icon fa="angle-right margin-left-10"/></button>
                </Link>
            </p>
        </ScrollWatcher>
    )
}
