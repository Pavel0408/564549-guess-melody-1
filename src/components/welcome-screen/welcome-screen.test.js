import React from 'react';
import renderer from 'react-test-renderer';

import {WelcomeScreen} from './welcome-screen.jsx';

const mock = {
  gameDuration: 5,
  errorCount: 3,
  gameStart() {
    return null;
  }
};

describe(`testing WelcomeScreen render`, () => {
  it(`WelcomeScreen is render correctly`, () => {
    const {gameDuration, errorCount, gameStart} = mock;
    const tree = renderer.create(<WelcomeScreen
      gameDuration={gameDuration}
      errorCount={errorCount}
      gameStart={gameStart}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
