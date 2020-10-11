import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import FailTries from "../fail-tries/fail-tries";
import Game from "../game/game";
import Login from "../login/login";
import QuestionArtist from "../question-artist/question-artist";
import QuestionGenre from "../question-genre/question-genre";
import ResultSuccess from "../result-success/result-success";
import Welcome from "../welcome/welcome";

const App = (props) => {
  const {errorsCount, questions} = props;
  const [firstQuestion, secondQuestion] = questions;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact
          path="/"
          render={({history}) => (
            <Welcome
              onPlayButtonClick={() => history.push(`/game`)}
              errorsCount={errorsCount}
            />
          )}
        />
        <Route exact path="/dev-artist">
          <QuestionArtist
            question={secondQuestion}
            onAnswer={() => {}}
          />
        </Route>
        <Route exact path="/dev-genre">
          <QuestionGenre
            question={firstQuestion}
            onAnswer={() => {}}
          />
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/result-success">
          <ResultSuccess/>
        </Route>
        <Route exact path="/fail-tries">
          <FailTries/>
        </Route>
        <Route exact path="/game">
          <Game
            errorsCount={errorsCount}
            questions={questions}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export default App;
