import Adapter from "enzyme-adapter-react-16";
import React from "react";
import {configure, mount} from "enzyme";

import {GameArtist} from "./game-artist";

configure({adapter: new Adapter()});

describe(`testing GameArtist work`, () => {
  it(`change on artist input change question number`, () => {
    const onChangeQuestion = jest.fn();
    const gameGenre = mount(<GameArtist
      onChangeQuestion={onChangeQuestion}
    />
    );

    const artistInput = gameGenre.find(`.artist__input`).first();
    artistInput.simulate(`change`);
    expect(onChangeQuestion).toHaveBeenCalledTimes(1);
  });
});
