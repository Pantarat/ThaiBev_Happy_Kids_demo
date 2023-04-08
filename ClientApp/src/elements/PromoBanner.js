import React from 'react';
import '../styles/PromoBanner.css';

export class PromoBanner extends React.Component {

    render() {
        var textToggle = true;

        return (
            <div className="promo-banner">
                {textToggle ? "Free Shipping Over $50" : "Get 10% Off - Use Coupon Code HAPPY123"}
            </div>
        );
    }
}