class JSXIntro extends React.Component {
    render(){
        return (
            <div>
                <h1>My Image!</h1>
                <img src="https://images.unsplash.com/photo-1592490440473-b7f824510e50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2098&q=80" width="500" />
            </div>
        ) // JSX must return only one element
    }
}

ReactDOM.render(<JSXIntro/>, document.getElementById('root'));
