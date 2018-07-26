import React, {Component} from 'react';
import store from '../../store.js';

import Products from '../Data/Product.js';
import { addToCart } from '../../ActionCreator/ActionProductList.js'

class ProductList extends Component {
  constructor(){
    super();
    this.addToCart = this.addToCart.bind(this);

    this.state = {
      products: Products
    }
  }

  render() {
    return (
      <div className="App-product-list">
        <ul>
          {this.state.products.map(product =>
            <li id={product.id}>{product.description} <button type="button" className="btn btn-primary" onClick={() => this.addToCart(product)}>Buy</button></li>
          )}
        </ul>
      </div>
    );
  }

  addToCart(product){
    store.dispatch(addToCart(product));
  }
}

export default ProductList;
