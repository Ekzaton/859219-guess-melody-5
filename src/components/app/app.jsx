import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import FailTries from "../fail-tries/fail-tries";
import Game from "../game/game";
import Login from "../login/login";
import ResultSuccess from "../result-success/result-success";
import Welcome from "../welcome/welcome";
import questionArtistProp from "../question-artist/question-artist.prop";
import questionGenreProp from "../question-genre/question-genre.prop";

const App = (props) => {
  const {errorsCount, questions} = props;

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
  questions: PropTypes.arrayOf(
      PropTypes.oneOfType([questionArtistProp, questionGenreProp]).isRequired
  ),
};

export default App;
