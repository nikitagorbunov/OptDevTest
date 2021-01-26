import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import Main from './components/main/Main';
import Header from './components/header/Header';

describe('renders the header and main', () => {
  it("renders the header", () => {
    const result = shallow(<App />).contains(<Header />);
    expect(result).toBeTruthy();
  });

  it("renders the main", () => {
    const result = shallow(<App />).contains(<Main />);
    expect(result).toBeTruthy();
  });
})
