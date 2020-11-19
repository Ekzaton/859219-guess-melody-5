import {ActionCreator} from "./action";

export const fetchQuestionList = () => (dispatch, _getState, api) => (
  api.get(`/questions`)
    .then(({data}) => dispatch(ActionCreator.loadQuestions(data)))
);
