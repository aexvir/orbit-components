// @flow

import * as React from "react";
import { mount } from "enzyme";

import ButtonLink from "../index";
import ThemeProvider from "../../Theming/ThemeProvider";
import Airplane from "../../icons/Airplane";

const children = "ButtonLink";
const url = "https://kiwi.com";

describe("ButtonLink with Icon", () => {
  const component = mount(
    <ThemeProvider>
      <ButtonLink url={url} external>
        {children}
      </ButtonLink>
    </ThemeProvider>,
  );
  const button = component.find("ButtonLink__StyledButton");
  it("should contain a title ", () => {
    expect(button.render().text()).toBe(children);
  });
  it("should contain SVG", () => {
    expect(button.find("svg").exists()).toBe(false);
  });
  it("should be external", () => {
    expect(button.prop("target")).toBe("_blank");
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});

describe("ButtonLink with Icon", () => {
  const component = mount(
    <ThemeProvider>
      <ButtonLink icon={<Airplane />} url={url}>
        {children}
      </ButtonLink>
    </ThemeProvider>,
  );
  const button = component.find("ButtonLink__StyledButton");
  it("should contain a title ", () => {
    expect(button.render().text()).toBe(children);
  });
  it("should contain SVG", () => {
    expect(button.find("svg").exists()).toBe(true);
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
