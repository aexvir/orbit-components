// @flow
import * as React from "react";
import defaultTokens from "@kiwicom/orbit-design-tokens";
import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs/react";

import ThemeProvider from "../Theming/ThemeProvider";
import * as Icons from "../icons";
import CardSection from "./CardSection";
import Heading from "../Heading";
import Text from "../Text";

import Card from "./index";

setAddon(chaptersAddon);

const getIcons = defaultIcon => select("Icon", Object.keys(Icons), defaultIcon);
const getIcon = source => Icons[source];

const options = {
  showSource: true,
  allowSourceToggling: false,
  showPropTables: false,
  allowPropTablesToggling: false,
};

storiesOf("Card", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      background: defaultTokens.paletteCloudLight,
      padding: "20px",
    }),
  )
  .addWithChapters("Default", () => {
    const title = text("Title", "Card with title");
    const description = text("Description");
    return {
      info: "This is the default configuration of this component.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <ThemeProvider>
                  <Card
                    icon={<Icons.Airplane color="attention" />}
                    title={title}
                    description={description}
                  />
                </ThemeProvider>
              ),
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Card with description", () => {
    const title = text("Title", "Card with title & description");
    const description = text("Description", "This is a description of the card.");
    return {
      info:
        "Card component is a simple container for grouping some relevant information. It’s possible to add title and description. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <ThemeProvider>
                  <Card
                    icon={<Icons.Airplane color="attention" />}
                    title={title}
                    description={description}
                  />
                </ThemeProvider>
              ),
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Card with sections", () => {
    const title = text("Title", "Card with sections");
    const description = text("Description", "This is a description of the card.");
    return {
      info:
        "Card sections allow you to create separate sections in every card when you need to create more advanced content structure. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <ThemeProvider>
                  <Card
                    icon={<Icons.Airplane color="attention" />}
                    title={title}
                    description={description}
                    sectioned
                  >
                    <CardSection>
                      <Heading type="title3" element="h3">
                        Insert your title here...
                      </Heading>
                      <Text>Insert your content here...</Text>
                    </CardSection>
                    <CardSection>
                      <Heading type="title3" element="h3">
                        Insert your title here...
                      </Heading>
                      <Text>Insert your content here...</Text>
                    </CardSection>
                    <CardSection>
                      <Heading type="title3" element="h3">
                        Insert your title here...
                      </Heading>
                      <Text>Insert your content here...</Text>
                    </CardSection>
                  </Card>
                </ThemeProvider>
              ),
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Card with content", () => {
    const title = text("Title", "Card with content");
    const description = text("Description", "This is a description of the card.");
    return {
      info:
        "Card component is a simple container for grouping some relevant information. You can add a content to Card. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <ThemeProvider>
                  <Card
                    icon={<Icons.Airplane color="attention" />}
                    title={title}
                    description={description}
                  >
                    <Heading type="title3" element="h3">
                      Insert your title here...
                    </Heading>
                    <Text>Insert your content here...</Text>
                  </Card>
                </ThemeProvider>
              ),
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Playground", () => {
    const title = text("Title", "Customisable card title");
    const description = text("Description", "This is a customisable description of the card.");
    const Icon = getIcon(getIcons("Airplane"));
    const closable = boolean("Closable", false);
    return {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <ThemeProvider>
                  <Card
                    title={title}
                    description={description}
                    icon={<Icon color="attention" />}
                    closable={closable}
                    onClose={action("Close")}
                  />
                </ThemeProvider>
              ),
              options,
            },
          ],
        },
      ],
    };
  });
