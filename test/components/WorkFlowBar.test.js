import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import WorkFlowBar from '../../src/components/WorkFlowBar';

function setup(stage,size='small'){

  const props = {
    stage,
    size
  };

  return shallow(<WorkFlowBar {...props} />);
}

describe( 'WorkFlowBar', () => {

  it('seven title items in the WorkFlowBar', () => {
    const wrapper = setup('SENT','large');
    expect(wrapper.find('span').length).toBe(6);
  });
  
});