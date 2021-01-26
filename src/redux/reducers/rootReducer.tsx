import { combineReducers } from 'redux';
import cartReducer from './cartReducer'

const rootReducer = combineReducers({
  cart: cartReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
