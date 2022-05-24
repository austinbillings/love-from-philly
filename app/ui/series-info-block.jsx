import { Html } from './html'
import { LocationText } from './location-text'
import { RowLayout as Row, StackLayout as Stack } from 'arkade/layouts'

export const SeriesInfoBlock = ({ series, showLocation }) => {
    return (
        <Row className="pad-vertical-30" style={{ alignItems: 'center' }}>
            <div className="pad-horizontal-30" style={{ flex: '1 1 calc(100% - 380px)' }}>
                <h2 className="pad-bottom-5">{series.series_title}</h2>
                {showLocation ? <LocationText className="margin-bottom-20 margin-top-10" location={series.location} /> : null}

                <Html style={{ maxWidth: '100%' }} code={series.series_description}/>
            </div>
            <div className="pad-horizontal-30" style={{ flex: '0 1 360px', width: 360 }}>
                <img
                    className="background-black"
                    src={series.image}
                    style={{ maxWidth: '100%', borderRadius: 9, boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}
                />
            </div>
        </Row>
    )
}
