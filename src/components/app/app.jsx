import React from "react";
import Welcome from "../welcome/welcome";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {errorsCount} = props;

  return (
    <Welcome errorsCount={errorsCount}/>
  );
};

export default App;
