import React from "react";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";

import browserHistory from "../../browser-history";
import {MAX_MISTAKE_COUNT} from "../../const";

import FailTries from "../fail-tries/fail-tries";
import Game from "../game/game";
import Login from "../login/login";
import PrivateRoute from "../private-route/private-route";
import ResultSuccess from "../result-success/result-success";
import Welcome from "../welcome/welcome";

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
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
        <Route exact
          path="/login"
          render={({history}) => (
            <Login
              onReplayButtonClick={() => history.push(`/game`)}
            />
          )}
        />
        <PrivateRoute
          exact
          path="/result-success"
          render={({history}) => {
            return (
              <ResultSuccess
                onReplayButtonClick={() => history.push(`/game`)}
              />
            );
          }}
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
