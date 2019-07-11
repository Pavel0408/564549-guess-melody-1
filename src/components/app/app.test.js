import React from 'react';
import renderer from 'react-test-renderer';

import {App} from './app.jsx';

const settingsMock = {
  gameDuration: 5,
  errorCount: 3
};

describe(`testing App render`, () => {
  it(`App is render correctly`, () => {
    const {gameDuration, errorCount} = settingsMock;
    const tree = renderer.create(<App
      gameDuration={gameDuration}
      errorCount={errorCount}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
