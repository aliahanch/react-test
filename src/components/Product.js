import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {ProductConsumer} from "../context";
import styled from 'styled-components';
import PropTypes from 'prop-types';


class Product extends Component {



    render() {
        const {id , title , img , price , inCart} = this.props.product;
        return (
            <ProWrap className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductConsumer>
                        {(value) => (
                    <div className="img-container p-5"
                        onClick={()=>{
                            value.hDetail(id)
                        }}
                    >

                        <Link to={{
                            pathname:'/details',
                            idPage:id
                        }}>
                            <img src={img} alt="product" className="card-img-top"/>
                        </Link>
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

                        )}
                    </ProductConsumer>



                        <div className="card-footer d-flex justify-content-between">
                            <p className=" ">
                                {title}
                            </p>
                            <p >
                                <h5 className= "text-ss text-md-right text-blue  ">

                                    {price*10000}
                                    <span className="mr-1 ">تومان</span>
                                </h5>
                            </p>
                        </div>
                </div>
            </ProWrap>
        );
    }
}

Product.propTypes = {
    Product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCard:PropTypes.bool
    }).isRequired
};

export default Product;

const ProWrap = styled.div`
.card-btn {
    position: absolute;
    bottom:0;
    right:0;
}
.img-container {
    position:relative;
    
}


`