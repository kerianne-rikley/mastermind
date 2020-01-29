import React from "react";
import TestRenderer from "react-test-renderer";
import { shallow } from "enzyme";

import GameScreen from "../GameScreen";
import Entry from "../../components/Entry";

jest.useFakeTimers();

describe("<GameScreen />", () => {
  // using react-testing-library
  const mockNavigation = {
    navigate: jest.fn()
  };

  it("renders correctly", () => {
    const tree = TestRenderer.create(<GameScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe("home button", () => {
    let homeButton;
    let wrapper;

    beforeAll(() => {
      wrapper = shallow(
        <GameScreen navigation={mockNavigation} />
      );
      homeButton = wrapper.findWhere(node => node.prop('testID') === 'home-button').getElement();
    });

    it("exists", () => {
      expect(homeButton).toBeTruthy();
    });

    it("navigates to HomeScreen when clicked", () => {
      homeButton.props.onPress();
      expect(mockNavigation.navigate).toHaveBeenCalledTimes(1);
      expect(mockNavigation.navigate).toHaveBeenCalledWith("Home");
    });
  });

  describe("Entry Buttons", () => {
    let entryArray;
    let wrapper;

    beforeAll(() => {
      wrapper = shallow(
        <GameScreen navigation={mockNavigation} />
      );
      // find all Entry elements and save as an array
      entryArray = wrapper.find(Entry).getElements();
    });

    it("should have 4 entry options", () => {
      expect(entryArray).toHaveLength(4);
    });

    describe("handlePress", () => {
      it("should update choice when pressed", () => {
        let entry0 = entryArray[0];
        expect(entry0.props.choice).toEqual(0);
        // Need to pass the id through as arguement
        entry0.props.handlePress(entry0.props.id);
        jest.runAllTimers(); // To update state
        // Need to re-find the element, because it's a new render
        entry0 = wrapper.find(Entry).getElements()[0];
        expect(entry0.props.choice).toEqual(1);
      });
    });
  });
});
