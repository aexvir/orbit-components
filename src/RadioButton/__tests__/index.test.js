// @flow

import * as React from "react";
import { shallow } from "enzyme";

import RadioButton from "../";

const label = "RadioButton";
const onChange = jest.fn();
const name = "radio";
const value = "button";

describe("Default RadioButton", () => {
  const component = shallow(
    <RadioButton label={label} onChange={onChange} name={name} value={value} />,
  );

  it("Should contain a label", () => {
    expect(component.find(".labelText").text()).toBe(label);
  });
  it("Input should not contain a disabled prop", () => {
    expect(component.find(`input[type="radio"]`).prop("disabled")).toBe(false);
  });
  it("Should not execute onChange method", () => {
    component.find("input").simulate("change");
    expect(onChange).toHaveBeenCalled();
  });
  it("Should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
