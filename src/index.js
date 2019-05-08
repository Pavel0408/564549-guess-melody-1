import React from "react";
import ReactDOM from "react-dom";

import {App} from "./components/app/app";

const init = () => {
  const settings = {
    gameDuration: 5,
    errorCount: 3,
    gameStart() {
      return null;
    }
  };

  ReactDOM.render(
      <App
        errorCount={settings.errorCount}
        gameDuration={settings.gameDuration}
        gameStart={settings.gameStart}
      />,
      document.querySelector(`.main`)
  );
};

init();
