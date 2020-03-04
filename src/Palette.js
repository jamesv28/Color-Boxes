import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class Palette extends Component {

    constructor(props) {
        super(props);
        this.state = {
            level: 500
        }
        this.changeLevel = this.changeLevel.bind(this);
    }

    changeLevel(level) {
        this.setState({
            level
        })
    }

    render() {
        const {
            level
        } = this.state;

        const colorBoxes = this.props.palette.colors[this.state.level].map((color, idx) => (
            <ColorBox 
                background={color.hex} 
                name={color.name}
                key={idx}
            />
        ));
        return (
            <div className="Palette">
                <Slider 
                    step={100}
                    defaultValue={level} 
                    min={100}
                    max={900}
                    onAfterChange={this.changeLevel}
                />
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
            </div>
        )
    }
};

export default Palette;