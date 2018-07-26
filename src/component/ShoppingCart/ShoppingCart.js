import React, {Component} from 'react';

import store from '../../store.js'
import { removeFromCart } from '../../ActionCreator/ActionShoppingCart.js'

class ShoppingCart extends Component {
  constructor(){
    super();
    this.removeFromCart = this.removeFromCart.bind(this);

    this.state = {
      cart: []
    };
  }



  render() {
    return (
      <div className="App-shopping-cart">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul>
                {this.state.cart.map( product =>
                  <li key={product.id}>{product.description} <button type="button" onClick={ () => this.removeFromCart(product)}></button></li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  removeFromCart(product){
    store.dispatch(removeFromCart(product))
  }

}

export default ShoppingCart;
