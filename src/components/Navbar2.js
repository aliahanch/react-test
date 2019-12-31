import React, {Component} from 'react';
import {Link} from "react-router-dom";

import add from "../online-shop.svg";

class Navbar2 extends Component {

    state={
        hideNav:null
    };

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        let currentHideNav = (window.innerWidth <= 991);
        if (currentHideNav !== this.state.hideNav) {
            this.setState({hideNav: currentHideNav});
        }
    }
    render() {

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <Link className="navbar-brand nav-response" to="/">
                    <img alt="s" src={add} className="navbar-brand" style={{width:"2.3rem", color:"red"}} />
                </Link>
                <div hidden={!this.state.hideNav} className="ml-auto mr-2">
                <Link to="/cart" className="ml-auto" >
                    <button  type="button" className="btn btn-success" >
                       <span className="mr-2">
                           <i className="fas fa-cart-plus"></i>
                       </span>
                        سبد خرید
                    </button>
                </Link>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto" style={{textAlign: 'center'}}>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">محصولات <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">درباره ما</Link>
                        </li>
                    </ul>

                </div>

                <div hidden={this.state.hideNav} className="ml-auto mr-5">
                    <Link to="/cart" className="ml-auto" >
                        <button  type="button" className="btn btn-success" >
                       <span className="mr-2">
                           <i className="fas fa-cart-plus"></i>
                       </span>
                            سبد خرید
                        </button>
                    </Link>
                </div>

            </nav>
        );
    }
}

export default Navbar2;