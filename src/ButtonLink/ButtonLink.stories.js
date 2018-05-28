// @flow

import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, number, boolean, select } from "@storybook/addon-knobs/react";

import * as Icons from "../icons";
import ThemeProvider from "../Theming/ThemeProvider";

import ButtonLink from "./index";

setAddon(chaptersAddon);

const getIcons = defaultIcon => select("Icon", [undefined, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

const options = {
  showSource: true,
  allowSourceToggling: false,
  showPropTables: false,
  allowPropTablesToggling: false,
};

storiesOf("ButtonLink", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Default", () => ({
    info:
      "Link buttons have a similar look as classic links, but the area surrounding them is clickable. That makes them great to use outside of paragraphs or for less important actions in the interface. We use Link buttons only in a small and normal version.",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <ThemeProvider>
                <ButtonLink url="https://kiwi.com">ButtonLink</ButtonLink>
              </ThemeProvider>
            ),
            options,
          },
        ],
      },
    ],
  }))
  .addWithChapters("Secondary", () => ({
    info:
      "Link buttons have a similar look as classic links, but the area surrounding them is clickable. That makes them great to use outside of paragraphs or for less important actions in the interface. We use Link buttons only in a small and normal version.",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <ThemeProvider>
                <ButtonLink url="https://kiwi.com" type="secondary">
                  ButtonLink
                </ButtonLink>
              </ThemeProvider>
            ),
            options,
          },
        ],
      },
    ],
  }))
  .addWithChapters("Playground", () => {
    const title = text("Title", "ButtonLink");
    const disabled = boolean("Disabled", false);
    const block = boolean("Block", false);
    const type = select(
      "Type",
      {
        primary: "primary",
        secondary: "secondary",
      },
      "secondary",
    );
    const size = select(
      "Size",
      {
        small: "small",
        normal: "normal",
        large: "large",
      },
      "large",
    );
    const width = number("Width", 0);
    const Icon = getIcon(getIcons("Airplane"));
    const url = text("URL", undefined);
    const external = boolean("External", false);
    return {
      info:
        "Link buttons have a similar look as classic links, but the area surrounding them is clickable. That makes them great to use outside of paragraphs or for less important actions in the interface. We use Link buttons only in a small and normal version.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <ThemeProvider>
                  <ButtonLink
                    disabled={disabled}
                    block={block}
                    type={type}
                    size={size}
                    url={url}
                    icon={Icon && <Icon />}
                    width={width}
                    external={external}
                    onClick={action("clicked")}
                  >
                    {title}
                  </ButtonLink>
                </ThemeProvider>
              ),
              options,
            },
          ],
        },
      ],
    };
  });
