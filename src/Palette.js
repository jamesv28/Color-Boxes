import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Palette.css';

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

        const {
            colors
        } = this.props.palette;

        const colorBoxes = colors[this.state.level].map((color, idx) => (
            <ColorBox 
                background={color.hex} 
                name={color.name}
                key={idx}
            />
        ));
        return (
            <div className="Palette">
                <div className="slider">
                    <Slider 
                        step={100}
                        defaultValue={level} 
                        min={100}
                        max={900}
                        onAfterChange={this.changeLevel}
                    />
                </div>
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
            </div>
        )
    }
};

export default Palette;