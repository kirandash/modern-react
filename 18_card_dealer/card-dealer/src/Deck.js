import React, { Component } from 'react'
import axios from 'axios'
const API_BASE_URL = 'https://deckofcardsapi.com/api/deck';

class Deck extends Component {
    constructor(props){
        super(props);
        this.state = { deck: null, drawn: [] }
        this.getCard = this.getCard.bind(this);
    }
    async componentDidMount() {
        let deck = await axios.get(`${API_BASE_URL}/new/shuffle/`);
        this.setState({ deck: deck.data });
    }
    async getCard(){
        // make request using deck id
        try {
            let cardRes = await axios.get(`${API_BASE_URL}/${this.state.deck.deck_id}/draw/`);
            if(!cardRes.data.success) { // or remaining: 0 or cards.length = 0
                throw new Error("No card remaining!")
            } // on throwing error, subsequent lines won't execute
            console.log(cardRes.data);
            // set state using new card info from API
            let card = cardRes.data.cards[0];
            this.setState(st => ({
                drawn: [
                    ...st.drawn,
                    {
                    id: card.code, 
                    image: card.image, 
                    name: `${card.value} of ${card.suit}`
                    }
                ]
            }))
        }
        catch(err) {
            alert(err);
        }
    }

    render() {
        return (
            <div>
                <h1>Card Dealer</h1>
                <button onClick={this.getCard}>Get Card!</button>
            </div>
        )
    }
}

export default Deck
