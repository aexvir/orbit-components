// @flow
import defaultTheme from "@kiwicom/orbit-design-tokens";
import { withTheme } from "theming";

import * as Icons from "./icons";
import * as DeprecatedComponents from "./_deprecated";

export { default as Button } from "./Button";
export { default as CarrierLogo } from "./CarrierLogo";
export { default as Heading } from "./Heading";
export { default as Text } from "./Text";
export { default as Icon } from "./Icon";
export { default as TextLink } from "./TextLink";
export { default as ThemeProvider } from "./Theming/ThemeProvider";
export { Icons, DeprecatedComponents, defaultTheme, withTheme };
