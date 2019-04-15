import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Beer from './pages/Beer'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Beer} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
