import React, { Component } from 'react';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import 'rc-slider/assets/index.css';
import './Navbar.css';

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            format: 'hex',
            open: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this);
    }

    handleChange(e) {
        this.setState({
            format: e.target.value,
            open: true
        });
        this.props.handleChange(e.target.value);
    }

    closeSnackbar() {
        this.setState({
            open: false
        });

    }

    render() {

        const {
            level,
            changeLevel
        } = this.props;

        const {
            format,
            open
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
                <Snackbar
                    anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
                    open={open}
                    onClose={this.closeSnackbar}
                    autoHideDuration={5000}
                    message={<span id="message-content">Format Changed: {format.toUpperCase()} </span>}
                    ContentProps={{
                        'aria-describedby': "message-content",
                        "role": "alert"
                    }}
                    action={[
                        <IconButton 
                            onClick={ this.closeSnackbar } 
                            key="close" 
                            color="inherit" 
                            aria-label="close"
                            >
                            <CloseIcon />
                        </IconButton>
                    ]}
                />
            </nav>
        )
    }
}

export default Navbar;