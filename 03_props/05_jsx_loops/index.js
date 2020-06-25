class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Actors:</h1>
                <Actor
                    name="Tom Cruise"
                    hobbies={['Piano','Film Making','Dancing']}
                    movies={['MI1','MI2', 'MI3']}
                />
                <Actor
                    name="Brad Pitt"
                    hobbies={['Acting','Film Making','Racing']}
                    movies={['Tibet', 'OUTA']}
                />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
