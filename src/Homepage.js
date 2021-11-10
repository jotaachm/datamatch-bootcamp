import React from 'react';
import App from "./App";
import './CardEditor.css';

import { Link } from 'react-router-dom'

class Homepage extends React.Component {
    render() {
        return (
            <div>
                <h2>Homepage</h2>
                <Link to="/editor" className="switchButton">Go to Card Editor</Link>
                <Link to="/viewer" className="switchButton">Go to Card Viewer</Link>
            </div>
        )
    };
};

export default Homepage;
