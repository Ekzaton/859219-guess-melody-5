import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import {GameType} from '../../const';
import ArtistQuestion from '../question-artist/question-artist';
import GenreQuestion from '../question-genre/question-genre';
import withActivePlayer from "../../hocs/with-active-player/with-active-player";

const ArtistQuestionWrapped = withActivePlayer(ArtistQuestion);
const GenreQuestionWrapped = withActivePlayer(GenreQuestion);

class Game extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
    };
  }

  render() {
    const {questions} = this.props;
    const {step} = this.state;
    const question = questions[step];

    if (step >= questions.length || !question) {
      return (
        <Redirect to="/"/>
      );
    }

    switch (question.type) {
      case GameType.ARTIST:
        return (
          <ArtistQuestionWrapped
            question={question}
            onAnswer={() => {
              this.setState((prevState) => ({
                step: prevState.step + 1,
              }));
            }}
          />
        );
      case GameType.GENRE:
        return (
          <GenreQuestionWrapped
            question={question}
            onAnswer={() => {
              this.setState((prevState) => ({
                step: prevState.step + 1,
              }));
            }}
          />
        );
    }

    return <Redirect to="/"/>;
  }
}

Game.propTypes = {
  questions: PropTypes.array.isRequired,
};

export default Game;
