import PropTypes from "prop-types";
import React from "react";

import {WelcomeScreen} from "../welcome-screen/welcome-screen";

export const App = (props) => {
  const {gameTime, errorCount} = props;

  return <WelcomeScreen time={gameTime} errorCount={errorCount}/>;
};

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired
}
