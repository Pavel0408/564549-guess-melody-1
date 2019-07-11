import React from 'react';
import renderer from 'react-test-renderer';

import {WelcomeScreen} from './welcome-screen.jsx';

const settingsMock = {
  gameDuration: 5,
  errorCount: 3
};

const onChangeQuestion = () => {};

describe(`testing WelcomeScreen render`, () => {
  it(`WelcomeScreen is render correctly`, () => {
    const {gameDuration, errorCount} = settingsMock;
    const tree = renderer.create(<WelcomeScreen
      gameDuration={gameDuration}
      errorCount={errorCount}
      onChangeQuestion={onChangeQuestion}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
