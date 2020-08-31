import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Reports from './Reports';
import Settings from './Settings'

const Main = () => (
  <Switch>
    <Route exact path="/Reports" component={Reports} />
    <Route exact path="/Settings" component={Settings} />
  </Switch>
)

export default Main;