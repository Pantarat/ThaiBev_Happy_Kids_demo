import React, { Component } from "react";
import CartIcon from '../assets/cart.svg';
import '../styles/Cart.css';


export class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPopupOpen: false,
            itemsInCart: 0
        };
    }

    handleClick = () => {
        this.setState({ isPopupOpen: true });
    };

    handleClose = () => {
        this.setState({ isPopupOpen: false });
    };

    render() {
        return (
            <div>
                <img
                    src={CartIcon}
                    alt="Open Cart"
                    onClick={this.handleClick}
                    style={{ width:'20px'}}
                />
                <p className="num-items-in-cart">
                    {this.state.itemsInCart }
                </p>
                {this.state.isPopupOpen && (
                    <div className="cart-popup">
                        <div className="cart-popup-content">
                            <span className="close-cart" onClick={this.handleClose}>
                                &gt;
                            </span>
                            <div className="cart-header">
                                <h1 className="cart-header-text">Cart</h1>
                            </div>
                            <div className="cart-body">
                                This is body cart.
                            </div>
                            {/* Your sign-in form code goes here */}
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
