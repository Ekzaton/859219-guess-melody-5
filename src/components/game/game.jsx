import React from "react";
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";

import {incrementStep, incrementMistake, resetGame} from "../../store/action";

import {GameType, AppRoute, MAX_MISTAKE_COUNT} from '../../const';

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
  const {questions, step, onUserAnswer, mistakes} = props;
  const question = questions[step];

  if (mistakes >= MAX_MISTAKE_COUNT) {
    return (
      <Redirect to={AppRoute.FAIL_TRIES}/>
    );
  }

  if (step >= questions.length || !question) {
    return (
      <Redirect to={AppRoute.RESULT_SUCCESS}/>
    );
  }

  switch (question.type) {
    case GameType.ARTIST:
      return (
        <QuestionArtistWrapped
          key={step}
          question={question}
          onAnswer={onUserAnswer}
        >
          <Mistakes count={mistakes}/>
        </QuestionArtistWrapped>
      );
    case GameType.GENRE:
      return (
        <QuestionGenreWrapped
          key={step}
          question={question}
          onAnswer={onUserAnswer}
        >
          <Mistakes count={mistakes}/>
        </QuestionGenreWrapped>
      );
  }

  return <Redirect to={AppRoute.ROOT}/>;
};

Game.propTypes = {
  questions: PropTypes.arrayOf(
      PropTypes.oneOfType([questionArtistProp, questionGenreProp]).isRequired
  ),
  step: PropTypes.number.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  mistakes: PropTypes.number.isRequired,
};

const mapStateToProps = ({GAME, DATA}) => ({
  step: GAME.step,
  mistakes: GAME.mistakes,
  questions: DATA.questions,
});

const mapDispatchToProps = (dispatch) => ({
  resetGameAction() {
    dispatch(resetGame());
  },
  onUserAnswer(question, answer) {
    dispatch(incrementStep());
    dispatch(incrementMistake(question, answer));
  },
});

export {Game};
export default connect(mapStateToProps, mapDispatchToProps)(Game);
