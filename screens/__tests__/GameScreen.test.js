import React from "react";
import TestRenderer from "react-test-renderer";
import { fireEvent, render } from "@testing-library/react-native";

import GameScreen from "../GameScreen";

describe("<GameScreen />", () => {
  const mockNavigation = {
    navigate: jest.fn()
  };

  it("renders correctly", () => {
    const tree = TestRenderer.create(<GameScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe("home button", () => {
    let homeButton;

    beforeAll(() => {
      const { getByTestId } = render(
        <GameScreen navigation={mockNavigation} />
      );
      homeButton = getByTestId("home-button");
    });

    it("exists", () => {
      expect(homeButton).toBeDefined();
    });

    it("navigates to home when clicked", () => {
      fireEvent.press(homeButton);
      expect(mockNavigation.navigate).toHaveBeenCalledTimes(1);
      expect(mockNavigation.navigate).toHaveBeenCalledWith("Home");
    });
  });
});
