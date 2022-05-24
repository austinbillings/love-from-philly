import React from 'react'
import { Icon } from 'arkade/common'

export const DonateButton = ({ accent = 'primary-dark', size = 'normal' }) => (
    <a
        target="_blank"
        className="self-center pad-vertical-20"
        href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=AUH2XANK4J9YU&source=url"
        onClick={() => ReactGA.event({ category: 'Donate Page', action: 'PayPal donation link' })}>
        <button className={`btn btn-${accent} font-heading text-${size}`}>
            <Icon fa={'lock'} className="icon-left"/>
            <b>Contribute Now</b> via <b>PayPal</b>
        </button>
    </a>
);
