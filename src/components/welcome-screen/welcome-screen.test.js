import React from 'react';
import renderer from 'react-test-renderer';

import {WelcomeScreen} from './welcome-screen.jsx';

const mock = {
  gameDuration: 5,
  errorCount: 3,
};

it(`WelcomeScreen is render correctly`, () => {
  const {gameDuration, errorCount} = mock;
  const tree = renderer.create(<WelcomeScreen gameDuration={gameDuration}
    errorCount={errorCount}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
