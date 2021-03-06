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
            <div className="_sm-hide">
                <div style={{ float: 'right', display: 'flex', flexDirection: 'column', position: 'fixed', zIndex: 10000000, right: 10, top: 5, textAlign: 'center' }}>
                    <a href="https://www.paypal.com/donate/?hosted_button_id=VJ7NMK5K4XCQW" target="_blank">
                        <button className="btn btn-primary" style={{ border: '2px solid white' }}>
                            <span>Donate Now via PayPal</span> <Icon fa="lock" />
                        </button>
                    </a>
                    <span className="text-small text-bold clickable" style={{ textShadow: '1px 1px 0 white' }} onClick={() => window.scrollTo({ top: document.getElementById('about_tac').offsetTop, behavior: 'smooth' })}>Learn more</span>
                </div>
            </div>
            <div className="stack" style={{ maxWidth: '100%' }}>
                <div className="stack items-center justify-start text-white pad-10 pad-bottom-30" style={{ zIndex: 200, maxWidth: '100%' }}>
                    <span className="text-engraved text-small text-white margin-bottom-10 text-center" style={{ fontWeight: 500, opacity: 1 }}>
                        30 AMP CIRCUIT IS <br className="md_-hide" /> PROUD TO ANNOUNCE
                    </span>

                    <div className="row items-center">
                        <img src="/LFP-EditedLogo-01.png" style={{ maxWidth: 'calc(100vw - 50px)', width: '500px', margin: '0 auto' }} />
                    </div>
                    <h1 className="text-thin" style={{ padding: 0, margin: 0, marginBottom: 5, fontSize: 'calc(20px + 5vw)', textShadow: '0 0 50px rgba(255,20,30,0.9), 0 10px 30px rgba(255,12,13,0.3), 0 0 50px rgba(100,100,100,0.9)' }}>2022</h1>
                    <div className="marquee" style={{ marginTop: 20, marginBottom: -20, marginLeft: -20, marginRight: -20 }}><p><img src="/2022/screening.png" style={{ maxWidth: '150vw' }} /></p></div>
                </div>
                <div ariaHidden={true} className="row justify-center" style={{ width: '100%', flexWrap: 'nowrap', height: '40vh', position: 'relative', zIndex: -1 }}>
                    <div className="background-black self-stretch grow-1" style={{ borderTopRightRadius: '3vh', borderTop: '1px solid #05a4db', borderRight: '1px solid #d62929' }}> </div>
                    <img src={'/2022/skyline.png'} style={{ width: '100%',  margin: '0 auto 0px', flex: '0 1 992px' }}/>
                    <img src="/2022/ben-june.png" style={{ width: 'auto', height: '100%', maxHeight: '60vh', maxWidth: '100vw', top: '0', position: 'absolute'  }}/>
                    <div className="background-black self-stretch grow-1" style={{ borderTopLeftRadius: '3vh', borderTop: '1px solid #05a4db', borderLeft: '1px solid #d62929' }}> </div>
                </div>
            </div>
            <div className="background-black text-white text-center pad-15">
                <h1 className="text-upper" style={{lineHeight:'1em'}}>Saturday, <nobr>June 11<sup>th</sup></nobr></h1>
                <h3 className="text-upper pad-top-0" style={{lineHeight:'1em'}}>FREE at the Ben Franklin Parkway</h3>
                <h3 className="text-upper pad-top-0 text-primary" style={{lineHeight:'1em'}}>12:00 <small>PM</small> - 10:00 <small>PM</small></h3>
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
                    <nobr style={{ lineHeight: '1.1em', fontSize: 'calc(7px + 4.5vw)' }}>Rich Medina • Cosmo Baker</nobr>
                    <nobr style={{ lineHeight: '1.1em', fontSize: 'calc(7px + 3.5vw)' }}>Schoolly D • West Philly Orchestra </nobr>
                    <nobr style={{ lineHeight: '1.1em', fontSize: 'calc(7px + 3.1vw)', letterSpacing: -1 }}><small>the</small> Del Rons • <small>The</small> Tisburys • DJ Ben Arsenal</nobr>
                    <nobr style={{ lineHeight: '1.1em', fontSize: 'calc(7px + 3.1vw)', letterSpacing: -1 }}><small>The</small> Ultimates • Worldtown Soundsystem</nobr>
                    <nobr style={{ lineHeight: '1.1em', fontSize: 'calc(7px + 3.1vw)' }}>Lauren Hart • Orchestra del Barrio</nobr>
                    <nobr style={{ lineHeight: '1.1em', fontSize: 'calc(7px + 2.66vw)' }}>The Jamaaladeen Tacuma Trio  • Wallis</nobr>
                    <nobr style={{ lineHeight: '1.1em', fontSize: 'calc(7px + 2.4vw)', letterSpacing: '-0.1vw' }}>Gospel Music Preservation Alliance</nobr>
                    <nobr style={{ lineHeight: '1.1em', fontSize: 'calc(7px + 2vw)' }}>Philly School District Jazz All-Stars </nobr>
                    <nobr style={{ lineHeight: '1.1em', fontSize: 'calc(7px + 2.7vw)' }}>All City Drumline • Baby Loves Disco</nobr>
                    {/* <nobr style={{ lineHeight: '1.2em', fontSize: 'calc(8px + 2.4vw)' }}>DARLA • WE HOPE GOSPEL CHOIR</nobr>
                    <nobr style={{ lineHeight: '1.2em', fontSize: 'calc(8px + 2.33vw)' }}>KUF KNOTZ and CHRISTINE ELISE</nobr>
                    <nobr style={{ lineHeight: '1.3em', fontSize: 'calc(8px + 2vw)' }}>BABY LOVES DISCO</nobr> */}
                </div>

                {/* <div className="stack font-heading text-bold text-center margin-vertical-30">
                    <h3 className="text-center text-upper text-white">HOSTED BY</h3>
                    <nobr className="text-red" style={{ lineHeight: '1.1em', fontSize: 'calc(6px + 3vw)' }}>RICH MEDINA + COSMO BAKER</nobr>
                </div> */}
                <div className="stack font-heading text-bold text-center margin-bottom-30" style={{ paddingBottom: '10vh' }}>
                    <h3 className="text-center text-upper text-white margin-top-30">PLUS</h3>
                    <nobr style={{ lineHeight: '1.3em', fontSize: 'calc(12px + 1.4vw)' }}>Philladelphia Independent <span className="md_-hide"><br/></span> Film Festival Screenings </nobr>
                    <nobr style={{ lineHeight: '1.3em', fontSize: 'calc(12px + 2vw)' }}>Food Trucks • Beer Garden </nobr>
                    <nobr style={{ lineHeight: '1.3em', fontSize: 'calc(12px + 1.6vw)' }}>Farm to Table Philly Art Marketplace</nobr>
                    <nobr style={{ lineHeight: '1.3em', fontSize: 'calc(12px + 1.4vw)' }}>+ Philly Tech Week <span className="text-regular">plugging it all in</span></nobr>
                </div>
            </div>
            <div className="background-black text-center">
                <img src="/2022/insta-please-help.jpeg" style={{ maxWidth: '100%', margin: '0 auto' }}/>
                <img src="/2022/summerofsoul.jpeg" style={{ maxWidth: '100%', margin: '0 auto' }}/>
            </div>

            <div className="background-white text-black text-center stack pad-vertical-40" id="about_tac" style={{ position: 'relative', zIndex: 10000001 }}>
                <img src="/logo_combined.png" style={{ width: 1000, maxWidth: '90vw', alignSelf: 'center', marginBottom: 30 }} />
                <p style={{ width: 850, lineHeight: '1.5em', maxWidth: '95%', margin: '0 auto 30px' }}><b>Love From Philly</b> is an annual event planned, executed, and hosted by your friends at <b><a href="https://www.30amp.org">30 Amp Circuit</a>, which is a Philly-based non-profit formed in 2018 as a Pennsylvania 501c3 dedicated to the health, wellness, and professional needs of musicians and artists of all mediums.</b></p>
                <p style={{ width: 850, lineHeight: '1.5em', maxWidth: '95%', margin: '0 auto 30px' }}>We welcome every tax-exempt donation to 30 Amp Circuit, which allow us to continue putting on these community-centric events and delivering much-needed health assistance and resources to Philadelphia-based musicians and artists of all kinds. We exist exclusively on donations from people like you and every penny counts. We thank you for your support.</p>
                <a href="https://www.paypal.com/donate/?hosted_button_id=VJ7NMK5K4XCQW" target="_blank">
                    <button className="btn btn-wide btn-dark">
                        <span>Donate Now via PayPal</span> <Icon fa="lock" />
                    </button>
                </a>
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
                        <h3 className="text-upper pad-top-0 text-gold" style={{lineHeight:'1em'}}>12:00 <small>PM</small> - 10:00 <small>PM</small></h3>
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
