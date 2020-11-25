import React from "react";
import renderer from "react-test-renderer";
import {ResultSuccess} from "./result-success";

describe(`Should WinScreen render correctly`, () => {
  describe(`With 3 questions`, () => {
    it(`With 0 mistake`, () => {
      const tree = renderer
        .create(
            <ResultSuccess
              questionsCount={3}
              mistakesCount={0}
              onReplayButtonClick={() => {}}
              resetGameAction={() => {}}
            />
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    it(`With 1 mistake`, () => {
      const tree = renderer
        .create(
            <ResultSuccess
              questionsCount={3}
              mistakesCount={1}
              onReplayButtonClick={() => {}}
              resetGameAction={() => {}}
            />
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe(`With 2 questions`, () => {
    it(`With 0 mistake`, () => {
      const tree = renderer
        .create(
            <ResultSuccess
              questionsCount={2}
              mistakesCount={0}
              onReplayButtonClick={() => {}}
              resetGameAction={() => {}}
            />
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    it(`With 1 mistake`, () => {
      const tree = renderer
        .create(
            <ResultSuccess
              questionsCount={2}
              mistakesCount={1}
              onReplayButtonClick={() => {}}
              resetGameAction={() => {}}
            />
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
