import CardEditor from './CardEditor';
import React from 'react';
import CardViewer from './CardViewer';
import Homepage from './Homepage';

import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Switch>
      <Route exact path="/editor">
        <CardEditor />
      </Route>

      <Route exact path="/">
        <Homepage></Homepage>
      </Route>

      <Route exact path="/viewer/:deckId">
        <CardViewer />
      </Route>

      <Route>
        <div>Page not found!</div>
      </Route>
    </Switch>
  );
};

export default App;
