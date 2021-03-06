import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {resetGame} from "../../store/action";

const FailTries = (props) => {
  const {onReplayButtonClick, resetGameAction} = props;

  return (
    <section className="result">
      <div className="result__logo">
        <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/>
      </div>
      <h2 className="result__title">Какая жалость!</h2>
      <p className="result__total result__total--fail">У вас закончились все попытки. Ничего, повезёт в следующий раз!</p>
      <button
        onClick={() => {
          resetGameAction();
          onReplayButtonClick();
        }}
        className="replay"
        type="button"
      >
        Попробовать ещё раз
      </button>
    </section>
  );
};

FailTries.propTypes = {
  onReplayButtonClick: PropTypes.func.isRequired,
  resetGameAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  resetGameAction() {
    dispatch(resetGame());
  },
});

export {FailTries};

export default connect(null, mapDispatchToProps)(FailTries);
