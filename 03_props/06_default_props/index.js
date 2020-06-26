class App extends React.Component {
    render() {
        return (
            <div>
                <Hello 
                    to="Kiran Dash" 
                    from="Tom Cruise"
                    year={2020}
                    data={[1,2,3,4,5]}
                    isRead={true}
                    dots={4}
                    img="https://images.unsplash.com/photo-1543332164-6e82f355badc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                />
                <Hello 
                    to="Super man" 
                    year={2019}
                    data={[6,7,8,9,10]}
                    isRead={false}
                />
                <Hello 
                    to="Thor" 
                    from="Thanos"
                    year={2018}
                    data={[66, 77]}
                    isRead
                /> {/* Booleans by default are set to True */}
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
