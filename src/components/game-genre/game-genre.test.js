import React from 'react';
import renderer from 'react-test-renderer';

import {GameGenre} from "./game-genre";

const onChangeQuestion = () => {};

describe(`testing GameGenre render`, () => {
  it(`GameGenre is render correctly`, () => {

    const tree = renderer.create(<GameGenre
      onChangeQuestion={onChangeQuestion}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
