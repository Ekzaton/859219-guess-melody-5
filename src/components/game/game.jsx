import React from "react";
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";

import {ActionCreator} from "../../store/action";
import {GameType} from '../../const';

import ArtistQuestion from '../question-artist/question-artist';
import GenreQuestion from '../question-genre/question-genre';

import withActivePlayer from "../../hocs/with-active-player/with-active-player";

const ArtistQuestionWrapped = withActivePlayer(ArtistQuestion);
const GenreQuestionWrapped = withActivePlayer(GenreQuestion);

const Game = (props) => {
  const {questions, step, onUserAnswer, resetGame} = props;
  const question = questions[step];

  if (step >= questions.length || !question) {
    resetGame();

    return (
      <Redirect to="/"/>
    );
  }

  switch (question.type) {
    case GameType.ARTIST:
      return (
        <ArtistQuestionWrapped
          question={question}
          onAnswer={onUserAnswer}
        />
      );
    case GameType.GENRE:
      return (
        <GenreQuestionWrapped
          question={question}
          onAnswer={onUserAnswer}
        />
      );
  }

  return <Redirect to="/"/>;
};

Game.propTypes = {
  questions: PropTypes.array.isRequired,
  step: PropTypes.number.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  step: state.step,
});

const mapDispatchToProps = (dispatch) => ({
  resetGame() {
    dispatch(ActionCreator.resetGame());
  },
  onUserAnswer() {
    dispatch(ActionCreator.incrementStep());
  },
});

export {Game};
export default connect(mapStateToProps, mapDispatchToProps)(Game);
