import React from 'react'

import { backgrounds, founders } from 'app/content'

export const StoreSlide = (props = {}) => {
    return (
        <div className="row justify-center pad-vertical-50" style={{ background: backgrounds.blackAlt }}>
            <div className="row wrap justify-center" style={{ maxWidth: '100%' }}>
                <img
                    src={'/logo-icon-white.svg'}
                    style={{ width: '120px', maxWidth: '80vw', flex: '0 0 auto', margin: '20px' }}
                />
                <img
                    src={`/store-preview.svg`}
                    alt="30 Amp Circuit Official Store coming soon"
                    title="30 Amp Circuit Official Store coming soon"
                    style={{ width: '500px', alignSelf: 'center', flex: '0 0 auto', maxWidth: '90vw', margin: '30px' }}
                />
            </div>
        </div>
    )
}
