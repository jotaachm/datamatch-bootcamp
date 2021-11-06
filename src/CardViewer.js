import React from 'react';
import App from "./App";
import './CardEditor.css';

class CardViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardNumber: 0,
            side: true,
            nextDisabled: false,
            previousDisabled: true,
        }
    }

    nextCard = () => {
        if (this.state.cardNumber === this.props.cards.length - 2) {
            this.setState({ cardNumber: this.state.cardNumber + 1 })
            this.setState({ nextDisabled: true })
        }
        else {
            this.setState({ cardNumber: this.state.cardNumber + 1 })
            this.setState({ previousDisabled: false })
        }
    };

    previousCard = () => {
        if (this.state.cardNumber == 1) {
            this.setState({ previousDisabled: true })
            this.setState({ cardNumber: this.state.cardNumber - 1 })
        }
        else {
            this.setState({ cardNumber: this.state.cardNumber - 1 })
            this.setState({ nextDisabled: false })
        }
    };

    switchSide = () => this.setState({ side: !this.state.side });

    render() {
        return (
            <div>
                <h2>Card Viewer</h2>
                <h4>Card {this.state.cardNumber + 1}/{this.props.cards.length}</h4>
                <button onClick={this.previousCard} disabled={this.state.previousDisabled}>Previous</button>
                <table>
                    <thead>
                        <tr>
                            <th>{this.state.side ? "Front" : "Back"}</th>
                        </tr>
                    </thead>
                    <tbody onClick={this.switchSide}>
                        {this.state.side ? this.props.cards[this.state.cardNumber].front : this.props.cards[this.state.cardNumber].back}
                    </tbody>
                </table>
                <button onClick={this.nextCard} disabled={this.state.nextDisabled}>Next</button>
                <hr />
                <button onClick={this.props.switchMode}>Go to Card Editor</button>
            </div >
        );
    }
}

export default CardViewer;