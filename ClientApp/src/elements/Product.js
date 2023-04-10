import React from 'react';
import '../styles/Product.css'


export class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isProdPopupOpen: false,
            selectedColor: props.colors[0],
            selectedSize: props.sizes[0],
            selectedQuantity: 1,
        };
    }

    handleClick = () => {
        this.setState({ isProdPopupOpen: true });
    };

    handleClose = () => {
        this.setState({ isProdPopupOpen: false });
    };

    handleChooseColor = (color) => {
        this.setState({ selectedColor: color });
    }

    handleDropdownMenu = () => {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    handleDropdownOption = (size) => {
        this.setState({ selectedSize: size });
    }

    handleClickOutside = event => {
        if (!event.target.matches('.dropbtn')) {
            const dropdowns = document.getElementsByClassName('dropdown-content');
            for (let i = 0; i < dropdowns.length; i++) {
                const openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    };

    handleInputQuantity = () => {
        const input = document.getElementById('quantity');
        var updatedQuantity = parseInt(input.value);
        if (updatedQuantity >= 1) {
            this.setState({ selectedQuantity: updatedQuantity });
        }
    }

    handleAddToCart = () => {
        this.props.cartHandler(this.props.productCode, this.props.price, this.state.selectedColor, this.state.selectedSize, this.state.selectedQuantity);

        this.setState({ isProdPopupOpen: false });
    }

    componentDidMount() {
        window.addEventListener('click', this.handleClickOutside);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.handleClickOutside);
    }

    render() {
        
        const { productCode, price, colors, sizes } = this.props;
        
        return (
            <div className="product-container">
                <img className="product-img" src={ colors[0].imageUrl } alt={ productCode } />
                <p className="product-txt">I'm a product</p>
                <p>{`${ price }$`}</p>
                <button className="add-to-cart-button" onClick={this.handleClick}>Add to Cart</button>
                {this.state.isProdPopupOpen && (
                    <div className="product-buy">
                        <div className="product-buy-content">
                            <span className="close" onClick={this.handleClose}>
                                &times;
                            </span>
                            <div className="product-preview">
                                <img className="product-preview-img" src={ this.state.selectedColor.imageUrl } alt={ productCode } />
                            </div>
                            <div className="product-details">
                                <div className="product-header">
                                    <h1 className="product-header-text">I'm a product</h1>
                                </div>
                                <div className="product-body">
                                    <p className="product-body-text" id="price">{`${ price }$`}</p>
                                    <p className="product-body-text" id="product-id">{ productCode }</p>
                                    <div>
                                        <p className="product-body-text" id="color-picker">{`Color: ${ this.state.selectedColor.name }`}</p>
                                        <div className="color-choose-container">
                                            {colors.map((color) => (
                                                <div className="btn-container">
                                                    <button type="button" className="btn" id={color.name} onClick={() => this.handleChooseColor(color)}></button>
                                                </div>
                                            ))}
                                        </div>

                                        <p className="product-body-text" id="size-picker">Size</p>
                                        <div className="dropdown">
                                            <button className="dropbtn" onClick={this.handleDropdownMenu}>{ this.state.selectedSize }</button>
                                            <div id="myDropdown" className="dropdown-content">
                                                {sizes.map((size) => (
                                                    <button className="size-option" onClick={() => this.handleDropdownOption(size) }>{size}</button>
                                                )) }
                                            </div>
                                        </div>

                                        <p className="product-body-text" id="quantity-picker">Quantity</p>
                                        <div className="quantity-picker">
                                            <input
                                                type="number"
                                                className="quantity-picker-input"
                                                id="quantity"
                                                min="1"
                                                defaultValue="1"
                                                onChange={this.handleInputQuantity}
                                            />
                                        </div>

                                        <button className="add-to-cart-popup" onClick={this.handleAddToCart}>Add to Cart</button>
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