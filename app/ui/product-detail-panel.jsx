import { useState } from 'react'
import { Html, BuyPanel, LightBox } from 'app/ui'
import { isMobile } from 'arkade/utils/browser-utils'


export const ProductDetailPanel = ({ product, style = {}, className = '' }) => {
    const photoList = [product.photo, ...product.gallery.map(({ directus_files_id }) => directus_files_id)]
    const [lightboxState, setLightboxState] = useState({ photo: null, photoList })
    const [mainPhotoUrl, setMainPhotoUrl] = useState(product.photo)

    const nameArea = product.name_image
        ? <img src={product.name_image} alt={product.name} style={{ maxWidth: '90vw', width: 300}} className="margin-bottom-40 margin-top-20" />
        : <h2>{product.name}</h2>

    return (
        <>
            <div className={`grid items-center pad-${isMobile() ? 20 : 50} margin-vertical-20 ${className}`} style={{ ...style, borderRadius: isMobile() ? 10 : 50 }}>
                <div className="xs-12 lg-6">
                    {isMobile() ? null : nameArea}
                    <Html className="font-alternate" code={product.description} />
                    {!product.materials
                        ? <div className="margin-top-20"><BuyPanel product={product} /></div>
                        : (
                            <>
                                <h5 className="text-blue margin-top-10">Materials</h5>
                                <ul style={{ paddingLeft: 15, listStyleType: 'circle' }}>
                                    {product.materials.map(({ aspect, text }, index) => (
                                        <li key={index} className="margin-bottom-15">
                                            {aspect ? <b className="font-heading">{aspect}<br/></b> : null}
                                            <span>{text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )
                    }


                </div>
                <div className="xs-12 lg-6" style={{ order: isMobile() ? -1 : 1, }}>
                    <div
                        onClick={() => setLightboxState({ photo: product.photo, photoList })}
                        style={{
                            minHeight: '50vh',
                            cursor: 'pointer',
                            backgroundImage: `url(${mainPhotoUrl})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center center'
                        }}
                    />

                    <div style={{ maxWidth: '380px', width: '90%', margin: '20px auto'  }}>

                        {photoList.length <= 1 ? null : (
                            <div className="row items-center margin-bottom-20 justify-center">
                                {photoList.map(url => (
                                    <div
                                        key={url}
                                        onMouseOver={() => isMobile() ? null : setMainPhotoUrl(url)}
                                        onClick={() => isMobile() ? setMainPhotoUrl(url) : setLightboxState({ photo: url, photoList })}
                                        className={url === mainPhotoUrl ? 'border-color-blue' : 'border-color-white'}
                                        style={{
                                            cursor: 'pointer',
                                            backgroundImage: `url(${url})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center center',
                                            width: 64,
                                            height: 64,
                                            borderRadius: 32,
                                            marginRight: 15,
                                            borderWidth: '2px',
                                            borderStyle: 'solid'
                                        }}
                                    />
                                ))}
                            </div>
                        )}

                        {isMobile() ? nameArea : null}

                        {product.materials ? <BuyPanel product={product}/> : null}
                    </div>
                </div>
            </div>

            <LightBox
                photo={lightboxState.photo}
                photoList={lightboxState.photoList}
                onNavigate={(newUrl) => setLightboxState({ photo: newUrl, photoList: lightboxState.photoList })}
                onClose={() => setLightboxState({ photo: null, photoList: [] })}
            />
        </>
    )
}
