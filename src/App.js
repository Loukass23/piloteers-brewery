import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Beer from './pages/Beer'
import BeerDetails from './components/BeerDetails'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Beer} />
            <Route path='/beer/:id' component={BeerDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
