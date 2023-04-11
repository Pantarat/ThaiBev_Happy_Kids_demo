import React from 'react';
import { Product } from './Product';
import '../styles/NewArrival.css'

export class NewArrival extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            loading: true
        };
    }

    componentDidMount = () => {
        this.populateProductsData();
    }

    render() {

        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.state.products.slice(0,3).map((product) => (
                <Product
                    cartHandler={this.props.cartHandler}
                    key={product.productID}
                    productCode={product.productCode}
                    type={product.type}
                    price={product.price}
                    colors={product.colors}
                    sizes={product.sizes}
                />
            ))

        return (
            <div className="new-arrival">
                <h1 className="new-arrival-header">New Arrivals</h1>
                <div className="new-arrival-list">
                    {contents}
                </div>
            </div>
        );
    }

    async populateProductsData() {
        const response = await fetch('api/Product');
        const data = await response.json();
        this.setState({ products: data, loading: false });
    }
}