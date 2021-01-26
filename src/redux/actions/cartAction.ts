import {ADD_ITEM, ADD_ITEMS, CLEAR_CART, REMOVE_ITEM, SUB_ITEM, TCartActionTypes} from './actionTypes';
import { ICartItem } from '../reducers/cartReducer'

export const addItemsCart = (item: ICartItem, quantity: number): TCartActionTypes => ({
  type: ADD_ITEMS,
  payload: {item , quantity}
});

export const addItemCart = (item: ICartItem): TCartActionTypes => ({
  type: ADD_ITEM,
  payload: item
});

export const subItemCart = (item: ICartItem): TCartActionTypes => ({
  type: SUB_ITEM,
  payload: item
});

export const removeItemCart = (id: number): TCartActionTypes => ({
  type: REMOVE_ITEM,
  payload: id
});

export const cleanCart = (): TCartActionTypes => ({ type: CLEAR_CART });
