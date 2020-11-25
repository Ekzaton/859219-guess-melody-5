import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Login} from "./login";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Click Replay button for callback`, () => {
  const handleReplayButtonClick = jest.fn();

  const wrapper = shallow(
      <Login
        onReplayButtonClick={handleReplayButtonClick}
        onSubmit={() => {}}
      />
  );

  const replayButton = wrapper.find(`button.replay`);
  replayButton.simulate(`click`);
  expect(handleReplayButtonClick).toHaveBeenCalledTimes(1);
});
