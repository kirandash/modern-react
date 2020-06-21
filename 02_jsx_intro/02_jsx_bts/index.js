class JSXIntro extends React.Component {
    render(){
        // JSX
        // return (
        //     <h3>Hello Kiran</h3>
        // )
        // JSX equivalent - copy from - https://babeljs.io/repl
        return React.createElement("h3", null, "Hello Kiran");
    }
}

ReactDOM.render(<JSXIntro/>, document.getElementById('root'));
