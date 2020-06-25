class Actor extends React.Component {
    render(){
        const { name, hobbies } = this.props; // Obj destructuring
        const movies = this.props.movies.map((h,i) => <li key={i}>{h}</li>);

        return (
            <div>
                <h2>{name}</h2>
                <h4>Hobbies: </h4>
                <ul>
                    {hobbies.map((h,i) => <li key={i}>{h}</li>)}
                </ul>
                <h4>Movies: </h4>
                <ul>
                    {movies}
                </ul>
            </div>
        )
    }
}
