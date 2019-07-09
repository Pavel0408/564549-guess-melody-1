import PropTypes from "prop-types";
import React, {PureComponent} from "react";

import {WelcomeScreen} from "../welcome-screen/welcome-screen";
import {QuestionType} from "../../constants/question-type";
import {GameArtist} from "../game-artist/game-artist";
import {GameGenre} from "../game-genre/game-genre";

export class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      questionNumber: -1
    };

    this.onStartButtonClick = this.onStartButtonClick.bind(this);
  }

  onStartButtonClick() {
    console.log(1);
    const {questions} = this.props;
    let questionNumber = this.state.questionNumber;
    questionNumber++;
    console.log(questionNumber);
    if (questionNumber >= questions.length) {
      questionNumber = -1;
    }
    this.setState(() => {
      return {
        questionNumber
      };
    });
  }

  screenSwitch({questions, questionNumber, gameDuration, errorCount}) {
    if (questions && questions[questionNumber]) {
      console.log(questions[questionNumber].type);
      console.log(QuestionType[questions[questionNumber].type]);
      const type = QuestionType[questions[questionNumber].type];
      switch (type) {
        case `genre`: {
          return <GameGenre/>;
        }
        case `artist`: {
          return <GameArtist/>;
        }
      }
    }

    return <WelcomeScreen
      gameDuration={gameDuration}
      errorCount={errorCount}
      onStartButtonClick={this.onStartButtonClick}
    />;
  }

  render() {
    const {gameDuration, errorCount, questions} = this.props;
    const {questionNumber} = this.state;
    return this.screenSwitch({gameDuration, errorCount, questions, questionNumber});
  }
}

App.propTypes = {
  gameDuration: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  startButtonClickHandler: PropTypes.func.isRequired,
  questions: PropTypes.array
};
