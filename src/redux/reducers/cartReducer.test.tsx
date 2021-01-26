import React from 'react';
import cart, {ICartState, initialState} from './cartReducer'
import * as act from '../actions/cartAction'

describe('reducer', () => {

  it('addItemsCart action', () => {
    const testItem = {
      id: 1,
      title: 'title',
      price: 500,
      img: 'image',
      description: 'description',
      quantity: undefined
    }

    expect(cart(initialState, act.addItemsCart(testItem, 5))).toEqual({
      cartItems: [{
        id: 1,
        title: 'title',
        price: 500,
        img: 'image',
        description: 'description',
        quantity: 5
      }]
    })
  })

  it('addItemCart action', () => {
    const testItem = {
      id: 1,
      title: 'title',
      price: 500,
      img: 'image',
      description: 'description'
    }
    const testInitialState: ICartState = {
      cartItems: [{
        id: 1,
        title: 'title',
        price: 500,
        img: 'image',
        description: 'description',
        quantity: 1
      }]
    }

    expect(cart(testInitialState, act.addItemCart(testItem))).toEqual({
      cartItems: [{
        id: 1,
        title: 'title',
        price: 500,
        img: 'image',
        description: 'description',
        quantity: 2
      }]
    })
  })

  it('addItemCart action into void state', () => {
    const testItem = {
      id: 1,
      title: 'title',
      price: 500,
      img: 'image',
      description: 'description'
    }

    expect(cart(initialState, act.addItemCart(testItem))).toEqual({
      cartItems: [{
        id: 1,
        title: 'title',
        price: 500,
        img: 'image',
        description: 'description',
        quantity: 1
      }]
    })
  })

  it('subItemCart action', () => {
    const testItem = {
      id: 1,
      title: 'title',
      price: 500,
      img: 'image',
      description: 'description'
    }
    const testInitialState: ICartState = {
      cartItems: [
        {
          id: 1,
          title: 'title',
          price: 500,
          img: 'image',
          description: 'description',
          quantity: 8
        },
        {
          id: 2,
          title: 'title',
          price: 500,
          img: 'image',
          description: 'description',
          quantity: 3
        }
      ]
    }

    expect(cart(testInitialState, act.subItemCart(testItem))).toEqual({
      cartItems: [
        {
          id: 1,
          title: 'title',
          price: 500,
          img: 'image',
          description: 'description',
          quantity: 7
        },
        {
          id: 2,
          title: 'title',
          price: 500,
          img: 'image',
          description: 'description',
          quantity: 3
        }
      ]
    })
  })

  it('removeItemCart action', () => {
    const testInitialState: ICartState = {
      cartItems: [
        {
          id: 1,
          title: 'title',
          price: 500,
          img: 'image',
          description: 'description',
          quantity: 8
        },
        {
          id: 2,
          title: 'title',
          price: 500,
          img: 'image',
          description: 'description',
          quantity: 3
        }
      ]
    }

    expect(cart(testInitialState, act.removeItemCart(1))).toEqual({
      cartItems: [{
        id: 2,
        title: 'title',
        price: 500,
        img: 'image',
        description: 'description',
        quantity: 3
      }]
    })
  })

  it('cleanCart action', () => {
    const testInitialState: ICartState = {
      cartItems: [{
        id: 1,
        title: 'title',
        price: 500,
        img: 'image',
        description: 'description',
        quantity: 1
      }]
    }

    expect(cart(testInitialState, act.cleanCart())).toEqual({
      cartItems: []
    })
  })
});
