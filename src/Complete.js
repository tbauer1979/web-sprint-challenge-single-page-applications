import React from "react";
export default function Confirmation(props) {
    const { orders } = props;
    if (!orders) {
        return <h3>Fetching your order details</h3>
    }
    return (
        <div>
             <h2>Thank you for the order {orders.name}</h2>
             <p>We are starting to prep your <span className="order">{orders.size} </span> pizza right now.</p>
             <h4>We will shoot you a text at {orders.phone} when it is ready!</h4>
             <p>Special Instructions (if any will show here): {orders.special}</p><br/>
        </div>
    )
}
