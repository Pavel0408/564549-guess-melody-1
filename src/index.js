import React from "react";
import ReactDOM from "react-dom";

import {App} from "./components/app/app";

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
      />,
      document.querySelector(`.main`)
  );
};

init();
