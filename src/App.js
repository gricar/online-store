import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import FinalPage from './pages/FinalPage';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter basename={ process.env.PUBLIC_URL }>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/cart" component={ Cart } />
            <Route path="/product-details/:productId" component={ ProductDetails } />
            <Route path="/finalpage" component={ FinalPage } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
