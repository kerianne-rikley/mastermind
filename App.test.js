import React from 'react';
import App from './App';

import TestRenderer from 'react-test-renderer';

describe('<App />', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});