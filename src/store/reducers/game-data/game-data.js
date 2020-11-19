import {ActionType} from "../../action";

import {extend} from "../../../utils";

const initialState = {
  questions: [],
};

export const gameData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_QUESTIONS:
      return extend(state, {
        questions: action.payload,
      });
  }

  return state;
};
