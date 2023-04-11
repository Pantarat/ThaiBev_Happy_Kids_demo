import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './elements/Layout';
import { Home } from "./pages/Home";
import { ShopCollection } from "./pages/ShopCollection";
import { OurStory } from "./pages/OurStory";
import { Contact } from "./pages/Contact";
import { ViewCart } from "./pages/ViewCart";
import SwaggerUI from "swagger-ui-react";
import './custom.css';



class App extends React.Component {
    static displayName = App.name;

    constructor(props) {
        super(props);
        this.state = {
            isPopupOpen: false,
            itemsInCart: 0,
            items: [],
            totalPrice: 0,
        };
        this.cartHandler = this.cartHandler.bind(this);
    }

    cartHandler = (productCode, price, color, size, quantity) => {

        const existingIndex = this.state.items.findIndex((item) => item.productCode === productCode && item.color.name === color.name && item.size === size);
        if (existingIndex !== -1) {
            const existingItem = this.state.items[existingIndex];
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + quantity
            };

            const updatedItems = [...this.state.items];
            updatedItems[existingIndex] = updatedItem;

            this.setState({
                items: updatedItems,
                itemsInCart: this.state.itemsInCart + quantity,
                totalPrice: this.state.totalPrice + price * quantity
            });
        } else {
            const newItem = {
                productCode,
                price,
                color,
                size,
                quantity
            };

            this.setState({
                isPopupOpen: true,
                items: [...this.state.items, newItem],
                itemsInCart: this.state.itemsInCart + quantity,
                totalPrice: this.state.totalPrice + price * quantity
            });
        }
    };

    cartUpdate = (productCode, color, size, quantity) => {
        const existingIndex = this.state.items.findIndex((item) => item.productCode === productCode && item.color.name === color.name && item.size === size);
        if (existingIndex !== -1) {
            const existingItem = this.state.items[existingIndex];
            const updatedQuantity = quantity;
            const updatedPrice = this.state.totalPrice + (existingItem.price * (updatedQuantity - existingItem.quantity));
            const updatedNumItems = this.state.itemsInCart - existingItem.quantity + updatedQuantity;
            const updatedItem = {
                ...existingItem,
                quantity: updatedQuantity
            };
            const updatedItems = [...this.state.items];
            if (updatedQuantity <= 0) {
                updatedItems.splice(existingIndex, 1);
            } else {
                updatedItems[existingIndex] = updatedItem;
            }           
            this.setState({
                items: updatedItems,
                itemsInCart: updatedNumItems,
                totalPrice: updatedPrice
            });
        }
    };

    render() {

        return (
            <div>
                <Layout
                    cartUpdate={this.cartUpdate}
                    isPopupOpen={this.state.isPopupOpen}
                    itemsInCart={this.state.itemsInCart}
                    items={this.state.items}
                    totalPrice={this.state.totalPrice}
                >
                    <Routes>
                        {/*{AppRoutes.map((route, index) => {
                            const { element, ...rest } = route;
                            return <Route key={index} {...rest} element={element} />;
                        })}*/}
                        <Route path="/" element={<Home cartHandler={this.cartHandler} />} />
                        <Route path="/shop-collection" element={<ShopCollection cartHandler={this.cartHandler} />} />
                        <Route path="/our-story" element={<OurStory cartHandler={this.cartHandler} />} />
                        <Route path="/contact" element={<Contact cartHandler={this.cartHandler} />} />
                        <Route path="/viewcart" element={<ViewCart />} />
                        <Route path="/swagger" element={<SwaggerUI />} />
                    </Routes>
                </Layout>
            </div>
        );
    }
}

export default App;
