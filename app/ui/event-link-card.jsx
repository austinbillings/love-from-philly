import { useRouter } from 'next/router'
import { Html } from './html'

import { Icon } from 'arkade/common'
import { RowLayout as Row, StackLayout as Stack } from 'arkade/layouts'
import { formatDate, isBefore } from 'cloq'

export const EventLinkCard = ({ event }) => {
    const router = useRouter()
    const startDateText = formatDate(event.start_date + 'T12:00:00', 'full-ordinals-html');
    const startDateMonth = startDateText.split(' ')[0];
    const endDateText = formatDate(event.end_date + 'T12:00:00', 'full-ordinals-html').replace(startDateMonth + ' ', '');
    const isPast = isBefore(event.end_date || event.start_date);

    return (
        <div
            onClick={() => router.push(`/events/${event.slug}`)}
            style={{
                margin: '5px',
                flex: '0 1 calc(50% - 10px)',
                backgroundImage: `url(${event.event_photo})`,
                backgroundPosition: event.event_image_center || 'center center',
                backgroundSize: 'cover'
            }}>
            <Stack className="clickable" style={{ backgroundColor: isPast ? 'rgba(40,40,40, 0.9)' : 'rgba(5,90,150,0.85)', padding: '20px', minHeight: '150px', justifyContent: 'space-between' }}>
                <a className="font-heading text-right pad-5 pad-horizontal-10 margin-0 text-medium text-upper background-black" style={{ alignSelf: 'flex-end' }}>
                    <Html code={startDateText}/> {!event.end_date ? null : <span> – <Html code={endDateText}/></span>}
                    {isPast ? <small className="text-x-small text-muted" style={{ lineHeight: '13px', marginTop: 0, display: 'block' }}><i>Past</i><br/></small> : null}
                </a>

                <div>
                    <Icon fa="chevron-circle-right" style={{ fontSize: '32px', float: 'right', marginTop: 10 }} />
                    <h5 className={`pad-0 margin-0 ${isPast ? 'text-muted' : 'text-white'}`}>{event.event_title}</h5>
                    {!event.subtitle ? null : (
                        <span className="text-black">{event.subtitle}</span>
                    )}
                    {!event.event_hosts ? null : (
                        <h5 className={`text-medium text-small ${isPast ? '' : 'text-black'}`}>hosted by <span className={isPast ? 'text-gold' : 'text-white'}>{event.event_hosts}</span></h5>
                    )}
                </div>
            </Stack>
        </div>
    )
}
