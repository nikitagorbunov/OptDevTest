import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { AppState } from '../../redux/reducers/rootReducer'
import Catalog from '../catalog/Catalog';
import Cart from '../cart/Cart';

const Main: React.FC = () => {
  const cartItems = useSelector( (state: AppState) => state.cart.cartItems )
  console.log('store', cartItems)

  return (
    <Switch>
      <Route path="/" exact component={Catalog} />
      <Route path="/cart"  component={Cart} />
    </Switch>
  );
};

export default Main;
