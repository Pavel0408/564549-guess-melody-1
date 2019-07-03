import PropTypes from "prop-types";
import React, {PureComponent} from "react";

import {WelcomeScreen} from "../welcome-screen/welcome-screen";
import {QuestionType} from "../../constants/question-type";

export class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      question: -1
    };

    this.onStartButtonClick = this.onStartButtonClick.bind(this);
  }

  onStartButtonClick() {
    const {questions} = this.props;
    let question = this.state.question;
    question++;
    if (question >= questions.length) {
      question = -1;
    }
    this.setState(() => {
      return {
        question
      };
    });
  }

  screenSwitch({questions, questionNumber, gameDuration, errorCount}) {
    if (questions && questions[questionNumber]) {
      const type = QuestionType[questions[questionNumber].type];
      switch (type) {
        case `genre`: {
          return <GenreQuestionScreen/>;
        }
        case `artist`: {
          return <ArtistQuestionScreen/>;
        }
      }
    }

    return <WelcomeScreen
      gameDuration={gameDuration}
      errorCount={errorCount}
      startButtonClickHandler={this.onStartButtonClick}
    />;
  }

  render() {
    const {gameDuration, errorCount, questions} = this.props;

    return this.screenSwitch({gameDuration, errorCount, questions});
  }
}

App.propTypes = {
  gameDuration: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  startButtonClickHandler: PropTypes.func.isRequired,
  questions: PropTypes.array
};
