import PropTypes from "prop-types";
import React from "react";

import {WelcomeScreen} from "../welcome-screen/welcome-screen";

export const App = (props) => {
  const {gameDuration, errorCount, gameStart} = props;

  return <WelcomeScreen
    gameDuration={gameDuration}
    errorCount={errorCount}
    gameStart={gameStart}
  />;
};

App.propTypes = {
  gameDuration: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  gameStart: PropTypes.func.isRequired
};
