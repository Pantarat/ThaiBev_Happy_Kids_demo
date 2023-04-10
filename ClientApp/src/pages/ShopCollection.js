import React from 'react';
import { Filter } from '../elements/Filter';
import { ProductsGrid } from '../elements/ProductsGrid';
import '../styles/ShopCollection.css';

export class ShopCollection extends React.Component {

    render() {
        return (
            <div>
                <h1 className="shop-collection-title">Shop Collection</h1>
                <div className="shop-collection-contents">
                    <Filter />
                    <ProductsGrid cartHandler={this.props.cartHandler} />
                </div>
            </div>
        );
    }
}