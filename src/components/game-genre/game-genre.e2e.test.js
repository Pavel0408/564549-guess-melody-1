import Adapter from "enzyme-adapter-react-16";
import React from "react";
import {configure, mount} from "enzyme";

import {GameGenre} from "./game-genre";

configure({adapter: new Adapter()});

describe(`testing GameGenre work`, () => {
  it(`submit on game form change question number`, () => {
    const onChangeQuestion = jest.fn();
    const gameGenre = mount(<GameGenre
      onChangeQuestion={onChangeQuestion}
    />
    );

    const gameForm = gameGenre.find(`form`);
    gameForm.simulate(`submit`);
    expect(onChangeQuestion).toHaveBeenCalledTimes(1);
  });
});
