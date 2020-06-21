class Hello extends React.Component {
    render(){
        console.log(this.props); // Object of props to and from
        const props = this.props;
        return (
            <div>
                {/* <p>Hi {this.props.to}! From: {this.props.from}</p> */}
                <p>Hi {props.to}! From: {props.from}</p>
            </div>
        )
    }
}
