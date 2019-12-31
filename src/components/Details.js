import React, {Component} from 'react';
import {ProductConsumer} from "../context";
import Tabs from "./tabs";

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
                        const {id,img,info,title,price,inCart} = value.detailProduct;

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
                                        </h2>
                                        <p className="lead text-md-right float-right text-ss" >

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
                                                        <div>

                                                            <span className="mr-2">
                                                               <i className="fas fa-cart-plus"></i>
                                                           </span>
                                                            اضافه به سبد خرید

                                                        </div>
                                                    )
                                                }
                                            </button>
                                        </div>

                                    </div>
                                </div>

                                <div className="card" style={{direction:"rtl ", padding:"5px"}}>
                                    <nav>
                                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                            <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home"
                                               role="tab" aria-controls="nav-home" aria-selected="true">توضیحات</a>
                                            <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile"
                                               role="tab" aria-controls="nav-profile" aria-selected="false">مشخصات</a>
                                            <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact"
                                               role="tab" aria-controls="nav-contact" aria-selected="false">نظرات</a>
                                        </div>
                                    </nav>
                                    <div className="tab-content" id="nav-tabContent">
                                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                                             aria-labelledby="nav-home-tab">
                                             <p className=" text-md-right float-right text-ss"
                                                style={{margin:"10px",text_aline:"justify"}}>
                                                 {info}
                                             </p>
                                        </div>
                                        <div style={{text_aline:"justify",text_size:"1rem"}}
                                            className="tab-pane fade" id="nav-profile" role="tabpanel"
                                             aria-labelledby="nav-profile-tab"><Tabs idTab={id}/>
                                        </div>
                                        <div className="tab-pane fade" id="nav-contact" role="tabpanel"
                                             aria-labelledby="nav-contact-tab">...
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