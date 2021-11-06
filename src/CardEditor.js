import React from "react";
import App from "./App";
import './CardEditor.css';

class CardEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { front: '', back: '' };
    }

    addCard = () => {
        this.props.addCard(this.state);
        this.setState({ front: '', back: '' });
    }

    deleteCard = index => this.props.deleteCard(index);

    handleChange = event => this.setState({ [event.target.name]: event.target.value })

    render() {
        const cards = this.props.cards.map((card, index) => {
            return (
                <tr key={index}>
                    <td>{card.front}</td>
                    <td>{card.back}</td>
                    <td>
                        <button onClick={() => this.deleteCard(index)}>Delete card</button>
                    </td>
                </tr>
            )
        });

        return (
            <div>
                <h2>Card Editor</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Front</th>
                            <th>Back</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>{cards}</tbody>
                </table>
                <br />
                <input
                    name="front"
                    onChange={this.handleChange}
                    placeholder="Front of the card"
                    value={this.state.front}
                />
                <input
                    name="back"
                    onChange={this.handleChange}
                    placeholder="Back of the card"
                    value={this.state.back} />
                <button onClick={this.addCard}>Add card</button>
                <hr />
                <button onClick={this.props.switchMode}>Go to Card Viewer</button>
            </div>
        );
    }
}

export default CardEditor;