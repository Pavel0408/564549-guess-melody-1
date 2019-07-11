import React from "react";
import ReactDOM from "react-dom";

import {App} from "./components/app/app";
import {questions} from "./mock/questions";
import {Settings} from "./mock/settings";

const init = () => {


  ReactDOM.render(
      <App
        errorCount={Settings.errorCount}
        gameDuration={Settings.gameDuration}
        questions={questions}
      />,
      document.querySelector(`.main`)
  );
};

init();
