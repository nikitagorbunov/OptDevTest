import {ADD_ITEM, ADD_ITEMS, CLEAR_CART, REMOVE_ITEM, SUB_ITEM, TCartActionTypes} from '../actions/actionTypes';

export interface ICartItem {
  id: number;
  title: string;
  price: number;
  img: string;
  description: string;
  quantity?: number;
}

export interface ICartState {
  cartItems: ICartItem[]
}

export const initialState: ICartState = {
  cartItems: []
};

export default function cart(state = initialState, action: TCartActionTypes) {
  switch (action.type) {
    case ADD_ITEMS:
      return {
        ...state,
        cartItems: addItemsCart(state.cartItems, action.payload)
      }

    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemCart(state.cartItems, action.payload)
      }

    case SUB_ITEM:
      return {
        ...state,
        cartItems: subItemCart(state.cartItems, action.payload)
       }

    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemCart(state.cartItems, action.payload)
      }

    case CLEAR_CART:
      return {
        ...state,
        cartItems: []
      }

    default:
      return state;
    }
}

const addItemsCart = (cartItems: ICartItem[], cartItemToAdd: {item: ICartItem, quantity: number}): ICartItem[] => {
  const {item, quantity} = cartItemToAdd

  const existingCartItem: ICartItem | undefined = cartItems.find(
    (cartItem: ICartItem) => cartItem.id === item.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem: ICartItem) =>
      cartItem.id === item.id
        ? {...cartItem, quantity: cartItem.quantity && cartItem.quantity + quantity}
        : cartItem
    );
  }

  return [{...item, quantity: quantity}, ...cartItems];
}

const addItemCart = (cartItems: ICartItem[], cartItemToAdd: ICartItem): ICartItem[] => {
  const existingCartItem: ICartItem | undefined = cartItems.find(
    (cartItem: ICartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem: ICartItem) =>
      cartItem.id === cartItemToAdd.id
        ? {...cartItem, quantity: cartItem.quantity && cartItem.quantity + 1}
        : cartItem
    );
  }

  return [{...cartItemToAdd, quantity: 1}, ...cartItems];
}

const subItemCart = (cartItems: ICartItem[], cartItemToAdd: ICartItem): ICartItem[] => {
  return cartItems.map((cartItem: ICartItem) =>
    cartItem.id === cartItemToAdd.id
      ? {...cartItem, quantity: cartItem.quantity && cartItem.quantity - 1}
      : cartItem
  );
}

const removeItemCart = (cartItems: ICartItem[], id: number): ICartItem[] => cartItems.filter((cartItem: ICartItem) => cartItem.id !== id);
