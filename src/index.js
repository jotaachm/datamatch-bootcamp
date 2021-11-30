import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import firebase from 'firebase/app';
import { createStore, combineReducers } from 'redux';
import 'firebase/database';
import {
    ReactReduxFirebaseProvider,
    firebaseReducer
} from 'react-redux-firebase';

import { composeWithDevTools } from 'redux-devtools-extension';

const firebaseConfig = {
    apiKey: "AIzaSyCqExw3ULlnNdgXvq791bfJ4uU0P3LCmLA",
    authDomain: "datamatch-bootcamp-jota.firebaseapp.com",
    databaseURL: "https://datamatch-bootcamp-jota-default-rtdb.firebaseio.com",
    projectId: "datamatch-bootcamp-jota",
    storageBucket: "datamatch-bootcamp-jota.appspot.com",
    messagingSenderId: "51576323340",
    appId: "1:51576323340:web:d3192bf463c47ebbdc9d29"
};

firebase.initializeApp(firebaseConfig);

// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer
    // firestore: firestoreReducer // <- needed if using firestore
})

// Create store with reducers and initial state
const store = createStore(rootReducer, composeWithDevTools());

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users'
    // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
    // enableClaims: true // Get custom claims along with the profile
};

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch
    // createFirestoreInstance // <- needed if using firestore
}


ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root'));


