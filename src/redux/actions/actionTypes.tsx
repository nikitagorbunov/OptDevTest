import { ICartItem } from '../reducers/cartReducer'

export const ADD_ITEMS = 'ADD_ITEMS'
export const ADD_ITEM = 'ADD_ITEM'
export const SUB_ITEM = 'SUB_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const CLEAR_CART = 'CLEAR_CART'

interface IAddItemsAction {
  type: typeof ADD_ITEMS
  payload: {item: ICartItem, quantity: number}
}

interface IAddItemAction {
  type: typeof ADD_ITEM
  payload: ICartItem
}

interface ISubItemAction {
  type: typeof SUB_ITEM
  payload: ICartItem
}

interface IRemoveItemAction {
  type: typeof REMOVE_ITEM
  payload: number
}

interface IClearItemsAction {
  type: typeof CLEAR_CART
}

export type TCartActionTypes = IAddItemAction | ISubItemAction | IRemoveItemAction | IClearItemsAction | IAddItemsAction
