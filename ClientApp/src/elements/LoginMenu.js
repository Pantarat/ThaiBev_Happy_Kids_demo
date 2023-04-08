import React, { Component } from "react";
import ProfileIcon from '../assets/ProfileIcon.png';
import '../styles/LoginMenu.css';


export class LoginMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPopupOpen: false,
        };
    }

    handleClick = () => {
        this.setState({ isPopupOpen: true });
    };

    handleClose = () => {
        this.setState({ isPopupOpen: false });
    };

    render() {
        return (
            <div>
                <img
                    src={ ProfileIcon }
                    alt="Click to sign in"
                    onClick={this.handleClick}
                />
                {this.state.isPopupOpen && (
                    <div className="signin-popup">
                        <div className="signin-popup-content">
                            <span className="close" onClick={this.handleClose}>
                                &times;
                            </span>
                            <div className="login-page">
                                <h1 className="signup-header">Sign Up</h1>
                            </div>
                            {/* Your sign-in form code goes here */}
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
