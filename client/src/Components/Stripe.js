import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";


toast.configure();

export default function Stripe(props) {

 let service = props.service
 const [product, setProduct] = React.useState({})
 
 useEffect(()=>{
  if(service==='Walk')
  {
    setProduct({
      name: "30 Minute Walk",
      price: 25,
      description: "Dog Walk"
    });
  }
  else if (service==='Park'){
    setProduct({
      name: "Half hour at the park",
      price: 32,
      description: "Dog Park"
    });
  }
 },service)
    
 console.log(`im in stripe ${product.name}`)
  async function handleToken(token, addresses) {
    console.log('something')
    const response = await axios.post(
      "/checkout/checkout",
      { token, product }
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success", position: toast.POSITION.BOTTOM_LEFT });
    } else {
      toast("Something went wrong", { type: "error", position: toast.POSITION.BOTTOM_LEFT });
    }
  }

  return (
    <div>
     
      <div>Thanks, please check email for confirmation. You pay can online or cash in person.</div>
      <h3>  {product.name} - ${product.price}</h3>
        
 
      
      <StripeCheckout
        stripeKey="pk_test_51I4UMhIJaZBTb5w9kYH6MoShkWS0JMtp8TJirj9Wo41aVfpK4vz3owlLSznSMhO4pG38HkkapK3OmndExEkPXw6300IFXrRrT6"
        token={handleToken}
        amount={product.price}
        name={product.name}
        billingAddress
        shippingAddress    
      />
    </div>
  );
}