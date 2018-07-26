import React, {Component} from 'react';

import trash from './trahs.png'

import store from '../../store.js'
import { removeFromCart } from '../../ActionCreator/ActionShoppingCart.js'

class ShoppingCart extends Component {
  constructor(){
    super();
    this.removeFromCart = this.removeFromCart.bind(this);

    this.state = {
      cart: []
    };

    store.subscribe( () => {
      this.setState({
        cart: store.getState().cart
      })
    });

  }

  removeFromCart(product){
    store.dispatch(removeFromCart(product))
  }

  render() {
    return (
      <div className="App-shopping-cart">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul>
                {this.state.cart.map( product =>
                  <li key={product.id}>{product.description} <img src={trash} alt="" onClick={() => this.removeFromCart(product)}/>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>


      </div>
    );
  }

}

export default ShoppingCart;
