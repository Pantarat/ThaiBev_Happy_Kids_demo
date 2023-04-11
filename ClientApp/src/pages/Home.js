import React from 'react';
import { PromotePicturesBanner } from '../elements/PromotePicturesBanner';
import { NewArrival } from '../elements/NewArrival';
import '../styles/home.css';

export class Home extends React.Component {

    render() {

        return (
            <div className="homepage">
                <PromotePicturesBanner />
                <NewArrival cartHandler={this.props.cartHandler} />
                <a href="/shop-collection">
                    <button className="shop-all-button">Shop All</button>
                </a>
                <a className="fixed-socials" target="_blank" rel="noreferrer" href="https://www.facebook.com">
                    <img className="fixed-socials-images" id="fb" src="./assets/fbIcon2.png" alt="Go to facebook"/>
                </a>
                <a className="fixed-socials" target="_blank" rel="noreferrer" href="https://www.pinterest.com">
                    <img className="fixed-socials-images" id="pin" src="./assets/pinterestIcon2.png" alt="Go to pinterest" />
                </a>
                <a className="fixed-socials" target="_blank" rel="noreferrer" href="https://www.instagram.com">
                    <img className="fixed-socials-images" id="ig" src="./assets/igIcon2.png" alt="Go to instagram" />
                </a>
            </div>
        );
    }
}