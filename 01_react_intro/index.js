class Hello extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello there!</h1>
                <h1>Namaste!</h1>
                <h1>Hola!!!</h1>
            </div>
        );
    }
}

ReactDOM.render(<Hello />, document.getElementById('root'));