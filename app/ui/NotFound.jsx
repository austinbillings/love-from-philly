import { Icon } from 'arkade/common'
import { MainLayout } from 'app/layouts'

export const NotFound = ({ what = 'the resource you requested' }) => {
    return (
        <MainLayout
            backgroundId="blackAlt"
            className="text-white"
            style={{ maxWidth: '100vw' }}
            headerProps={{ hideLogo: false, hideSocialNav: true }}>
            <div className="stack-grid justify-center items-center" style={{ minHeight: '80vh' }}>
                <h1 className="pad-0">Not found</h1>
                <h3 className="text-gold pad-0">Error 404</h3>
                <p className="text-light margin-top-20 text-center" style={{ maxWidth: 300 }}>Sorry, we were unable to find <nobr className="text-bold">{what}</nobr>.</p>
                <a href="/home">
                    <button className="btn btn-primary">
                        <Icon fa="home"/><b>Go Home</b>
                    </button>
                </a>
            </div>
        </MainLayout>
    )
}
