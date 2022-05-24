import React from 'react'

import { Icon } from 'arkade/common'
import { ScrollWatcher } from 'arkade/tools'
import { CentralLayout } from 'arkade/layouts'
import { scrollSnap, isMobile } from 'arkade/utils/browser-utils'

export const LoveFromPhillySlide = (props) => {
    return (
        <ScrollWatcher {...props}>
            <CentralLayout>
                <div className="grid-fluid items-center" style={{ minHeight: '80vh' }}>
                    <div className="xs-12 md-4 md-offset-1">
                        <img src="/love-from-philly-poster.jpg" style={{ maxWidth: '100%', border: '3px solid white'  }}/>
                    </div>
                    <div className="xs-12 md-7 stack items-center justify-center pad-20">
                        <h4 className="text-white text-light">30Amp Proudly Presents:</h4>
                        <img src="/LFP-EditedLogo-01.png" style={{ maxWidth: '90%', maxWidth: 300 }} alt="LOVE FROM PHILLY" />
                        <p className="text-regular text-large text-white margin-top-30" style={{ maxWidth: 600 }}>
                            With over 500,000 visitors from 53 countries for 3 glorious days in May we were able to raise $80,000 for our micro-grant program. 
                            <br/><br/>
                            We thank our sponsors <a href="https://www.aaa.com/" target="_blank">AAA</a> and <a href="https://w-hotels.marriott.com/" target="_blank">W Hotels Worldwide</a> and our producers at <a href="http://ourpplent.com/" target="_blank">Our People Entertainment</a> and <a href="https://hashtagmultimedia.com/" target="_blank">Hashtag Multimedia</a> and invite you to share in the memories and keep the dream alive. <i>We love you Philly!!!</i>
                            <br/><br/>
                        </p>
                        <a href="https://lovefromphilly.live/" target="_blank">
                            <button className="btn">
                                Watch the <b>LoveFromPhilly</b> event <Icon fa="play-circle"/>
                            </button>
                        </a>
                        <a href="/OneSheeter_SmallSize.pdf" target="_blank">
                            <button className="btn btn-ghost">
                                Open the Press Release PDF <Icon fa="info-circle"/>
                            </button>
                        </a>
                    </div>
                </div>
            </CentralLayout>
        </ScrollWatcher>
    )
}