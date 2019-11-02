import React from "react";
import TestRenderer from "react-test-renderer";
import { shallow } from "enzyme";

import Entry from "../Entry";

describe("<Entry />", () => {
  it("renders correctly", () => {
    const tree = TestRenderer.create(<Entry />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe("entry button", () => {
    // I'm using enzyme here instead of testing-library because it
    // supports getting properties better

    let wrapper;
    let entryButton;

    beforeAll(() => {
      wrapper = shallow(<Entry id={0} />);
    });

    it("exists", () => {
      entryButton = wrapper.find("#entry-button-0").getElement();
      expect(entryButton).toBeDefined();
    });

    it("toggles through the options when clicked", () => {
      const colors = [
        "#1e90ff",
        "#ee82ee",
        "#dc143c",
        "#ff8c00",
        "#ffd700",
        "#228b22"
      ];
      colors.forEach(color => {
        entryButton = wrapper.find("#entry-button-0").getElement();
        expect(entryButton.props.color).toEqual(color);
        entryButton.props.onPress();
      });
    });
  });
});
