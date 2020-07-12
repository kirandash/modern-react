import React, { Component } from 'react'

class IconList extends Component {
    static defaultProps = {
        options: [
            "angry",
            "anchor",
            "archive",
            "at",
            "archway",
            "baby",
            "bell"
        ]
    };
    constructor(props){
        super(props);
        this.state = { icons: ["bone", "cloud"] };
        this.addIcon = this.addIcon.bind(this);
    }
    addIcon(){
        let idx = Math.floor(Math.random() * this.props.options.length);
        let newIcon = this.props.options[idx];
        // Works but - not recommended to update existing array in state directly
        // let oldIcons = this.state.icons;
        // oldIcons.push(newIcon);
        // this.setState({ icons: oldIcons })
        
        // Recommeded way - Make a copy of array with spread operator and add new item
        console.log([...this.state.icons, newIcon]);
        this.setState({icons: [...this.state.icons, newIcon]})
    }
    render() {
        const icons = this.state.icons.map((i, idx) => <i className={`fas fa-${i}`} key={idx}></i>)
        return (
            <div>
                <h1>8.2 Mutating State the safe way</h1>
                <h1>Icons: {icons}</h1>
                <button onClick={this.addIcon}>Add new Icon</button>
            </div>
        )
    }
}

export default IconList
