import './night.scss'

const stars = (new Array(18)).fill({})

export const Night = ({ children, style = {}, className = '' }) => {
    return (
        <div className="night-wrapper">
            <div class="night">
                {stars.map(star => <div className="shooting_star"></div>)}
                <div style={{ ...style, display: 'flex' }} className={className || ''}>
                    {children}
                </div>
            </div>
        </div>
    )
}
