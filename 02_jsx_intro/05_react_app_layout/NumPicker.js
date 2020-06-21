const getNum = () => {
    return Math.floor(Math.random() * 10) + 1; // Random no b/w 1 to 10
}

class NumPicker extends React.Component {
    render() {
        const num = getNum();
        // Conditionally render with if check and a variable
        let msg;
        if(num === 7){
            msg = 
            <div>
                <h1>Enjoy your lucky day!</h1>
                <p>See you tomorrow.</p>
            </div>
        } else {
            msg = "Try again!"
        }
        return (
            <div>
                <h1>Your number is {num}</h1>
                {/* Conditionally render with ternary operator check */}
                <p>{num === 7 ? 'Congrats!' : 'Unlucky'}</p>
                {num === 7 
                    ? <img src="https://images.unsplash.com/photo-1563299796-b729d0af54a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1825&q=80" width="400"/> 
                    : null
                }
                {/* Conditionally render with boolean check */}
                {num === 7 
                    && <img src="https://images.unsplash.com/photo-1501743411739-de52ea0ce6a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" width="400"/>
                }
                {msg}
            </div>
        )
    }
}
