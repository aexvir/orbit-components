// @flow

import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, boolean } from "@storybook/addon-knobs/react";

import CheckBox from "./index";

setAddon(chaptersAddon);

const options = {
  allowSourceToggling: false,
  allowPropTablesToggling: false,
};

storiesOf("CheckBox", module)
  .addDecorator(withKnobs)
  .addWithChapters("Default", () => {
    const label = text("Label", "Option");
    const name = text("Name", "options");
    const value = text("Value", "option_1");
    const checked = boolean("Checked", true);
    const disabled = boolean("Disabled", false);
    const error = boolean("Error", false);
    return {
      info: "Example of CheckBox. You can change its label, name, value.",

      chapters: [
        {
          sections: [
            {
              subtitle: "Checkbox",
              sectionFn: () => (
                <CheckBox
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
