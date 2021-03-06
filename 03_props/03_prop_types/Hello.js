class Hello extends React.Component {
    render(){
        console.log(this.props);
        const props = this.props;
        const dots = props.dots ? ".".repeat(props.dots) : ""; // repeat: a JS fn that can be called on a string to make it repeat
        const imgPath = props.img;
        return (
            <div>
                <p>Hi {props.to}! From: {props.from}{dots}</p>
                {imgPath && <img src={imgPath} width="200" />}
            </div>
        )
    }
}
