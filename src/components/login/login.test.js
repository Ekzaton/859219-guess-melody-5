import React from "react";
import renderer from "react-test-renderer";
import {Login} from "./login";

it(`Should Login render correctly`, () => {
  const tree = renderer
    .create(
        <Login
          onReplayButtonClick={() => {}}
          onSubmit={() => {}}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
