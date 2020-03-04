import React, { Component } from 'react';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import 'rc-slider/assets/index.css';
import './Navbar.css';

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            format: 'hex'
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            format: e.target.value
        });
        this.props.handleChange(e.target.value);
    }

    render() {

        const {
            level,
            changeLevel
        } = this.props;

        const {
            format
        } = this.state;

        return (
            <nav className="navbar">
                <div className="logo">
                    <a href="#">React Color Picker</a>
                </div>
                <div className="slider-container">
                    <span>{level}</span>
                    <div className="slider">
                        <Slider 
                            step={100}
                            defaultValue={level} 
                            min={100}
                            max={900}
                            onAfterChange={changeLevel}
                        />
                    </div>
                </div>
                <div className="select-container">
                    <Select 
                        onChange={this.handleChange}
                        value={format}
                    >
                        <MenuItem value="hex">HEX - #fff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(0,0,0)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgba(0,0,0,0.5)</MenuItem>
                    </Select>
                </div>
            </nav>
        )
    }
}

export default Navbar;