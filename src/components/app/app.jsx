import PropTypes from "prop-types";
import React from "react";

import {WelcomeScreen} from "../welcome-screen/welcome-screen";

export const App = (props) => {
  const {gameDuration, errorCount, startButtonClickHandler} = props;

  return <WelcomeScreen
    gameDuration={gameDuration}
    errorCount={errorCount}
    startButtonClickHandler={startButtonClickHandler}
  />;
};

App.propTypes = {
  gameDuration: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  startButtonClickHandler: PropTypes.func.isRequired
};
