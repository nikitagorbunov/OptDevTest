import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from './redux/reducers/rootReducer';
import App from './App';

import './normalize.css';
import './main.css';
import './styles/button/buttonStyle.css'

const store = createStore(rootReducer)
const root = document.getElementById('root')
const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, root);
