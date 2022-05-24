import React, { useState, useEffect } from 'react'

import { ImageBlock } from 'arkade/common'
import { StackLayout, RowLayout } from 'arkade/layouts'
import { DonateButton } from 'app/ui'
import { news } from 'app/content'
import { formatDate } from 'cloq'
import { isMobile as checkIsMobile } from 'arkade/utils/browser-utils'

export const SplashSlide = () => {
    const headerStyle = {
        backgroundImage: `url(/2021/bigblue-dark.jpg)`,
        minHeight: 200,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        alignItems: 'center'
    };

    const [isMobile, setIsMobile] = useState(checkIsMobile());

    useEffect(() => {
        if (process.browser) window.addEventListener('resize', () => setIsMobile(checkIsMobile()));
    }, [false]);


    return (
        <StackLayout className="splash-slide">
            <style>{`
                .splash-slide a {
                    text-decoration: underline;
                }
            `}</style>
            <RowLayout style={headerStyle}>
                <RowLayout className="grid" style={{ padding: '10px 30px', margin: '0 auto', width: '100%', justifyContent: isMobile ? 'center' : 'space-between' }}>
                    <div style={{ margin: '0 auto', alignSelf: 'stretch', textAlign: 'center' }}>
                        <img src="/logo-white.png" style={{ maxWidth: 300, flex: 0, margin: isMobile ? '30px 0 30px 50px' : '0 auto' }}/>
                    </div>
                    <div style={{ flex: 1 }}> </div>
                    <div className="text-center" style={{ marginBottom: isMobile ? '80px' : '0' }}>
                        <DonateButton />
                        <p className="text-muted text-x-small">30Amp Circuit is a PA-registered 501c3 Non-Profit</p>
                    </div>
                </RowLayout>
            </RowLayout>

            <p className="text-engraved text-white text-center" style={{ marginTop: -60 }}>
                Latest News
            </p>

            <div className="quantized pad-0" style={{ marginTop: -10, marginLeft: 'auto', marginRight: 'auto', marginBottom: -30, boxShadow: '0 0 20px rgba(0, 0, 0, 0.4)' }}>
                {news.map((post, index) => (
                    <div className={`row text-black items-stretch margin-bottom-${index === news.length - 1 ? 0 : 20}`} key={post.title} style={{ background: 'linear-gradient(#ffffff, #f0f0f0)' }}>
                        <div className="xs-12 md-3 pad-0">
                            <ImageBlock src={post.image.url} style={{ backgroundPosition: post.image.position, width: '100%', height: '100%', margin: 0, minHeight: 200 }}/>
                        </div>
                        <article className="xs-12 md-9">
                            <h4>{post.title}</h4>
                            <div dangerouslySetInnerHTML={{ __html: post.content }}/>
                            <p className="text-engraved margin-top-30">Posted {formatDate(post.posted, 'full-years')}</p>
                        </article>
                    </div>
                ))}

            </div>
        </StackLayout>
    )
}
