import React from "react";
import TestRenderer from "react-test-renderer";
import { shallow } from "enzyme";

import Attempt from "../Attempt";

describe("<Attempt />", () => {

  let wrapper;

  it('should display a history element', () => {
    wrapper = shallow(
      <Attempt code={[0,0,0,0]} feedback={[0,0,0,0]} />);
    const history0 = wrapper.find(`#history-0`);
    expect(history0.length).toEqual(1);
  });

  it('should display a feedback element', () => {
    wrapper = shallow(
      <Attempt code={[0,0,0,0]} feedback={[0,0,0,0]} />);
    const feedback0 = wrapper.find(`#feedback-0`);
    expect(feedback0.length).toEqual(1);
  });

  it(`should display the correct history colour 0`, () => {
    wrapper = shallow(
      <Attempt code={[0,0,0,0]} feedback={[0,0,0,0]} />);
    const history0 = wrapper.find(`#history-0`).getElement();
    expect(history0.props.style.backgroundColor).toEqual("#1e90ff");
    
  });

  describe("displaysChosenColor", () => {
    const colors = [
      "#1e90ff",
      "#ee82ee",
      "#dc143c",
      "#ff8c00",
      "#ffd700",
      "#228b22"
    ]

    colors.forEach((color, index) => {
      it(`should display the correct history colour ${color} for ${index}`, () => {
        wrapper = shallow(
          <Attempt code={[index,index,index,index]} feedback={[0,0,0,0]} />);
        const history0 = wrapper.find(`#history-0`).getElement();
        expect(history0.props.style.backgroundColor).toEqual(color);
        const history1 = wrapper.find(`#history-1`).getElement();
        expect(history1.props.style.backgroundColor).toEqual(color);
        const history2 = wrapper.find(`#history-2`).getElement();
        expect(history2.props.style.backgroundColor).toEqual(color);
        const history3 = wrapper.find(`#history-3`).getElement();
        expect(history3.props.style.backgroundColor).toEqual(color);
    });

  
  });  it('should display the correct feedback colours', () => {

  });

});
});
