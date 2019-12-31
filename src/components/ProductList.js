import React, {Component} from 'react';
import Product from "./Product";
import Title from "./Title";
import {ProductConsumer} from "../context";

class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name=" " title="محصولات "></Title>
                        <div className="row">
                            <ProductConsumer>
                                {(x)=>{
                                    return x.products.map(prod =>{
                                        return <Product key={prod.id} product={prod} />
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ProductList;