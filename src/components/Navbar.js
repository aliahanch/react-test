import React, {Component} from 'react';
import {Link} from "react-router-dom";
import logo from "../logo.svg";

class Navbar extends Component {
    render() {
        return (
           <nav className="navbar navbar-dark bg-primary">
               <Link className="navbar-brand" to="/">
                   <img alt="s" src={logo} className="navbar-brand" />
               </Link>
               <div className="collapse navbar-collapse" id="navbarText">
               <ul className="navbar-nav mr-auto">
                   <li className="nav-item ">
                       <Link to="/" className="nav-link">
                           محصولات
                       </Link>
                   </li><li className="nav-item ">
                       <Link to="/" className="nav-link">
                           درباره ما
                       </Link>
                   </li>
               </ul>
               </div>
               <Link to="/cart" className="ml-auto">
                   <button  type="button" className="btn btn-success">
                       <span className="mr-2">
                           <i className="fas fa-cart-plus"></i>
                       </span>
                        سبد خرید
                   </button>
               </Link>
           </nav>
        );
    }
}

// const ButtonCo = stayled.button`
// text-transform: capitalize;
// font-size: 1.4rem;
// background: transparent;
// border: 0.05rem solid var(--lightBlue);
// `;

export default Navbar;

