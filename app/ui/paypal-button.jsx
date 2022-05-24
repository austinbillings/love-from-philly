import axios from 'axios'
import { useEffect, useRef } from 'react'
import { getPaypalApi } from 'app/services'

export const PaypalBuyButton = ({ cost, description, id, ...rest }) => {
    const ref = useRef()

    useEffect(() => {
        if (!ref.current) return;

        getPaypalApi().then(paypal => {
            if (ref.current.innerHTML) ref.current.innerHTML = '';
            return paypal.Buttons({
                style: {
                    shape: 'rect',
                    color: 'blue',
                    layout: 'vertical',
                    label: 'checkout',
                },
                createOrder: function(data, actions) {
                    return actions.order.create({
                        purchase_units: [{ description, amount: { currency_code: 'USD', value: cost } }]
                    });
                },
                onApprove: function(data, actions) {
                    return actions.order.capture().then(function(orderData) {
                        axios.post(`/products/${id}`, { purchased: true })
                        axios.get('http://165.227.106.33:9473/update?instigator=purchase%20of%20item%20' + id)

                        console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
                        const element = document.getElementById(elementId);
                        element.innerHTML = '';
                        element.innerHTML = '<h4 class="text-blue pad-vertical-30 text-center">Thank you for your tax-exempt gift! You will receive an e-mail from 30 Amp Circuit shortly.</h4>';
                    });
                },
                onError: err => console.log(err)
            }).render(ref.current);
        });
    }, [ref.current])

    return <><div ref={ref} {...rest}></div><span> </span></>
}
