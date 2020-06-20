const getWeather = () => {
    const weather = ['Sunny', 'Rainy', 'Cold', 'Windy', 'Moist'];
    return weather[Math.floor(Math.random() * weather.length)]; // Pick a random item from array
}

class JSXIntro extends React.Component {
    render(){
        return (
            <div>
                <h1>Multiplication: {3 * 10.5}</h1>
                <p>Toda'y weather is: {getWeather()}</p>
            </div>
        )
    }
}

ReactDOM.render(<JSXIntro/>, document.getElementById('root'));
