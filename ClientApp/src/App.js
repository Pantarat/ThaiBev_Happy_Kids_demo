import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './elements/Layout';
import { Home } from "./pages/Home";
import { ShopCollection } from "./pages/ShopCollection";
import { OurStory } from "./pages/OurStory";
import { Contact } from "./pages/Contact";
import SwaggerUI from "swagger-ui-react";
import './custom.css';



class App extends React.Component {
    static displayName = App.name;

    constructor(props) {
        super(props);
        this.state = {
            itemsInCart: 0,
            items: [],
            totalPrice: 0,
        };
        this.cartHandler = this.cartHandler.bind(this);
    }

    cartHandler = (productCode, price, color, size, quantity) => {
        const newItem = {
            productCode,
            price,
            color,
            size,
            quantity,
        };
        this.setState({
            items: [...this.state.items, newItem],
            itemsInCart: this.state.itemsInCart + 1,
            totalPrice: this.state.totalPrice + price * quantity,
        });
    };

    render() {

        return (
            <div>
                <Layout
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
                        <Route path="/swagger" element={<SwaggerUI />} />
                    </Routes>
                </Layout>
            </div>
        );
    }
}

export default App;
