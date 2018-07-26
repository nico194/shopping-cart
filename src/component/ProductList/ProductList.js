import React, {Component} from 'react';
import store from '../../store';

import Products from '../Data/Product';
import { addToCart } from '../../ActionCreator/ActionProductList'

class ProductList extends Component {
  constructor(){
    super();
    this.addToCart = this.addToCart.bind(this);

    this.state = {
      products: Products
    }
  }

  addToCart(product){
    store.dispatch(addToCart(product));
  }

  render() {
    return (
      <div className="App-product-list">
        <ul>
          {this.state.products.map(product =>
            <li key={product.id}>{product.description} <button type="button" className="btn btn-primary" onClick={() => this.addToCart(product)}>Buy</button></li>
          )}
        </ul>
      </div>
    );
  }

}

export default ProductList;
