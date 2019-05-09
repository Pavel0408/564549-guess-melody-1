import React from 'react';
import renderer from 'react-test-renderer';

import {WelcomeScreen} from './welcome-screen.jsx';

const settingsMock = {
  gameDuration: 5,
  errorCount: 3,
  startButtonClickHandler() {
    return null;
  }
};

describe(`testing WelcomeScreen render`, () => {
  it(`WelcomeScreen is render correctly`, () => {
    const {gameDuration, errorCount, startButtonClickHandler} = settingsMock;
    const tree = renderer.create(<WelcomeScreen
      gameDuration={gameDuration}
      errorCount={errorCount}
      startButtonClickHandler={startButtonClickHandler}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
