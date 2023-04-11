import React, { Component } from "react";
import '../styles/Cart.css';


export class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPopupOpen: false,
            itemsInCart: 0,
            items: [],
            totalPrice: 0
        };
    }

    removeItem = (item) => {
        const currentItems = this.state.items;
        const updatedItems = currentItems.filter(x => x !== item);

        this.setState({
            items: updatedItems,
            itemsInCart: this.state.itemsInCart - item.quantity,
            totalPrice: this.state.totalPrice - item.quantity * item.price
        }, () => {
            this.props.cartUpdate(item.productCode, item.color, item.size, 0);
            this.render();
        })
    }

    handleClick = () => {
        this.setState({ isPopupOpen: true });
    };

    handleClose = () => {
        this.setState({ isPopupOpen: false });
    };

    handleQuantityChange = (productCode, color, size) => {
        const input = document.getElementById(productCode + color + size);
        var updatedQuantity = parseInt(input.value);
        const existingIndex = this.state.items.findIndex((item) => item.productCode === productCode && item.color.name === color && item.size === size);
        const existingItem = this.state.items[existingIndex];
        if (updatedQuantity >= 1) {
            const updatedItem = {
                ...existingItem,
                quantity: updatedQuantity
            };
            const updatedItems = [...this.state.items];
            updatedItems[existingIndex] = updatedItem;

            var updatedItemQuantity = this.state.itemsInCart - existingItem.quantity + updatedQuantity;
            var updatedPrice = this.state.totalPrice + ((updatedQuantity - existingItem.quantity) * existingItem.price);
            this.setState({
                items: updatedItems,
                itemsInCart: updatedItemQuantity,
                totalPrice: updatedPrice
            });
            this.props.cartUpdate(input.productCode, input.color, input.size, updatedQuantity);
        }
    }


    componentDidUpdate(prevProps) {
        if (prevProps.itemsInCart !== this.props.itemsInCart) {
            this.setState({
                isPopupOpen: this.props.isPopupOpen,
                itemsInCart: this.props.itemsInCart,
                items: this.props.items,
                totalPrice: this.props.totalPrice
                });
        }
    }

    render() {

        return (
            <div>
                <img
                    src="./assets/cart.svg"
                    alt="Open Cart"
                    onClick={this.handleClick}
                    style={{ width:'20px'}}
                />
                <p className="num-items-in-cart">
                    {this.state.itemsInCart }
                </p>
                {this.state.isPopupOpen && (
                    <div className="cart-popup" id="mycartpopup">
                        <div className="cart-popup-content">
                            <span className="close-cart" onClick={this.handleClose}>
                                &gt;
                            </span>
                            <div className="cart-header">
                                <h1 className="cart-header-text">Cart</h1>
                            </div>
                            <div className="cart-body">
                            {this.state.items.map((item) => (
                                <div className="cart-item-container">
                                    <span className="cart-remove-item" onClick={() => this.removeItem(item) }>
                                        &times;
                                    </span>
                                    <div className="cart-product-preview">
                                        <img className="cart-product-preview-img" src={item.color.imageUrl} alt={item.productCode} />
                                    </div>
                                    <div className="cart-product-details">
                                        <p className="cart-product-detail-txt">I'm a product</p>
                                        <p className="cart-product-detail-txt">{`$${item.price}`}</p>
                                        <input
                                            type="number"
                                            className="cart-quantity-picker"
                                            id={ item.productCode + item.color.name + item.size }
                                            min="1"
                                            defaultValue={ item.quantity }
                                            onChange={() => this.handleQuantityChange(item.productCode, item.color.name, item.size)}
                                        />
                                    </div>
                                </div>
                            ))}
                            </div>
                            <div className="cart-summary">
                                <p className="cart-price-text">Subtotal: ${Math.max(this.state.totalPrice,0).toFixed(2)}</p>
                                <a href="/viewcart"><button className="view-cart-button">View Cart</button></a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
