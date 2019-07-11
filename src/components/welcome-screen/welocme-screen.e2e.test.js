import Adapter from "enzyme-adapter-react-16";
import React from "react";
import {configure, mount} from "enzyme";


import {WelcomeScreen} from "./welcome-screen";

configure({adapter: new Adapter()});

describe(`testing WelcomeScreen work`, () => {
  it(`click the start button calls the handler`, () => {
    const onChangeQuestion = jest.fn();
    const settingsMock = {
      gameDuration: 5,
      errorCount: 3
    };
    const {gameDuration, errorCount} = settingsMock;
    const gameGenre = mount(<WelcomeScreen
      onChangeQuestion={onChangeQuestion}
      gameDuration={gameDuration}
      errorCount={errorCount}
    />
    );

    const welcomeButton = gameGenre.find(`.welcome__button`);
    welcomeButton.simulate(`click`);
    expect(onChangeQuestion).toHaveBeenCalledTimes(1);
  });
});
