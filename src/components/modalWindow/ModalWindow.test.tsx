import React from 'react';
import { shallow } from 'enzyme';
import ModalWindow from './ModalWindow';

describe('ModalWindow', () => {

  it('contains content', () => {
    const result = shallow(<ModalWindow content={<p>testStr</p>} close={() => {}}/>).contains(<p>testStr</p>);
    expect(result).toBeTruthy();
  });
})
