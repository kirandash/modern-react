import React, { Component } from 'react'

class SuperProps extends Component {
    constructor(props){
        super(); // super is used to call the constructor of parent class before calling constructor of child class
        console.log(this.props); // Will be undefined
        // To get access to props that are being passed in to the component, it must be passed in super()
        // super(props);
        // console.log(this.props);
    }

    render() {
        return (
            <div>
                <h1>Super Props</h1>
                {/* this.props in render will work because react automatically defines props for us in render method. Thus, we have access to props anywhere in class SuperProps ex: in render method but not in constructor */}
                <p>{this.props.animal}</p>
                <p>{this.props.breed}</p>
            </div>
        )
    }
}

export default SuperProps
