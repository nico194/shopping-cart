import React, { Component } from 'react';
import './App.css';
import Header from './component/Header/Header.js';
import Navbar from './component/Navbar/Navbar.js';
import ProductList from './component/ProductList/ProductList.js';
import ShoppingCart from './component/ShoppingCart/ShoppingCart.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        <div className="row">
          <div className="col-8">
            <ProductList />
          </div>
          <div className="col-4">
            <ShoppingCart />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
