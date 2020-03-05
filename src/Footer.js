import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {

        const {
            paletteName,
            emoji
        } = this.props.paletteName;

        return (
            <footer className="footer-container">
                {paletteName}
                <span className="emoji-footer"> { emoji } </span>
            </footer>
        )
    }
}

export default Footer;