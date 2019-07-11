import React from 'react';
import renderer from 'react-test-renderer';

import {GameArtist} from "./game-artist";


const onChangeQuestion = () => {};

describe(`testing GameArtist render`, () => {
  it(`GameArtist is render correctly`, () => {

    const tree = renderer.create(<GameArtist
      onChangeQuestion={onChangeQuestion}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
