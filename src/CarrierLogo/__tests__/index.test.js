// @flow
import * as React from "react";
import { mount } from "enzyme";

import CarrierLogo from "../index";
import ThemeProvider from "../../Theming/ThemeProvider";

const carriers = [
  { code: "FR", name: "Ryanair" },
  { code: "TO", name: "Transavia France" },
  { code: "VY", name: "Vueling" },
  { code: "OK", name: "Czech Airlines" },
];

const sizes = ["small", "medium", "large"];

describe("Multiple CarrierLogo with DefaultProp", () => {
  const component = mount(
    <ThemeProvider>
      <CarrierLogo carriers={carriers} />
    </ThemeProvider>,
  );
  carriers.map(carrier =>
    it("should contain an image of carrier", () => {
      expect(component.find(`img[alt="${carrier.name}"]`).prop("alt")).toBe(carrier.name);
    }),
  );
  // it("should have set size", () => {
  //   expect(component.prop("size")).toBe("large");
  // });
  it("should contain a div", () => {
    expect(component.find("div").exists()).toBe(true);
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});

carriers.map(carrier =>
  sizes.map(size =>
    describe(`Single carrier with name: ${carrier.name} and code: ${carrier.code}`, () => {
      const component = mount(
        <ThemeProvider>
          <CarrierLogo carriers={[carrier]} size={size} />
        </ThemeProvider>,
      );
      it("should contain an image of carrier", () => {
        expect(component.find(`img[alt="${carrier.name}"]`).prop("alt")).toBe(carrier.name);
      });
      it("should contain a div", () => {
        expect(component.find("div").exists()).toBe(true);
      });
      it("should match snapshot", () => {
        expect(component).toMatchSnapshot();
      });
    }),
  ),
);
