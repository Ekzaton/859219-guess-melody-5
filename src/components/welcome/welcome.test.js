import React from "react";
import renderer from "react-test-renderer";
import Welcome from "./welcome";

it(`Should Welcome render correctly`, () => {
  const tree = renderer
    .create(<Welcome
      errorsCount={3}
      onPlayButtonClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
