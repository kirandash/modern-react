import React, { Component } from 'react'

import Navbar from "./Navbar";
import ColorBox from './ColorBox'

import './Palette.css' // Make sure our style comes after rc-slider css so overwriting works

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = { level: 500 };
        this.changeLevel = this.changeLevel.bind(this)
    }
    changeLevel(level) {
        this.setState({ level })
    }
    render() {
        const { colors } = this.props.palette;
        const { level } = this.state;
        // const colorBoxes = this.props.colors.map(color => (
        //   <ColorBox background={color.color} name={color.name} />  
        // ))
        const colorBoxes = colors[level].map(color => (
            <ColorBox background={color.hex} name={color.name} />
        ))
        return (
            <div className='Palette'>
                {/* <div className='slider'>
                    <Slider
                        defaultValue={level}
                        min={100}
                        max={900}
                        step={100}
                        onAfterChange={this.changeLevel}
                    />
                </div> */}
                {/* Navbar goes here */}
                <Navbar level={level} changeLevel={this.changeLevel} />
                <div className='Palette-colors'>
                    {/* Bunch of color boxes */}
                    {colorBoxes}
                </div>
                {/* Footer goes here */}
            </div>
        )
    }
}

export default Palette
