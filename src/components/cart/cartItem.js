import React from 'react';

export default function CartItem({item,value}){
    const {id,title,img,price,total,count} = item;
    const {inc ,dec, remove} = value;
    return (
        <div className="row my-1 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img
                src={img}
                style={{width:"5rem",height:"5rem"}}
                className="img-fluid"
                alt="pro"
                />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none "> محصول :</span>
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none "> قیمت :</span>
                {price*10000}ت
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-dark mx-1"
                              onClick={()=>dec(id)}>
                            -
                        </span>
                        <span className="btn btn-dark mx-1"
                              onClick={()=>dec(id)}>
                            {count}
                        </span>
                        <span className="btn btn-dark mx-1"
                              onClick={()=>inc(id)}>
                            +
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="btn btn-danger" onClick={()=>remove(id)}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none "> مجموع :</span>
                {total*10000}ت
            </div>
        </div>
    )
};