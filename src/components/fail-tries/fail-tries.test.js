import React from "react";
import renderer from "react-test-renderer";
import {FailTries} from "./fail-tries";

it(`Should FailTries render correctly`, () => {
  const tree = renderer
    .create(
        <FailTries
          onReplayButtonClick={() => {}}
          resetGameAction={() => {}}
        />

    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
