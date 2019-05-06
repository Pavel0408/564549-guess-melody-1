import React from "react";
import ReactDOM from "react-dom";

import {App} from "./components/app/app";

const init = () => {
  const settings = {
    gameDuration: 5,
    errorCount: 3,
  };

  ReactDOM.render(
      <App
        errorCount={settings.errorCount}
        gameDuration={settings.gameDuration}
      />,
      document.querySelector(`.main`)
  );
};

init();
