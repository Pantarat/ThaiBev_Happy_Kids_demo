import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import { LoginMenu } from './LoginMenu';
import { Cart } from './Cart';

export class Navbar extends React.Component {
    render() {

        return (
            <div className="navbar">
                <div style={{ flex: '1' }}></div>
                <div className="navigator">
                    <div className="navlink-container">
                        <Link to="/" className="navlink" id="home">Home</Link>
                    </div>
                    <div className="navlink-container">
                        <Link to="/shop-collection" className="navlink" id="shopcol">Shop Collection</Link>
                    </div>
                    <div className="navlink-container">
                        <Link to="/our-story" className="navlink" id="shopcol">Our Story</Link>
                    </div>
                    <div className="navlink-container">
                        <Link to="/contact" className="navlink" id="shopcol">Contact</Link>
                    </div>
                    
                </div>
                <div className="interact-box">
                    <div className="login">
                        <LoginMenu />
                    </div>
                    <div className="shop-cart">
                        <Cart />
                    </div>
                </div>
            </div>
        );
    }
}