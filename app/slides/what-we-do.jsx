import React from 'react';

import { ImageBlock } from 'arkade/common';
import { ScrollWatcher } from 'arkade/tools';
import { CentralLayout, RowLayout, StackLayout } from 'arkade/layouts';

import './whatWeDo.scss';
import { whatWeDo } from 'app/content/whatWeDo';

export const WhatWeDoSlide = ({ onDominate = null }) => {
    return (
        <ScrollWatcher onDominate={onDominate}>
            <CentralLayout className="text-white" style={{ minHeight: '100vh', padding: '15vh 10px' }}>
                <div className="text-left">
                    <h1>What We Do</h1>
                    <p style={{ display: 'block', maxWidth: 500 }}>We utilize five methods of helping the musicians and artists of Philadelphia, to bring about the most possible positive change and to reach these artists in need however they may best be serviced.</p>
                    {whatWeDo.map(item => (
                        <a className="wwd-section-link" key={item.id} href={`#${item.id}`}>
                            <img src={item.image} style={{ width: 50, display: 'inline-block', marginRight: 20 }} />
                            <h4>{item.title}</h4>
                        </a>
                    ))}
                </div>
            </CentralLayout>
            {whatWeDo.map(selectedItem => (
                <CentralLayout key={selectedItem.image} style={{ minHeight: '100vh', padding: '15vh 10px' }}>
                    <a name={selectedItem.id} />
                    <RowLayout>
                        <StackLayout>
                            {whatWeDo.map(item => (
                                <div key={item.id} style={{ background: item.id === selectedItem.id ? 'white' : 'transparent', width: 75, height: 75, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 40 }}>
                                    <img
                                        src={item.image}
                                        style={{ width: 50 }}
                                    />
                                </div>
                            ))}
                        </StackLayout>
                        <div className="text-white margin-left-20" style={{ maxWidth: '800px' }}>
                            <span className="text-engraved">What We Do</span>

                            <div style={{ margin: '15px 0', padding: 20, border: '1px solid', borderRadius: 5 }} className="border-color-orange">
                                <h3 style={{ maxWidth: 650 }} className="text-gold">{selectedItem.title}</h3>
                                {selectedItem.sections.map(section => (
                                    <div key={section.content} className="wwd-section-content">
                                        {section.image ? <img className="wwd-section-image" src={section.image} {...(section.imageProps ? section.imageProps : {})} /> : null}
                                        <div className="wwd-section-html" dangerouslySetInnerHTML={{ __html: section.content }} style={{ maxWidth: '100%' }} />
                                    </div>
                                ))}
                                <div style={{clear:'both'}}> </div>
                            </div>
                        </div>
                    </RowLayout>
                </CentralLayout>
            ))}
        </ScrollWatcher>
    )
}
