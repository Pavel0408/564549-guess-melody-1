import React from 'react';
import renderer from 'react-test-renderer';

import {App} from './app.jsx';

const settingsMock = {
  gameDuration: 5,
  errorCount: 3,
  startButtonClickHandler() {
    return null;
  }
};

describe(`testing App render`, () => {
  it(`App is render correctly`, () => {
    const {gameDuration, errorCount, startButtonClickHandler} = settingsMock;
    const tree = renderer.create(<App
      gameDuration={gameDuration}
      errorCount={errorCount}
      startButtonClickHandler={startButtonClickHandler}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
