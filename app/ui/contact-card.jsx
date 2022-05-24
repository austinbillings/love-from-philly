import React from 'react'

function formatPhone (number) {
    if (typeof number === 'number')
        number = number.toString()
    if (typeof number !== 'string')
        return number

    switch (number.length) {
        case 10:
            return `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(6, 10)}`
    }

    return number;
}

export const ContactCard = ({ name, role, instagram, email, phone_number, index }) => (
    <React.Fragment>
        {index ? <hr className="margin-vertical-30" style={{ opacity: 0.3 }} /> : null}

        {name && (
            <div className="xs-12 pad-horizontal-10">
                <h1 className="pad-bottom-10 pad-top-40 text-white text-thin">{name}</h1>
                {role && <h4 className="text-white pad-top-5 text-light">{role}</h4>}
            </div>
        )}

        <div className="xs-12 row justify-start pad-top-10">
            {email && (
                <div className="flex-none margin-right-20 pad-10">
                    <label className="text-medium text-small text-upper text-black">By Email</label>
                    <h3 className="margin-top-0 margin-bottom-20">
                        <a
                            className="text-dark-grey"
                            href={`mailto:${email}`}>
                            {email}
                        </a>
                    </h3>
                </div>
            )}

            {instagram && (
                <div className="flex-none margin-right-20 pad-10">
                    <label className="text-medium text-small text-upper text-black">On Instagram</label>
                    <h3 className="margin-top-0 margin-bottom-20">
                        <a
                            className="text-dark-grey"
                            target="_blank"
                            href={`https://www.instagram.com/${instagram}`}>
                            @{instagram}
                        </a>
                    </h3>
                </div>
            )}

            {phone_number && (
                <div className="flex-none margin-right-20 pad-10">
                    <label className="text-medium text-small text-upper text-black">By Phone</label>
                    <h3 className="margin-top-0 margin-bottom-20">
                        <a href={`tel:+1${phone_number}`}>
                            <tel
                                className="text-dark-grey">
                                {formatPhone(phone_number)}
                            </tel>
                        </a>
                    </h3>
                </div>
            )}
        </div>
    </React.Fragment>
)
