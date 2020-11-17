import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import {MAX_MISTAKE_COUNT} from "../../const";

import FailTries from "../fail-tries/fail-tries";
import Game from "../game/game";
import Login from "../login/login";
import ResultSuccess from "../result-success/result-success";
import Welcome from "../welcome/welcome";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact
          path="/"
          render={({history}) => (
            <Welcome
              onPlayButtonClick={() => history.push(`/game`)}
              errorsCount={MAX_MISTAKE_COUNT}
            />
          )}
        />
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact
          path="/result-success"
          render={({history}) => (
            <ResultSuccess
              onReplayButtonClick={() => history.push(`/game`)}
            />
          )}
        />
        <Route exact
          path="/fail-tries"
          render={({history}) => (
            <FailTries
              onReplayButtonClick={() => history.push(`/game`)}
            />
          )}
        />
        <Route exact path="/game">
          <Game
            errorsCount={MAX_MISTAKE_COUNT}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {};

export default App;
