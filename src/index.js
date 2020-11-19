import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

import {createAPI} from "./services/api";

import {fetchQuestionList} from "./store/api-action";
import {reducer} from "./store/reducer";

import App from "./components/app/app";

const api = createAPI();

const store = createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(api))
);

store.dispatch(fetchQuestionList());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
