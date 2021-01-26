import React from 'react';
import style from './Header.module.css'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {AppState} from '../../redux/reducers/rootReducer';

const Header: React.FC = () => {
  const cartItemsLength: number = useSelector( (state: AppState) => state.cart.cartItems.length )

  return (
    <div className={style.header}>
      <p>Магазин товаров</p>
      <ul>
        <li>
          <NavLink className={style.navLink} to="/">Список товаров</NavLink>
        </li>
        <li>
          <NavLink className={style.navLink} to="/cart">Корзина</NavLink>
        </li>
        { cartItemsLength !== 0 && <div className={style.info}>{cartItemsLength}</div> }
      </ul>
    </div>
  );
}

export default Header;
