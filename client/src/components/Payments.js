import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends React.Component {
  render(){
    return(
      <StripeCheckout
          amount={500}
          token={ token => console.log(token)} //token is not an actual token its an object of information 
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
          />
    )
  }
}

export default Payments;