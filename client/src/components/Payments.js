import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends React.Component {
  render(){
    return(
      <StripeCheckout
          name="Email Magic"
          description="pay $5 for 5 credits"
          amount={500}
          token={ token => console.log(token)} //token is not an actual token its an object of information 
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
          >
          <button className="btn">ADD CREDITS</button>
      </StripeCheckout>
    )
  }
}

export default Payments;