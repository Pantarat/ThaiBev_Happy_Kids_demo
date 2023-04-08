import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PromotePicturesBanner.css';
import banner1 from '../assets/Banner1.png';
import banner2 from '../assets/Banner2.png';
import banner3 from '../assets/Banner3.png';

export class PromotePicturesBanner extends React.Component {

    constructor(props) {
        super(props)
        this.state = { bannumber: 1 };
    }

    renderBanner = () => {
        if (this.state.bannumber === 1) {
            document.getElementById('imgban1').style.opacity = 1;
            document.getElementById('imgban2').style.opacity = 0;
            document.getElementById('imgban3').style.opacity = 0;
        }

        else if (this.state.bannumber === 2) {
            document.getElementById('imgban1').style.opacity = 0;
            document.getElementById('imgban2').style.opacity = 1;
            document.getElementById('imgban3').style.opacity = 0;
        }

        else if (this.state.bannumber === 3) {
            document.getElementById('imgban1').style.opacity = 0;
            document.getElementById('imgban2').style.opacity = 0;
            document.getElementById('imgban3').style.opacity = 1;
        }
    }

    nextBanner = () => {
        var newNum = this.state.bannumber + 1;
        if (newNum > 3) { newNum = 1; }
        this.setState({ bannumber: newNum });
        this.renderBanner();
    }

    previousBanner = () => {
        var newNum = this.state.bannumber - 1;
        if (newNum < 1) { newNum = 3; }
        this.setState({ bannumber: newNum });
        this.renderBanner();
    }

    bannerChoose = (num) => {
        this.setState({ bannumber: num }, () => {
            this.renderBanner();
        });
    }

    startLoop = () => {
        this.myTimer = setInterval(() => {
            this.nextBanner();
        }, 5000);
    }

    endLoop = () => {
        clearInterval(this.myTimer);
    }

    componentDidMount = () => {
        this.startLoop();
    }

    componentWillUnmount = () => {
        this.endLoop();
    }

    render() {

        return (
            <div className="promo-pictures-banner" id="promo-pictures-banner" onMouseEnter={ this.endLoop } onMouseLeave={ this.startLoop }>
                <div className="imgbanbtn imgbanbtn-prev" id="imgbanbtn-prev" onClick={ this.previousBanner }></div>
                <img className="imgban" id="imgban1" src={banner1} alt="banner1" />
                <img className="imgban" id="imgban2" src={banner2} alt="banner2" />
                <div className="imgban" id="imgban3">
                    <img src={banner3} alt="banner3" />
                    <p className="banner-text"> NEW COLLECTION  </p>
                    <Link to="/shop-collection">
                        <button className="shop-now-button" > SHOP NOW </button>
                    </Link>
                </div>
                <div className="imgbanbtn imgbanbtn-next" id="imgbanbtn-next" onClick={this.nextBanner}></div>
                <div className="banner-choose-button-container">
                    <button className="banner-choose-button" id="banch1" onClick={ () => this.bannerChoose(1) }></button>
                    <button className="banner-choose-button" id="banch2" onClick={ () => this.bannerChoose(2) }></button>
                    <button className="banner-choose-button" id="banch3" onClick={ () => this.bannerChoose(3) }></button>
                </div>
            </div>
        );
    }
}

