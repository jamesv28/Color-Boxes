import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';

class Navbar extends Component {

    render() {

        const {
            level,
            changeLevel
        } = this.props;

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
            </nav>
        )
    }
}

export default Navbar;