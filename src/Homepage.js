import React from 'react';
import { Link } from 'react-router-dom';
import { firebaseConnect, isLoaded } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

class Homepage extends React.Component {
    render() {
        if (!isLoaded(this.props.homepage)) {
            return <div>Loading...</div>;
        }

        const decks = Object.keys(this.props.homepage).map(deckId => {
            return (
                <div key={deckId}>
                    <Link to={`/viewer/${deckId}`} className="switchButton">{this.props.homepage[deckId].name}</Link>
                </div>
            );
        });

        return (
            <div>
                <h2>Homepage</h2>
                <Link to="/editor" className="switchButton">Create a new flashcards deck!</Link>
                <hr />
                <h2>Flashcards</h2>
                {decks}
            </div>
        )
    };
};

const mapStateToProps = state => {
    return { homepage: state.firebase.data.homepage };
};

export default compose(
    firebaseConnect(['/homepage']),
    connect(mapStateToProps),
)(Homepage);