import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';

import './Palette.css';

class Palette extends Component {

    constructor(props) {
        super(props);
        this.state = {
            level: 500,
            format: 'hex'
        }
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeLevel(level) {
        this.setState({
            level
        })
    }

    changeFormat(value) {
       this.setState({
           format: value
       }) 
    }

    render() {
        const {
            level,
            format
        } = this.state;

        const {
            colors
        } = this.props.palette;

        const colorBoxes = colors[this.state.level].map((color, idx) => (
            <ColorBox 
                background={color[format]} 
                name={color.name}
                key={idx}
            />
        ));
        return (
            <div className="Palette">
                <Navbar
                    level={level}
                    changeLevel={this.changeLevel}
                    handleChange={this.changeFormat}
                />
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
            </div>
        )
    }
};

export default Palette;