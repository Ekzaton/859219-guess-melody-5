import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withAudioPlayer from "./with-audio-player";

configure({adapter: new Adapter()});

const MockComponent = () => <div/>;
const MockComponentWrapped = withAudioPlayer(MockComponent);

it(`Should`, () => {
  const wrapper = shallow(<MockComponentWrapped/>);
  expect(wrapper.state().activePlayerId).toEqual(0);
});
