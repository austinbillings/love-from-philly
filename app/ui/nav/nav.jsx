import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import './nav.scss';
import { siteMap } from 'app/content';

export const Nav = ({ className = '', style = {} }) => {
    const router = useRouter();

    return (
        <menu className={`site-nav ${className}`} style={{ padding: 0, ...style }}>
            {siteMap.filter(page => !page.hidden).map((page, index) => (
                <Link
                    key={index}
                    href={page.url}>
                    <a
                        title={page.name}
                        className={`site-nav--link ${router.pathname === page.url ? 'active' : ''} ${page.prominent ? 'prominent' : ''}`}>
                        <nobr>{page.name}</nobr>
                    </a>
                </Link>
            ))}
        </menu>
    );
}
