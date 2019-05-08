import React from 'react';
import renderer from 'react-test-renderer';

import {App} from './app.jsx';

const mock = {
  gameDuration: 5,
  errorCount: 3,
};

it(`App is render correctly`, () => {
  const {gameDuration, errorCount} = mock;
  const tree = renderer.create(<App gameDuration={gameDuration}
    errorCount={errorCount}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
