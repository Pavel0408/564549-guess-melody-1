import React from 'react';
import renderer from 'react-test-renderer';

import {App} from './app.jsx';

const settingsMock = {
  gameDuration: 5,
  errorCount: 3,
  gameStart() {
    return null;
  }
};

describe(`testing App render`, () => {
  it(`App is render correctly`, () => {
    const {gameDuration, errorCount, gameStart} = settingsMock;
    const tree = renderer.create(<App
      gameDuration={gameDuration}
      errorCount={errorCount}
      gameStart={gameStart}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
