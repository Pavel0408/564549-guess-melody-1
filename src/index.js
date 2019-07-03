import React from "react";
import ReactDOM from "react-dom";

import {App} from "./components/app/app";
import {questions} from "./mock/questions";

const init = () => {
  const settings = {
    gameDuration: 5,
    errorCount: 3,
    startButtonClickHandler() {
      return null;
    }
  };

  ReactDOM.render(
      <App
        errorCount={settings.errorCount}
        gameDuration={settings.gameDuration}
        startButtonClickHandler={settings.startButtonClickHandler}
        questions={questions}
      />,
      document.querySelector(`.main`)
  );
};

init();
