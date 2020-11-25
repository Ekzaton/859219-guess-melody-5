import React from "react";
import {configure, shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import QuestionGenre from "./question-genre";

configure({adapter: new Adapter()});

const mock = {
  question: {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `path`,
        genre: `rock`,
      },
      {
        src: `path`,
        genre: `jazz`,
      },
      {
        src: `path`,
        genre: `jazz`,
      },
      {
        src: `path`,
        genre: `blues`,
      },
    ],
  },
};

it(`When user answers genre question form is not sent`, () => {
  const {question} = mock;
  const onAnswer = jest.fn();
  const genreQuestion = shallow(
      <QuestionGenre
        onAnswer={onAnswer}
        question={question}
        renderPlayer={() => {}}
        onChange={() => {}}
        userAnswers={[false, false, false, false]}
      >
        <React.Fragment />
      </QuestionGenre>
  );

  const form = genreQuestion.find(`form`);
  const formSendPrevention = jest.fn();
  form.simulate(`submit`, {preventDefault: formSendPrevention});
  expect(onAnswer).toHaveBeenCalledTimes(1);
  expect(formSendPrevention).toHaveBeenCalledTimes(1);
});

it(`Click on user answer for callback`, () => {
  const {question} = mock;
  const onAnswer = jest.fn((...args) => [...args]);
  const userAnswer = [false, true, false, false];

  const genreQuestion = mount(
      <QuestionGenre
        onAnswer={onAnswer}
        question={question}
        renderPlayer={() => {}}
        onChange={() => {}}
        userAnswers={userAnswer}
      >
        <React.Fragment />
      </QuestionGenre>
  );

  const form = genreQuestion.find(`form`);
  const inputTwo = genreQuestion.find(`input`).at(1);
  inputTwo.simulate(`change`, {target: {checked: true}});
  form.simulate(`submit`, {preventDefault() {}});
  expect(onAnswer).toHaveBeenCalledTimes(1);
  expect(onAnswer.mock.calls[0][0]).toEqual(void 0);
  expect(genreQuestion.find(`input`).map((it) => it.prop(`checked`))).toEqual(userAnswer);
});
