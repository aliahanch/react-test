import React, {Component} from 'react';
import Title from "../Title";
import {ProductConsumer} from "../../context";
import CartCol from "./cartCol";
import Empty from "./empty";
import CartList from "./cartList";

class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer >
                    {
                        value =>{
                            const  {cart} =value;
                            if(cart.length>0){
                                return (<React.Fragment>
                                    <Title name=" " title="سبد خرید "></Title>
                                    <CartCol />
                                    <CartList value={value} />
                                </React.Fragment>)
                            }else {
                                return <Empty />
                            }
                        }
                    }
                </ProductConsumer>
            </section>
        );
    }
}

export default Cart;