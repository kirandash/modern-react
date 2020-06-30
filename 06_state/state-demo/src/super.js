// Run code in browser console - General class - Not React
class Component {
    constructor() {
        console.log("Inside component constructor!");
    }
}

class Game extends Component {
    constructor() {
        // If we comment super() and create instance of Game. it will throw error: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        super();
        console.log("Inside game constructor");
    }
}

let chess = new Game();
