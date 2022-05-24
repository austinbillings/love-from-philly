import packageJson from './package.json';

export default {
    APP_NAME: 'Love From Philly | JUNE 11th | 12 PM | Ben Franklin Parkway',
    APP_VERSION: packageJson.version,
    // APP_PAYPAL_CLIENTID: 'ARtUwT6leCG0rvElTXCfP9PbtmF5iYs2gqwpfrZF7UlG-oHmttza83MO01FAx4yyTn7WQfpMtVkbrMkM', //test
    APP_PAYPAL_CLIENTID: 'ARQbE4Qp22N5O4SiMtHaVG8rk7uNOLtuorPpno8OAxkRgTxAoZ6hceJFlSGAzoQcahTXB8FeEIguJGQI', // prod
    API_BASE_URL: '//localhost:24680/api',
    APP_GA_ID: 'UA-163780852-1',
    SOCIAL_LINKS: {
        facebook: '30AMP-Circuit-379136805851164',
        twitter: '30AMPCIRCUIT',
        instagram: '30ampcircuit'
    }
};
