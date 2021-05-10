import React from "react";
import TestRenderer from "react-test-renderer";
import { shallow } from "enzyme";

import Entry from "../Entry";

describe("<Entry />", () => {

  const handlePressMock = jest.fn(); // Just an empty function

  it("renders correctly", () => {
    const renderedEntry = TestRenderer.create(
      <Entry id={0} choice="0" handlePress={handlePressMock} />).toJSON();
    expect(renderedEntry).toMatchSnapshot();
  });

  describe("entry button", () => {
    // I'm using enzyme here instead of testing-library because it
    // supports getting properties better

    let wrapper;
    let entryButton;

    const fakeId = 0;
    const fakeChoice = "3";

    beforeAll(() => {
      wrapper = shallow(
        <Entry id={fakeId} handlePress={handlePressMock} choice={fakeChoice} />);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("exists", () => {
      entryButton = wrapper.find(`#entry-button-${fakeId}`).getElement();
      expect(entryButton).toBeTruthy();
    });

    it("executes the handlePress function when clicked", () => {
      entryButton = wrapper.find(`#entry-button-${fakeId}`).getElement();
      entryButton.props.onPress();
      expect(handlePressMock).toHaveBeenCalledTimes(1);
      // Check the arguments passed to mock function 
      expect(handlePressMock).toHaveBeenCalledWith(fakeId); 
    });

    it("displays the choice as a title", () => {
      entryButton = wrapper.find(`#entry-button-${fakeId}`).getElement();
      expect(entryButton.props.title).toEqual(fakeChoice);
    });

    it("displays the choice color", () => {
      entryButton = wrapper.find(`#entry-button-${fakeId}`).getElement();
      expect(entryButton.props.color).toEqual("#ff8c00");
    });

    describe("displays choice color", () => {
      const colors = [
        "#316EFF", // "#1e90ff",
        "#ee82ee",
        "#dc143c",
        "#ff8c00",
        "#ffd700",
        "#228b22"
      ];

      colors.forEach((color, index) => {
        it(`displays ${color} for ${index}`, () => {
          wrapper = shallow(
            <Entry id={fakeId} choice={index} />);  
          entryButton = wrapper.find(`#entry-button-${fakeId}`).getElement();
          expect(entryButton.props.color).toEqual(color);
        });
      });
    });
  });
});
