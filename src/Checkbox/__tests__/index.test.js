// @flow

import * as React from "react";
import { shallow } from "enzyme";

import CheckBox from "../";

const label = "CheckBox";
const onChange = jest.fn();
const name = "checkbox";
const values = ["value", ""];

values.map(value =>
  describe(`Default CheckBox with value: ${value}`, () => {
    const component = shallow(
      <CheckBox label={label} onChange={onChange} name={name} value={value} />,
    );
    it("Should contain a label", () => {
      expect(component.find(".labelText").text()).toBe(label);
    });
    it("Inputs value should match", () => {
      expect(component.find(`input[type="checkbox"]`).prop("value")).toBe(value);
    });
    it("Input should not contain a disabled prop", () => {
      expect(component.find(`input[type="checkbox"]`).prop("disabled")).toBe(false);
    });
    it("Should not execute onChange method", () => {
      component.find("input").simulate("change");
      expect(onChange).toHaveBeenCalled();
    });
    it("Should match snapshot", () => {
      expect(component).toMatchSnapshot();
    });
  }),
);

values.map(value =>
  describe(`Disabled CheckBox with value: ${value}`, () => {
    const component = shallow(
      <CheckBox label={label} onChange={onChange} name={name} value={value} disabled />,
    );
    it("Should contain a label", () => {
      expect(component.find(".labelText").text()).toBe(label);
    });
    it("Inputs value should match", () => {
      expect(component.find(`input[type="checkbox"]`).prop("value")).toBe(value);
    });
    it("Input should contain a disabled prop", () => {
      expect(component.find(`input[type="checkbox"]`).prop("disabled")).toBe(true);
    });
    it("Should match snapshot", () => {
      expect(component).toMatchSnapshot();
    });
  }),
);
