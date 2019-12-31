import React from 'react';
import CartItem from "./cartItem";

export default function CartList({value}) {
    const {cart} = value;
    return (
        <div className="container-fluid">
            {
                cart.map( i =>{
                    return <CartItem key={i.id} item={i} value={value} />
                })
            }

        </div>
    )
};