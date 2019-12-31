import React, {Component} from 'react';
import {ProductConsumer} from "../context";
import {Link} from "react-router-dom";

class Details extends Component {
    state={
      idPage:null
    };
    componentDidMount() {

        this.setState({idPage:this.props.location.idPage})
    }
    render() {
        return (
            <ProductConsumer>
                {
                    value=>{
                        const {id,company,img,info,title,price,inCart} = value.detailProduct;

                        return (
                            <div className="container py-5">
                                <div className="row">
                                    <div className="col-10 mx-auto text-center
                                    text-slanted text-blue my-5">
                                        <h1>
                                            {title}
                                        </h1>
                                        <img src={img} alt="mo" className="img-fluid img-resize" />
                                        <h2 className= " dir-rtl text-blue text-center align-content-md-center">

                                            {price*10000}
                                            <span className="">تومان</span>
                                        </h2>                                        <p className="lead text-md-right float-right text-ss" >
                                            {info}
                                        </p>
                                        <div>
                                            <button className="btn btn-outline-primary card-btn"
                                                    disabled={inCart ? true : false}
                                                    onClick={()=>{value.addToCart(id)}}>
                                                {
                                                    inCart ? (
                                                        <p className="text-capitalize mb-0" disabled>
                                                            {" "}
                                                            در سبد خرید
                                                        </p>
                                                    ) : (
                                                        <i className="fas fa-cart-plus"></i>
                                                    )
                                                }
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    }
                }
            </ProductConsumer>
        );
    }
}

export default Details;