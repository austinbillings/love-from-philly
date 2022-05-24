import React from 'react'
import ReactGA from 'react-ga'

import { Icon } from 'arkade/common'
import { backgrounds } from 'app/content'
import { useSession } from 'arkade/hooks'

const applyUrl = '/grant-application'
const donateUrl = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=M6NDVZENBXJPW&source=url'

export const CovidReliefBanner = () => {
    const [isCollapsed, setIsCollapsed] = useSession('covidReliefBanner_collapsed', true)

    const handleToggleCollapse = () => {
        setIsCollapsed(!isCollapsed)
        ReactGA.event({
            category: 'CovidBanner',
            action: `Toggle banner ${isCollapsed ? 'open' : 'closed'}`
        })
    }

    const handleDonateClick = () => {
        ReactGA.event({
            category: 'CovidBanner',
            action: 'Clicked "Donate" button'
        })
    }

    const handleApplyClick = () => {
        ReactGA.event({
            category: 'CovidBanner',
            action: 'Clicked "Apply for a Relief grant" button'
        })
    }

    const Toggle = () => (
        <div onClick={handleToggleCollapse} className={`pad-5 ${!isCollapsed ? 'self-start' : ''}`} style={{ cursor: 'pointer' }}>
            {isCollapsed
                ? (
                    <button className="btn btn-ghost text-white margin-0" style={{padding: '0 15px'}}>
                        More info <Icon fa="angle-double-down margin-left-10"/>
                    </button>
                ) : (
                    <Icon fa="close margin-10" style={{ fontSize: '2.5em' }} />
                )
            }
        </div>
    )

    const StackedHeader = () => (
        <React.Fragment>
            <img src="/30ampphilly-white.png" className="margin-bottom-20" style={{ maxWidth: '100%', width: 200 }} />

            <h2 className="pad-0 margin-0 margin-right-30" style={{ lineHeight: '1em' }}>
                COVID-19
                <br/>
                <small className="text-light">Relief Efforts</small>
            </h2>
        </React.Fragment>
    )

    return (
        <React.Fragment>
            <div
                className="text-white pad-5 row items-center"
                style={{ background: backgrounds.red, zIndex: 100, position: 'relative' }}>

                {isCollapsed
                    ? (
                        <React.Fragment>
                            <img onClick={handleToggleCollapse} src="/30ampphilly-white.png" className="margin-horizontal-5 _sm-hide" style={{ maxWidth: '100%', width: 40 }} />
                            <h5 onClick={handleToggleCollapse} className="pad-0 margin-horizontal-10 margin-right-30 _sm-hide" style={{ lineHeight: '1em' }}>
                                COVID-19 <span className="text-light">Relief Efforts</span>
                            </h5>

                            <p onClick={handleToggleCollapse} className="margin-0 flex-1 pad-10 pad-horizontal-10 text-center text-medium">
                                30Amp is providing assistance, in the form of microgrants, to local artists in need.
                            </p>

                            <Toggle />
                        </React.Fragment>
                    )
                    : (
                        <React.Fragment>
                            <div className="flex-0 text-center pad-30 _md-hide">
                                <StackedHeader/>
                            </div>

                            <div className="flex-1">
                                <div className="lg_-hide pad-20">
                                    <StackedHeader />
                                </div>

                                <p className="text-light pad-horizontal-20" style={{ maxWidth: '820px' }}>
                                    Click below to donate immediately to 30amp's fund to help our local artists and musicians. We will be handing out <b>$330</b> micro-grants to as many qualified individuals as we can. These people are hit the hardest and we need them the most, and are deeply affected by the Coronavirus outbreak and related economic downturn.
                                </p>

                                <p className="text-light pad-horizontal-20" style={{ maxWidth: '820px' }}>
                                    <b>Artists in need:</b> fill out the grant application form using the button below. Our definition of Artists includes not only Musicians but creators and performers of all mediums, including dance, theater and fine arts.
                                </p>

                                <a href={donateUrl} onClick={handleDonateClick} target="_blank">
                                    <button className="btn btn-ghost text-large">
                                        Donate Now <Icon fa="arrow-right margin-left-10"/>
                                    </button>
                                </a>

                                <a href={applyUrl} onClick={handleApplyClick}>
                                    <button className="btn btn-ghost text-large">
                                        Apply for a Relief grant <Icon fa="edit margin-left-10"/>
                                    </button>
                                </a>
                            </div>

                            <Toggle/>
                        </React.Fragment>
                    )}
            </div>
            {isCollapsed ? null : (
                <div
                    className="text-black pad-5 stack items-center text-left"
                    style={{ background: backgrounds.orange, zIndex: 100, position: 'relative' }}>
                    <h5 className="margin-0 text-center self-stretch margin-top-20"><Icon fa="warning margin-right-10"/> Important message for certain Grant Applicants</h5>
                    <p style={{ maxWidth: 1060 }} className="text-medium pad-20">
                        Due to the overwhelming number of applicants to our Covid-19 fund we have been experiencing delays in our process of receiving, reviewing, voting on and ultimately paying these micro-grants.
                        <ol>
                            <li>If you have not heard back from us within 5 days of applying saying that we are in receipt of your application please let us know by sending a follow up email to <a href="mailto:andrew@30amp.org">Andrew@30amp.org</a>.</li>
                            <li>If you are in serious need and need immediate help please let us know and we will pay special attention to your case but please — these are only for emergencies. (3) We are now looking at 14 business days to complete applications from time they come in so keep that in mind.</li>
                        </ol>
                    </p>
                </div>
            )}
        </React.Fragment>
    )
}
