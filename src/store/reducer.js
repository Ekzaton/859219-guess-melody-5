import {ActionType} from "./action";

import {extend} from "../utils";

const initialState = {
  mistakes: 0,
  step: 0,
  questions: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_STEP:
      let nextStep = state.step + action.payload;

      return extend(state, {
        step: nextStep,
      });

    case ActionType.INCREMENT_MISTAKES:
      return extend(state, {
        mistakes: state.mistakes + action.payload,
      });

    case ActionType.RESET_GAME:
      return extend({}, initialState);

    case ActionType.LOAD_QUESTIONS:
      return extend(state, {
        questions: action.payload,
      });
  }

  return state;
};
