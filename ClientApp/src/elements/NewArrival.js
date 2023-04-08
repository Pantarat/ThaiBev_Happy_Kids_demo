import React from 'react';
import { Product } from './Product';
import '../styles/NewArrival.css'

export class NewArrival extends React.Component {
    render() {
        return (
            <div className="new-arrival">
                <h1 className="new-arrival-header">New Arrivals</h1>
                <div className="new-arrival-list">
                    <Product productID="1" />
                    <Product productID="2" />
                </div>
            </div>
        );
    }
}