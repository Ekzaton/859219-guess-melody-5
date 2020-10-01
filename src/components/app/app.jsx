import React from "react";
import PropTypes from "prop-types";
import Welcome from "../welcome/welcome";

const App = (props) => {
  const {errorsCount} = props;

  return (
    <Welcome errorsCount={errorsCount}/>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

export default App;
