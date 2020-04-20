import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    // The price in stripe is calculated in cents
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_4cY71uP9hEsu1WnK0Zva7Fzn004Vp0O8UT';

    const onToken = (token) => {
        console.log(token);
        alert('Payment successful');
    }

    return (
        <StripeCheckout
            currency='EUR'
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is ${price}€`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
