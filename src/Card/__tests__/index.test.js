// @flow
import * as React from "react";
import { shallow } from "enzyme";

import Card from "../index";
import CardSection from "../Section";
import Heading from "../../Heading";
import Text from "../../Text";
import ThemeProvider from "../../Theming/ThemeProvider";

const text = "Text for testing";

describe("Card", () => {
  it("should contain CardSection", () => {
    const component = shallow(
      <ThemeProvider>
        <Card title={text} sectioned>
          <CardSection>
            <Heading type="title3" element="h3">
              {text}
            </Heading>
            <Text>{text}</Text>
          </CardSection>
        </Card>
      </ThemeProvider>,
    );
    component
      .find("Card__StyledCardBody")
      .children()
      .forEach(node => {
        expect(node.type()).toBe(CardSection);
      });
  });

  // it("should be closable", () => {
  //   const onClose = jest.fn();
  //   const component = shallow(
  //     <ThemeProvider>
  //       <Card title={text} onClose={onClose} closable />
  //     </ThemeProvider>,
  //   );
  //   component
  //     .find("Card__CloseContainer")
  //     .children()
  //     .simulate("click");
  //   expect(onClose).toHaveBeenCalled();
  // });
});
