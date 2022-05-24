import React from 'react';

import './donation-card.scss';
import { Icon } from 'arkade/common';
import { DonateButton } from '../donate-button'

export const DonationCard = ({ photo, name, title, id, children } = {}) => {
    return (
        <div className="donation-card">
            <div className="donation-card-inner">
                {!photo ? null : (
                    <div
                        className="donation-photo"
                        children={' '}
                        style={{ backgroundImage: `url(${photo.url})`, backgroundPosition: photo.align }}
                    />
                )}
                <div className="donation-content">
                    <h2
                        className={`donation-title ${title ? '' : 'donation-title-small'}`}
                        children={title || <span><small>Donate for</small> {name}</span>}
                    />
                    <div className="donation-text">{children}</div>
                    <div className="donation-cta stack">
                        <div className="donation-text">
                            <p>
                                <small>Paypal accepts these cards & more.</small>
                            </p>
                            <p>
                                <big>
                                    <Icon fa="cc-visa"/>
                                    <Icon fa="cc-discover"/>
                                    <Icon fa="cc-amex"/>
                                    <Icon fa="cc-paypal"/>
                                    <Icon fa="cc-diners-club"/>
                                    <Icon fa="cc-mastercard"/>
                                </big>
                            </p>
                            <p>
                                <small><nobr>Thirty Amp Circuit</nobr> is a registered <nobr>501<small>(c)(3)</small> non-profit.</nobr></small>
                            </p>
                        </div>

                        <DonateButton/>
                    </div>
                </div>
            </div>
        </div>
    );
};
