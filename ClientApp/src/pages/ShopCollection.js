import React from 'react';
import { Filter } from '../elements/Filter';
import { ProductsGrid } from '../elements/ProductsGrid';
import '../styles/ShopCollection.css';

export class ShopCollection extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            queryurl: 'api/Product'
        }
    }

    handleFilterChange = (selectedType = "All", minPrice = 15, maxPrice = 30, filterColor = "", selectedSizes = []) => { 
        var newQueryurl = "api/Product/shop-collection";
        var queryString = "?";
        if (selectedType !== "All") {
            queryString = queryString + `Collection=${selectedType}&`;
        }

        queryString = queryString + `Price=${minPrice}-${maxPrice}&`;

        if (filterColor !== "") {
            queryString = queryString + `Color=${filterColor}&`;
        }
        if (selectedSizes.length !== 0) {
            queryString = queryString + "Size=";
            selectedSizes.forEach((size) => {
                queryString = queryString + `${size},`;
            })
        }
        if (queryString !== "?") {
            queryString = queryString.slice(0, -1);
            newQueryurl = newQueryurl + queryString;
        }
        this.setState({
            queryurl: newQueryurl
        });
    }

    render() {
        return (
            <div className="shop-collection">
                <h1 className="shop-collection-title">Shop Collection</h1>
                <div className="shop-collection-contents">
                    <Filter handleFilterChange={this.handleFilterChange} />
                    <ProductsGrid cartHandler={this.props.cartHandler} queryurl={this.state.queryurl} />
                </div>
            </div>
        );
    }
}