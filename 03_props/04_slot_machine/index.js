class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Slot Machines!</h1>
                <Machine
                    s1="x"
                    s2="y"
                    s3="z"
                />
                <Machine
                    s1="y"
                    s2="y"
                    s3="y"
                />
                <Machine
                    s1="x"
                    s2="z"
                    s3="z"
                />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
