import { useEffect, useState } from 'react'
import { Icon } from 'arkade/common'
import { isMobile } from 'arkade/utils/browser-utils'
import { Html } from './html'
import { LightBox } from './light-box/light-box'

export const ProducerPanel = ({ producer }) => {
    const [lightboxState, setLightboxState] = useState({ photo: null, photoList: [] })
    const productLinePhotos = !producer || !producer.gallery ? [] : producer.gallery.map(({ directus_files_id }) => directus_files_id)

    return (
        <>
            <div className={`stack-grid justify-center background-black pad-${isMobile() ? 10 : 50} margin-vertical-40`} style={{ maxWidth: '80vw', width: 700, borderRadius: isMobile() ? 10 : 50, overflow: 'hidden' }}>
                <h1><span style={{fontWeight:200}}>{producer.prefix}</span> <span className="text-gold">{producer.name}</span></h1>
                <div className="row items-center">
                    <div className="xs-12 md-4 margin-bottom-20">
                        <img src={producer.photo} style={{ maxWidth: '100%' }} alt={producer.name} />
                    </div>
                    <div className="xs-12 md-8 pad-horizontal-20 font-alternate">
                        <Html code={producer.description} />
                    </div>
                </div>

                <div style={{ position: 'relative', display: 'block', width: '100%', marginTop: 30 }}>
                    <div className="row pad-vertical-10 items-center" style={{ overflow: 'auto', maxWidth: '100%', flexWrap: 'nowrap' }}>
                        {productLinePhotos.map(url => (
                            <a key={url} onClick={() => setLightboxState({ photo: url, photoList: productLinePhotos })} target="_blank">
                                <img src={url} className="margin-15 margin-horizontal-20 border-white" style={{ borderWidth: 2, width: 120 }}/>
                            </a>
                        ))}
                    </div>

                    <div style={{ boxShadow: 'inset -100px 0 50px 0 rgba(0, 0, 0, 0.5)', width: '100%', display: 'block', position: 'absolute', top: 0, right: 0, height: '100%', pointerEvents: 'none' }} />
                </div>
            </div>
            <div style={{position: 'relative'}}>
                <LightBox
                    photo={lightboxState.photo}
                    photoList={lightboxState.photoList}
                    onNavigate={(newUrl) => setLightboxState({ photo: newUrl, photoList: lightboxState.photoList })}
                    onClose={() => setLightboxState({ photo: null, photoList: [] })}
                />
            </div>
        </>
    )
}
