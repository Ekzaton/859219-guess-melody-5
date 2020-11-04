import {ActionType} from "./action";

import {extend} from "../utils";

const initialState = {
  mistakes: 0,
  step: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_STEP:
      return extend(state, {
        step: state.step + action.payload,
      });

    case ActionType.INCREMENT_MISTAKES:
      return extend(state, {
        mistakes: state.mistakes + action.payload,
      });
  }

  return state;
};
