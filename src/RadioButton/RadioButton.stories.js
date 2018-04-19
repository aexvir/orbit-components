// @flow

import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, boolean } from "@storybook/addon-knobs/react";

import RadioButton from "./index";

setAddon(chaptersAddon);

const options = {
  allowSourceToggling: false,
  allowPropTablesToggling: false,
};

storiesOf("RadioButton", module)
  .addDecorator(withKnobs)
  .addWithChapters("Default", () => {
    const label = text("Label", "Hello Button");
    const name = text("Name", "name");
    const value = text("Value", "value");
    const checked = boolean("Checked", true);
    const disabled = boolean("Disabled", false);
    const error = boolean("Error", false);
    return {
      info: "Example of RadioButton. You can change its label, name, value.",

      chapters: [
        {
          sections: [
            {
              subtitle: "Checkbox",
              sectionFn: () => (
                <RadioButton
                  label={label}
                  name={name}
                  value={value}
                  checked={checked}
                  disabled={disabled}
                  error={error}
                  onChange={action("changed")}
                />
              ),
              options,
            },
          ],
        },
      ],
    };
  });
