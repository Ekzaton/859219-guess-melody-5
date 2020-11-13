import React from "react";
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";

import {ActionCreator} from "../../store/action";

import {GameType} from '../../const';

import Mistakes from "../mistakes/mistakes";
import QuestionArtist from '../question-artist/question-artist';
import QuestionGenre from '../question-genre/question-genre';

import withAudioPlayer from "../../hocs/with-audio-player/with-audio-player";
import withUserAnswer from "../../hocs/with-user-answer/with-user-answer";

import questionArtistProp from "../question-artist/question-artist.prop";
import questionGenreProp from "../question-genre/question-genre.prop";

const QuestionArtistWrapped = withAudioPlayer(QuestionArtist);
const QuestionGenreWrapped = withAudioPlayer(withUserAnswer(QuestionGenre));

const Game = (props) => {
  const {questions, step, onUserAnswer, resetGame, mistakes} = props;
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
        <QuestionArtistWrapped
          question={question}
          onAnswer={onUserAnswer}
        >
          <Mistakes count={mistakes}/>
        </QuestionArtistWrapped>
      );
    case GameType.GENRE:
      return (
        <QuestionGenreWrapped
          question={question}
          onAnswer={onUserAnswer}
        >
          <Mistakes count={mistakes}/>
        </QuestionGenreWrapped>
      );
  }

  return <Redirect to="/"/>;
};

Game.propTypes = {
  questions: PropTypes.arrayOf(
      PropTypes.oneOfType([questionArtistProp, questionGenreProp]).isRequired
  ),
  step: PropTypes.number.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired,
  mistakes: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  step: state.step,
  mistakes: state.mistakes,
  questions: state.questions,
});

const mapDispatchToProps = (dispatch) => ({
  resetGame() {
    dispatch(ActionCreator.resetGame());
  },
  onUserAnswer(question, answer) {
    dispatch(ActionCreator.incrementStep());
    dispatch(ActionCreator.incrementMistake(question, answer));
  },
});

export {Game};
export default connect(mapStateToProps, mapDispatchToProps)(Game);
