import { Icon } from 'arkade/common'

export const LocationText = ({ location, style, className, ...rest }) => {
    return (
        <fieldset className={`${className} pad-horizontal-20 border-color-primary`} style={{ ...style, borderRadius: 8, borderStyle: 'dashed' }} {...rest}>
            <legend className="text-upper text-light">{location.prefix}</legend>
            <Icon fa="map-marker" className="text-primary" style={{ float: 'right', fontSize: 52 }} />
            <h3 className="text-gold pad-0 margin-0">{location.name}</h3>
            <h5 className="pad-top-0 text-light margin-bottom-5">{location.address_full}</h5>
        </fieldset>
    )
}
