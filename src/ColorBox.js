import React, { Component } from 'react';
import './ColorBox.css';

class ColorBox extends Component {
    render() {
        const {
            background,
            name
        } = this.props;
        return (
            <div style={{background}} className="color-box">
                <span>MMORE</span>
                <span>{name}</span>
            </div>
        )
    }
};

export default ColorBox;