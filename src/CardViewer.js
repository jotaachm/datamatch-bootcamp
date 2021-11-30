import React from 'react';
import App from "./App";
import './CardEditor.css';

import { Link, withRouter } from 'react-router-dom';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

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
        if (!isLoaded(this.props.cards)) {
            return <div>Loading...</div>;
        }

        if (isEmpty(this.props.cards)) {
            return <div>Page not found</div>
        }
        return (
            <div>
                <h2>{this.props.name}</h2>
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

                <Link to="/" className="switchButton">Go to Home</Link>
            </div >
        );
    }
};

const mapStateToProps = (state, props) => {
    console.log(state);
    const deck = state.firebase.data[props.match.params.deckId];
    const name = deck && deck.name;
    const cards = deck && deck.cards;
    return { cards: cards, name: name };
}

export default compose(
    withRouter,
    firebaseConnect(props => {
        console.log('props', props);
        const deckId = props.match.params.deckId;
        return [{
            path: `/Flashcards/${deckId}`, storeAs: deckId
        }];
    }),
    connect(mapStateToProps),
)(CardViewer);