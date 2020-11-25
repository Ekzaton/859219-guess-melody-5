import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {FailTries} from "./fail-tries";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Click Replay button for callback`, () => {
  const handleReplayButtonClick = jest.fn();
  const handleResetAction = jest.fn();

  const wrapper = shallow(
      <FailTries
        resetGameAction={handleResetAction}
        onReplayButtonClick={handleReplayButtonClick}
      />
  );

  const replayButton = wrapper.find(`button.replay`);
  replayButton.simulate(`click`);
  expect(handleReplayButtonClick).toHaveBeenCalledTimes(1);
  expect(handleResetAction).toHaveBeenCalledTimes(1);
});
