import { Fragment } from 'react'

import { Icon } from 'arkade/common'
import { reverse, sortBy } from 'arkade/utils/list-utils'

import { MainLayout } from 'app/layouts'
import { Night } from 'app/ui'
import { ProductDetailPanel } from 'app/ui'

const LoveFromPhillyView = ({ }) => {
    const aspects = [
        {
            name: 'Music',
            content: (
                <p>
                    An eclectic display of our city’s best in show.  From Gospel to Hip-Hop, Jazz to Pop. Plus Philly’s top DJs and hosts and a family dance party to boot.
                </p>
            ),
            icon: '/2022/icon-music.png'
        },
        {
            name: 'Film',
            content: (
                <p>
                    A partnership with the <b>Philly Indie Film Fest</b> has us hosting their <b>15th year!</b><br/>
                    Be immersed in our screening rooms where films are accompanied by live performances of the score.
                </p>
            ),
            icon: '/2022/icon-film.png'
        },
        {
            name: 'Art',
            content: (
                <p>
                    For sale in the <b>Farm to Table Philly Marketplace</b> featuring some of Philly’s brightest creators,  on display at the <b>Graffiti Corner</b>.
                </p>
            ),
            icon: '/2022/icon-art.png'
        },
        {
            name: 'Food',
            content: (
                <p>
                    The finest in Philly’s food trucks + Pretzel People & Water Ice Guys. Plus a Beer Garden filled with local brews and more.
                </p>
            ),
            icon: '/2022/icon-food.png'
        }
    ]

    return (
        <MainLayout background="sherbert">
            <Night />
            <div className="stack">
                <div className="stack items-center justify-start text-white pad-30 pad-bottom-30" style={{ zIndex: 200 }}>
                    <span className="text-engraved text-small text-white margin-bottom-10 text-center" style={{ fontWeight: 500, opacity: 1 }}>
                        30 AMP CIRCUIT IS PROUD TO ANNOUNCE
                    </span>

                    <div className="row items-center">
                        <img src="/LFP-EditedLogo-01.png" style={{ maxWidth: '90vw', width: '500px' }} />
                    </div>
                    <h1 className="text-thin" style={{ padding: 0, margin: 0, marginBottom: 5, fontSize: 'calc(20px + 5vw)', textShadow: '0 0 50px rgba(255,20,30,0.9), 0 10px 30px rgba(255,12,13,0.3), 0 0 50px rgba(100,100,100,0.9)' }}>2022</h1>
                </div>
                <div ariaHidden={true} className="row justify-center" style={{ width: '100%', flexWrap: 'nowrap', height: '40vh', position: 'relative', zIndex: -1 }}>
                    <div className="background-black self-stretch grow-1" style={{ borderTopRightRadius: '3vh', borderTop: '1px solid #05a4db', borderRight: '1px solid #d62929' }}> </div>
                    <img src={'/2022/skyline.png'} style={{ width: 992, margin: '0 auto 0px', flex: '0 1 992px' }}/>
                    <img src="/2022/ben-june.png" style={{ width: 'auto', height: '100%', maxHeight: '60vh', maxWidth: '100vw', top: '0', position: 'absolute'  }}/>
                    <div className="background-black self-stretch grow-1" style={{ borderTopLeftRadius: '3vh', borderTop: '1px solid #05a4db', borderLeft: '1px solid #d62929' }}> </div>
                </div>
            </div>
            <div className="background-black text-white text-center pad-15">
                <h1 className="text-upper" style={{lineHeight:'1em'}}>Saturday, <nobr>June 11<sup>th</sup></nobr></h1>
                <h3 className="text-upper pad-top-0" style={{lineHeight:'1em'}}>FREE at the Ben Franklin Parkway</h3>
                <h3 className="text-upper pad-top-0 text-primary" style={{lineHeight:'1em'}}>12:00 <small>PM</small> - 8:00 <small>PM</small></h3>
                <h4 className="text-gold text-light margin-bottom-30 pad-0">
                    A full day of arts, music and Philadelphian culture
                </h4>
                <div className="stack items-center margin-bottom-50">
                    {aspects.map(aspect => (
                        <div className="row items-center margin-vertical-20" style={{ width: '100%', maxWidth: '800px', flexWrap: 'nowrap' }}>
                            <img src={aspect.icon} style={{ flex: '0 0 80px', width: 80, margin: '0 20px' }}/>
                            <div className="stack items-start text-left flex-1">
                                <h2 className="text-gold pad-0">{aspect.name}</h2>
                                <div style={{ whiteSpace: 'normal', maxWidth: '100%' }}>{aspect.content}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="background-sherbert">
                <h3 className="text-center text-upper text-white margin-vertical-30">Featuring</h3>
                <div className="stack text-upper text-center font-heading text-bold pad-bottom-30">
                    <nobr style={{ lineHeight: '1.1em', fontSize: 'calc(8px + 3.5vw)' }}>Rich Medina • Cosmo Baker</nobr>
                    <nobr style={{ lineHeight: '1.1em', fontSize: 'calc(8px + 3.6vw)' }}>West Philly Orchestra</nobr>
                    <nobr style={{ lineHeight: '1.1em', fontSize: 'calc(8px + 2.4vw)' }}>Worldtown • <small>The</small> Ultimates • <small>The</small> Del Rons</nobr>
                    <nobr style={{ lineHeight: '1.1em', fontSize: 'calc(8px + 2.8vw)' }}>Gospel Music Preservation Alliance</nobr>
                    <nobr style={{ lineHeight: '1.1em', fontSize: 'calc(8px + 2.66vw)' }}>The Tisburys • Schooly D • Wallis</nobr>
                    <nobr style={{ lineHeight: '1.1em', fontSize: 'calc(8px + 2.7vw)' }}>Baby Loves Disco</nobr>
                    <nobr style={{ lineHeight: '1.1em', fontSize: 'calc(8px + 2vw)' }}>Philly School District Jazz All-Stars </nobr>
                    {/* <nobr style={{ lineHeight: '1.2em', fontSize: 'calc(8px + 2.4vw)' }}>DARLA • WE HOPE GOSPEL CHOIR</nobr>
                    <nobr style={{ lineHeight: '1.2em', fontSize: 'calc(8px + 2.33vw)' }}>KUF KNOTZ and CHRISTINE ELISE</nobr>
                    <nobr style={{ lineHeight: '1.3em', fontSize: 'calc(8px + 2vw)' }}>BABY LOVES DISCO</nobr> */}
                    <nobr style={{ lineHeight: '1.3em', fontSize: 'calc(8px + 0.66vw)' }}>+ MANY MORE TBA</nobr>
                </div>

                {/* <div className="stack font-heading text-bold text-center margin-vertical-30">
                    <h3 className="text-center text-upper text-white">HOSTED BY</h3>
                    <nobr className="text-red" style={{ lineHeight: '1.1em', fontSize: 'calc(6px + 3vw)' }}>RICH MEDINA + COSMO BAKER</nobr>
                </div> */}
                <div className="stack font-heading text-bold text-center margin-bottom-30" style={{ paddingBottom: '10vh' }}>
                    <h3 className="text-center text-upper text-white margin-top-30">PLUS</h3>
                    <nobr style={{ lineHeight: '1.3em', fontSize: 'calc(12px + 1vw)' }}>Philladelphia Independent Film Festival Screenings </nobr>
                    <nobr style={{ lineHeight: '1.3em', fontSize: 'calc(12px + 1vw)' }}>Food Trucks • Beer Garden </nobr>
                    <nobr style={{ lineHeight: '1.3em', fontSize: 'calc(12px + 1vw)' }}>Farm to Table Philly Art Marketplace</nobr>
                    <nobr style={{ lineHeight: '1.3em', fontSize: 'calc(12px + 1vw)' }}>+ Philly Tech Week <span className="text-regular">plugging it all in</span></nobr>
                </div>
            </div>

            <div className="background-black text-white text-center stack pad-vertical-30">
                <div className="row justify-center items-center">
                    <div className="stack pad-30">
                        <img src="/2022/lfp-white.png" style={{ maxWidth: '90vw', width: '300px' }} />
                        <h1 className="text-thin" style={{ padding: 0, margin: 0, marginBottom: 5, fontSize: '4vh' }}>2022</h1>
                    </div>

                    <div className="stack text-left pad-20 margin-bottom-20 items-stretch" style={{maxWidth: '100vw'}}>
                        <h1 className="text-upper" style={{lineHeight:'1em'}}>Saturday, <nobr>June 11<sup>th</sup></nobr></h1>
                        <h3 className="text-upper pad-top-0" style={{lineHeight:'1em'}}>FREE at Ben Franklin Parkway</h3>
                        <h3 className="text-upper pad-top-0 text-gold" style={{lineHeight:'1em'}}>12:00 <small>PM</small> - 8:00 <small>PM</small></h3>
                        <h4 className="text-primary text-light margin-bottom-30 pad-0">
                            A full day of arts, music and Philadelphian culture
                        </h4>
                    </div>
                </div>

                <img src="/2022/partners-white.png" style={{ display: 'block', maxWidth: '992px', width: '80%', margin: '50px auto 30px' }}/>
            </div>
        </MainLayout>
    )
}


export default LoveFromPhillyView;
