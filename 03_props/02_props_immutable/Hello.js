class Hello extends React.Component {
    render(){
        // this.props.from = "Obama"; // Error: Cannot assign to read only property 'from' of object
        this.props.age = 25; // Error: Cannot add property age, object is not extensible
        const props = this.props;
        return (
            <div>
                <p>Hi {props.to}! From: {props.from}</p>
            </div>
        )
    }
}
