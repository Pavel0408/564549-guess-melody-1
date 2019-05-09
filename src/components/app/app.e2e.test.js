import Adapter from "enzyme-adapter-react-16";
import React from "react";
import {configure, mount} from "enzyme";

import {App} from "./app";

configure({adapter: new Adapter()});

describe(`testing the App work`, () => {
  it(`click the start button calls the handler`, () => {
    const clickHandler = jest.fn();
    const app = mount(<App
      gameDuration={0}
      errorCount={0}
      gameStart={clickHandler}
    />);

    const startButton = app.find(`button`);
    startButton.simulate(`click`);
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});


