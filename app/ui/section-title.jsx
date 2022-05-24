import { RowLayout as Row } from 'arkade/layouts'

export const SectionTitle = ({ title, style, ...rest }) => {
    return (
        <Row {...rest} style={{ ...style, alignItems: 'center' }}>
            <hr style={{ borderColor: 'currentColor', flex: '1 1 33%', opacity: 0.25 }}/>
            <h5 className="text-engraved text-center pad-horizontal-20">{title}</h5>
            <hr style={{ borderColor: 'currentColor', flex: '1 1 33%', opacity: 0.25 }}/>
        </Row>
    )
}
