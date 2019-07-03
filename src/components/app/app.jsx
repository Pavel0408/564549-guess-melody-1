import PropTypes from "prop-types";
import React, {PureComponent} from "react";

import {WelcomeScreen} from "../welcome-screen/welcome-screen";

export class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      question: -1
    };

    this.onStartButtonClick = this.onStartButtonClick.bind(this);
  }

  onStartButtonClick() {
    const questions = this.props;
    let question = this.state.question;
    question++;
    if (question > questions.length) {
      question = -1;
    }
    this.setState(() => {
      return {
        question
      };
    });
  }

  screenSwitch({qustions, questionNumber, gameDuration, errorCount}) {
    if (qustions && qustions[questionNumber]) {
      return QurstionType[qustions[questionNumber].tupe];
    }

    return <WelcomeScreen
      gameDuration={gameDuration}
      errorCount={errorCount}
      startButtonClickHandler={this.onStartButtonClick}
    />;
  }

  render() {
    const {gameDuration, errorCount} = this.props;

    return this.screenSwitch({gameDuration, errorCount});
  }
}

App.propTypes = {
  gameDuration: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  startButtonClickHandler: PropTypes.func.isRequired
};
