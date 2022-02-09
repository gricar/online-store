import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/cart" component={ Cart } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
