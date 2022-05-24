import { PaypalBuyButton } from 'app/ui'
import { formatUsd } from 'arkade/utils/format-utils'

export const BuyPanel = ({ product }) => {
    return (
        <>
            <h6 className={!product.stock_remaining ? 'text-subtle' : 'text-blue'}>Donation Level</h6>
            <h3 className={`pad-top-0 margin-bottom-10 ${product.stock_remaining ? '' : 'text-subtle'}`}>
                {formatUsd(product.cost)}
                <span className="text-subtle"> USD</span>
            </h3>
            <PaypalBuyButton
                id={product.id}
                cost={product.cost}
                description={product.paypal_description}
                style={{
                    display: 'block',
                    opacity: product.stock_remaining ? 1 : 0,
                    maxHeight: !product.stock_remaining ? 0 : '100vh',
                    marginTop: 30
                }}
            />

            <div
                style={{
                    display: 'block',
                    opacity: !product.stock_remaining ? 1 : 0,
                    maxHeight: product.stock_remaining ? 0 : '100vh',
                    marginTop: product.stock_remaining ? 0 : 20
                }}
                className="border-red pad-20">
                <h3 className="pad-top-0 margin-bottom-9 text-red">Out of stock</h3>
                <p className="text-italic text-muted text-lighter">Sorry, this item is no longer available.</p>
            </div>
        </>
    )
}
