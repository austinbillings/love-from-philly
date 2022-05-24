import React from 'react'

import { DonationCard } from 'app/ui'
import { backgrounds } from 'app/content'

export const DonateSlide = (props = {}) => (
    <div
        {...props}
        className="row items-center justify-around text-white"
        style={{ padding: '100px 10px' }}>
        <div className="margin-10" style={{ boxShadow: '0 0 30px rgba(0, 0, 0, 0.4)', maxWidth: '1100px' }}>
            <DonationCard
                id={'admin'}
                name={'Thirty Amp Circuit'}
                title={'Make a Difference'}
                photo={{ url: '/hands.png', align: 'center 20%' }}>
                <div>
                    <p>Donate directly to Thirty Amp today, and <b>your tax-exempt gift will go directly to benefit all aspects</b> of our Circuit including</p>
                    <ul>
                        <li>Artists Grants</li>
                        <li>Health & wellness programs for Artists and those that work for them. </li>
                        <li>Free Educational programming for the Philly School District; and</li>
                        <li>Free city-wide events:  Love From Philly, Dance Week and The North Philly Summer Fest. </li>
                        <li>Vital operational support. </li>
                    </ul>

                    <p>We exist exclusively on donations from people like you and every penny counts. </p>
                    <p>We thank you for your support. </p>
                </div>
            </DonationCard>
        </div>
    </div>
)
