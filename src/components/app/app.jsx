import React from "react";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";

import browserHistory from "../../browser-history";
import {MAX_MISTAKE_COUNT, AppRoute} from "../../const";

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
          path={AppRoute.ROOT}
          render={({history}) => (
            <Welcome
              onPlayButtonClick={() => history.push(AppRoute.GAME)}
              errorsCount={MAX_MISTAKE_COUNT}
            />
          )}
        />
        <Route exact
          path={AppRoute.LOGIN}
          render={({history}) => (
            <Login
              onReplayButtonClick={() => history.push(AppRoute.GAME)}
            />
          )}
        />
        <PrivateRoute
          exact
          path={AppRoute.RESULT_SUCCESS}
          render={({history}) => {
            return (
              <ResultSuccess
                onReplayButtonClick={() => history.push(AppRoute.GAME)}
              />
            );
          }}
        />
        <Route exact
          path={AppRoute.FAIL_TRIES}
          render={({history}) => (
            <FailTries
              onReplayButtonClick={() => history.push(AppRoute.GAME)}
            />
          )}
        />
        <Route exact path={AppRoute.GAME}>
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
