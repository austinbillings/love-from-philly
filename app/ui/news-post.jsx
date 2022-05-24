import { formatDate } from 'cloq'
import { Html } from './html'

export const NewsPost = ({ post }) => {
    const shouldFitImage = post.image_center
        && post.image_center.trim().toLowerCase() === 'fit';

    return (
        <div key={post.id} style={{ overflow:'hidden', borderRadius: '10 10 0 0', marginBottom: 50, borderBottom: '10px solid #d62929' }}>
            <div
                className="stack justify-end"
                style={{
                    height: !post.video_url ? 400 : 'auto',
                    backgroundColor: 'black',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: shouldFitImage ? 'contain' : 'cover',
                    backgroundImage: `url(${post.image})`,
                    backgroundPosition: shouldFitImage ? 'center top' : post.image_center || 'center center'
                }}>
                {!post.video_url ? null : (
                    post.video_url.indexOf('https://www.youtube.com') === 0
                        ? (
                            <iframe
                                width="100%"
                                style={{ margin: '0 auto' }}
                                height="400"
                                src={`https://www.youtube.com/embed/${new URLSearchParams(new URL(post.video_url).search).get('v')}`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen={true}>
                            </iframe>
                        )
                        : <video autoPlay={false} controls={true} muted={false}><source src={post.video_url}/></video>
                )}
                <div className="row background-white text-black justify-between pad-vertical-10 pad-horizontal-25 items-center">
                    {post.post_link
                        ? <a href={post.post_link} target="_blank"><h3 className="grow-1 pad-0 margin-0 text-black" style={{maxWidth: '80%'}}>{post.title}</h3></a>
                        : <h3 className="grow-1 pad-0 margin-0 text-black" style={{maxWidth: '80%'}}>{post.title}</h3>
                    }
                    <h6 className="pad-0 margin-0 text-light">Posted <Html code={formatDate(`${post.date_published || post.date_created}T00:00:00`, 'full-ordinals-html')} /></h6>
                </div>
            </div>
            <div className="background-black text-white pad-30 margin-bottom-5">
                <div className="text-regular" style={{ textAlign: 'justify', wordWrap: 'break-word' }} dangerouslySetInnerHTML={{ __html: post.content }}/>
            </div>
        </div>
    )
}
