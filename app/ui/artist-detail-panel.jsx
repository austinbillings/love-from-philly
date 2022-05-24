import { Icon } from 'arkade/common'
import { Html } from 'app/ui'
import { RowLayout as Row, StackLayout as Stack } from 'arkade/layouts'

export const ArtistDetailPanel = ({ artist }) => {
    return !artist ? null : (
        <Row>
            <div className="grid">
                <Stack className="pad-vertical-30 pad-horizontal-30 xs-12 md-4" style={{alignItems:'center'}}>
                    <div
                        style={{
                            width: 200,
                            height: 200,
                            backgroundImage: `url(${artist.photo})`,
                            backgroundPosition: artist.photo_center || 'center center',
                            backgroundSize: 'cover',
                            borderRadius: '50%'
                        }}
                    />
                    <h4 className="margin-vertical-20">{artist.name.toUpperCase()}</h4>
                    <p className="font-heading text-engraved text-center margin-bottom-20" style={{ fontWeight: 500 }}><Html code={artist.roles.split(' • ').map(x => `<span>${x}</span>`).join(' • ')}/></p>
                    {!artist.instagram_url ? null : (
                        <a href={artist.instagram_url} target="_blank" style={{ alignSelf: 'stretch' }}>
                            <button className="btn font-heading text-bold text-white" style={{ background: 'linear-gradient(90deg, rgb(242,180,75), rgb(225,71,79), rgb(194,77,161), rgb(77,89,162))', width: '100%' }}>
                                <Icon fa="instagram" style={{ float: 'left', marginTop: 3 }} />
                                <span>on Instagram</span>
                            </button>
                        </a>
                    )}
                    {!artist.facebook_url ? null : (
                        <a href={artist.facebook_url} target="_blank" style={{ alignSelf: 'stretch' }}>
                            <button className="btn font-heading text-bold text-white" style={{ background: '#43609C', width: '100%' }}>
                                <Icon fa="facebook" style={{ float: 'left', marginTop: 3 }} />
                                <span>on Facebook</span>
                            </button>
                        </a>
                    )}
                    {!artist.twitter_url ? null : (
                        <a href={artist.twitter_url} target="_blank" style={{ alignSelf: 'stretch' }}>
                            <button className="btn font-heading text-bold text-white" style={{ background: 'rgb(110,166,214)', width: '100%' }}>
                                <Icon fa="twitter" style={{ float: 'left', marginTop: 3 }} />
                                <span>on Twitter</span>
                            </button>
                        </a>
                    )}
                    {!artist.applemusic_url ? null : (
                        <a href={artist.applemusic_url} target="_blank" style={{ alignSelf: 'stretch' }}>
                            <button className="btn font-heading text-bold text-white" style={{ background: 'rgb(232,87,100)', width: '100%' }}>
                                <Icon fa="apple" style={{ float: 'left', marginTop: 3 }} />
                                <span>on Apple Music</span>
                            </button>
                        </a>
                    )}
                </Stack>
                <div className="pad-vertical-30 xs-12 md-8">


                    <h6 className="background-primary margin-bottom-30" style={{ display: 'inline-block', borderRadius: 21, padding: '15px 20px' }}>
                        ABOUT THE ARTIST
                    </h6>

                    <Html code={artist.description}/>
                </div>
            </div>
        </Row>
    )
}
