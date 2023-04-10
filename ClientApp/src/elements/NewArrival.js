import React from 'react';
import { Product } from './Product';
import '../styles/NewArrival.css'

export class NewArrival extends React.Component {
    render() {
        return (
            <div className="new-arrival">
                <h1 className="new-arrival-header">New Arrivals</h1>
                <div className="new-arrival-list">
                    <Product
                        cartHandler={this.props.cartHandler}
                        key="1"
                        productID="1"
                        type="T-shirt"
                        price={19.99}
                        colors={[
                        {
                            name: "Green",
                            imageUrl: "./assets/productsImg/Product1.png"
                        },
                        {
                            name: "Terracota",
                            imageUrl: ""
                        }]}
                        sizes={[
                            "12-18 months",
                            "18-24 months",
                            "2 years",
                            "3 years"
                        ]}
                    />
                </div>
            </div>
        );
    }
}