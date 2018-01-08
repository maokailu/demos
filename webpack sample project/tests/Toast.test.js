import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Toast from '../app/components/Toast2';
describe('A suite', function() {
  it('should render to static HTML', function() {
    expect(render(Toast.info('Bar')).text()).toEqual('');
  });
});
