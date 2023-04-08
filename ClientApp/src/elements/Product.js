import React from 'react';
import '../styles/Product.css'
import productImg from '../assets/productsImg/Product1.png';


export class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isProdPopupOpen: false,
        };
    }

    handleClick = () => {
        this.setState({ isProdPopupOpen: true });
    };

    handleClose = () => {
        this.setState({ isProdPopupOpen: false });
    };

    render() {
        return (
            <div className="product-container">
                <img className="product-img" src={productImg} alt="product" />
                <p className="product-txt">I'm a product</p>
                <p>{`${20.99}$`}</p>
                <button className="add-to-cart-button" onClick={this.handleClick}>Add to Cart</button>
                {this.state.isProdPopupOpen && (
                    <div className="product-buy">
                        <div className="product-buy-content">
                            <span className="close" onClick={this.handleClose}>
                                &times;
                            </span>
                            <div className="product-preview">
                                <img className="product-preview-img" src={productImg} alt="product" />
                            </div>
                            <div className="product-details">
                                <div className="product-header">
                                    <h1 className="product-header-text">I'm a product</h1>
                                </div>
                                <div className="product-body">
                                    <p className="product-body-text" id="price">{`${20.99}$`}</p>
                                    <p className="product-body-text" id="product-id">{`SKU:00001`}</p>
                                    <div>
                                        <p className="product-body-text" id="color-picker">{`Color: ${"Terracota"}`}</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}