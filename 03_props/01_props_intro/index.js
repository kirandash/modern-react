class App extends React.Component {
    render() {
        return (
            <div>
                <Hello to="Kiran Dash" from="Tom Cruise"/>
                <Hello to="Super man" from="Bat man" />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
