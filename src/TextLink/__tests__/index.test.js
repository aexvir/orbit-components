// @flow
import * as React from "react";
import { shallow } from "enzyme";

import TextLink from "../index";
import ThemeProvider from "../../Theming/ThemeProvider";

describe("TextLink", () => {
  const title = "My text link";
  const url = "https://kiwi.com";
  const onClick = jest.fn();
  const type = "primary";

  const component = shallow(
    <ThemeProvider>
      <TextLink onClick={onClick} url={url} type={type}>
        {title}
      </TextLink>
    </ThemeProvider>,
  );
  const textLink = component.find("TextLink__Link");

  it("should contain a children", () => {
    expect(
      component
        .children()
        .children()
        .exists(),
    ).toBe(true);
  });
  // it("should contain an url", () => {
  //   expect(textLink.render().prop("href")).toBe(url);
  // });
  // it("should contain an external url", () => {
  //   expect(textLinkExternal.render().prop("target")).toBe("_blank");
  // });
  // it("should execute onClick method", () => {
  //   textLink.simulate("click");
  //   expect(onClick).toHaveBeenCalled();
  // });
  it("should match snapshot", () => {
    expect(textLink).toMatchSnapshot();
  });
});
