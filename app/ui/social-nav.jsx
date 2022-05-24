import React from 'react'

import config from 'config'
import { SocialIcon } from 'arkade/common'
import { networkMapToList } from 'arkade/utils/social-utils'

const { SOCIAL_LINKS } = config

const socialLinks = networkMapToList(SOCIAL_LINKS);

export const SocialNav = () => {
    return (
        <menu className="site-social-nav" style={{ paddingLeft: 0 }}>
            {socialLinks.map(props => <SocialIcon key={props.networkName} {...props}/>)}
        </menu>
    )
}
