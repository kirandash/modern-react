// class Hello extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Hello there!</h1>
//                 <h1>Namaste!</h1>
//                 <h1>Hola!!!</h1>
//             </div>
//         ); // returning JSX expression inside render method
//     }
// }

function Hello() {
    return (
        <div>
            <h1>Hello there!</h1>
            <h1>Namaste!</h1>
            <h1>Hola!!!</h1>
        </div>
    ) // returning JSX expression inside the fn component
}

ReactDOM.render(<Hello />, document.getElementById('root'));