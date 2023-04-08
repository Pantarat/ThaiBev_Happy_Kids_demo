import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Layout.css';

export class FooterNavbar extends Component {
    static displayName = FooterNavbar.name;

    render() {
        return (
            <div className="footer-ofpage">
                <h1 className="footer-head">
                    happy kids
                </h1>
                <div className="footer-more-details">
                    <div className="footer-pages">
                        <Link to="/" className="navlink-footer" id="home">Home</Link>
                        <Link to="/shop-collection" className="navlink-footer" id="shopcol">Shop Collection</Link>
                        <Link to="/our-story" className="navlink-footer" id="shopcol">Our Story</Link>
                        <Link to="/contact" className="navlink-footer" id="shopcol">Contact</Link>
                    </div> 
                    <div className="contacts-container">
                        website contacts
                    </div>
                    <div className="footer-extra-pages">
                        <Link to="/" className="navlink-footer" id="shipNReturn">Shipping & Returns</Link>
                        <Link to="/" className="navlink-footer" id="policy">Store Policy</Link>
                        <Link to="/" className="navlink-footer" id="paymeth">Payment Methods</Link>
                        <Link to="/" className="navlink-footer" id="faq">FAQ</Link>
                    </div>
                </div>
            </div>
        );
    }
}
