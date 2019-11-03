import React from "react";
import TestRenderer from "react-test-renderer";
import App from "./App";

describe("<App />", () => {
  it("renders correctly", () => {
    const tree = TestRenderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
