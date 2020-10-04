import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import FailTries from "../fail-tries/fail-tries";
import Login from "../login/login";
import QuestionArtist from "../question-artist/question-artist";
import QuestionGenre from "../question-genre/question-genre";
import ResultSuccess from "../result-success/result-success";
import Welcome from "../welcome/welcome";

const App = (props) => {
  const {errorsCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Welcome errorsCount={errorsCount}/>
        </Route>
        <Route exact path="/dev-artist">
          <QuestionArtist/>
        </Route>
        <Route exact path="/dev-genre">
          <QuestionGenre/>
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
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

export default App;
