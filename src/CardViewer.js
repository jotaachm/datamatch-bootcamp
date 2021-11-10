import React from 'react';
import App from "./App";
import './CardEditor.css';

import { Link } from 'react-router-dom'

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

    nextCard = () => this.setState({ cardNumber: this.state.cardNumber + 1 });

    previousCard = () => this.setState({ cardNumber: this.state.cardNumber - 1 });

    switchSide = () => this.setState({ side: !this.state.side });

    render() {
        return (
            <div>
                <h2>Card Viewer</h2>
                <h4 style={{ display: "block", textAlign: "center" }}>Card {this.state.cardNumber + 1} out of {this.props.cards.length}</h4>
                <button
                    onClick={this.previousCard}
                    disabled={this.state.cardNumber <= 0}
                    className="nextPrevious">
                    {"<"}
                </button>

                <table className="flashcardsView">
                    <thead>
                        <tr>
                            <th>{this.state.side ? "Front" : "Back"}</th>
                        </tr>
                    </thead>
                    <tbody onClick={this.switchSide}>
                        <td>{this.state.side ? this.props.cards[this.state.cardNumber].front : this.props.cards[this.state.cardNumber].back}</td>
                    </tbody>
                </table>

                <button
                    onClick={this.nextCard}
                    disabled={this.state.cardNumber >= this.props.cards.length - 1}
                    className="nextPrevious">
                    {">"}
                </button>

                <hr />

                <Link to="/editor" className="switchButton">Go to Card Editor</Link>
            </div >
        );
    }
}

export default CardViewer;