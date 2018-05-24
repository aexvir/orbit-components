// @flow
import * as React from "react";
import { shallow } from "enzyme";

import Text from "../index";
import ThemeProvider from "../../Theming/ThemeProvider";

describe("Text", () => {
  it("should contain children", () => {
    const children = "Children text";
    const component = shallow(
      <ThemeProvider>
        <Text type="primary" size="small">
          {children}
        </Text>
      </ThemeProvider>,
    );
    expect(
      component
        .children()
        .children()
        .exists(),
    ).toBe(true);
  });
  it("should match snapshot", () => {
    const text = "Children text";
    const component = shallow(
      <ThemeProvider>
        <Text type="primary" size="small">
          {text}
        </Text>
      </ThemeProvider>,
    );
    expect(component).toMatchSnapshot();
  });
});
