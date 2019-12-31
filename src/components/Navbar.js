import React, {Component} from 'react';
import {Link} from "react-router-dom";
import logo from "../logo.svg";
// import stayled from "styled-components";

class Navbar extends Component {
    render() {
        return (
           <nav className="navbar bg-dark navbar-expand-sm navbar-dark px-sm-5">
               <Link className="navbar-brand" to="/">
                   <img alt="s" src={logo} className="navbar-brand" />
               </Link>
               <ul className="navbar-nav align-items-center">
                   <li className="nav-item ml-5">
                       <Link to="/" className="nav-link">
                           محصولات
                       </Link>
                   </li>
               </ul>
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

