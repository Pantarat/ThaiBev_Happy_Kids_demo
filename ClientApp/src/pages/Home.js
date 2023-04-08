import React from 'react';
import { PromotePicturesBanner } from '../elements/PromotePicturesBanner';
import { NewArrival } from '../elements/NewArrival';
import fbIcon from "../assets/fbIcon2.png";
import igIcon from "../assets/igIcon2.png";
import pinIcon from "../assets/pinterestIcon2.png";
import '../styles/home.css';

export class Home extends React.Component {

    render() {
        return (
            <div className="homepage">
                <PromotePicturesBanner />
                <NewArrival />
                <a href="/shop-collection">
                    <button className="shop-all-button">Shop All</button>
                </a>
                <a className="fixed-socials" target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <img className="fixed-socials-images" id="fb" src={fbIcon} alt="Go to facebook"/>
                </a>
                <a className="fixed-socials" target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <img className="fixed-socials-images" id="pin" src={pinIcon} alt="Go to pinterest" />
                </a>
                <a className="fixed-socials" target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <img className="fixed-socials-images" id="ig" src={igIcon} alt="Go to instagram" />
                </a>
            </div>
        );
    }
}