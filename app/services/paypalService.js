import config from 'config'
import { loadScript } from '@paypal/paypal-js'

const _ = { // private statics
    paypalInstance: null,
    requestPool: null
}

export const getPaypalApi = (forceReload = false) => {
    if (!forceReload && _.paypalInstance)
        return Promise.resolve(_.paypalInstance)
    if (!forceReload && _.requestPool)
        return _.requestPool

    _.requestPool = new Promise((resolve, reject) => {
        loadScript({ 'client-id': config.APP_PAYPAL_CLIENTID })
            .then(paypal => {
                _.paypalInstance = paypal

                resolve(_.paypalInstance)
            }, reject)
    })

    return _.requestPool
}
