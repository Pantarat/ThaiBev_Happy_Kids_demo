import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Navbar } from './Navbar';
import { PromoBanner } from './PromoBanner';
import { FooterNavbar } from './FooterNavbar';
import '../styles/Layout.css';

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <div>
                <PromoBanner />
                <div className="happy-kids-titlecard">
                    happy kids
                </div>
                <Navbar />
                <Container>
                    {this.props.children}
                </Container>
                <FooterNavbar />
            </div>
        );
    }
}
