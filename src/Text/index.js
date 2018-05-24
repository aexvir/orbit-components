// @flow
import * as React from "react";
import defaultTokens from "@kiwicom/orbit-design-tokens";
import styled from "styled-components";
import { withTheme } from "theming";
import createComponentFromTagProp from "react-create-component-from-tag-prop";

type Props = {
  type: "primary" | "secondary" | "attention",
  size: "small" | "normal" | "large",
  weight: "regular" | "bold",
  align: "left" | "center" | "right",
  italic: boolean,
  uppercase: boolean,
  element: "p" | "span" | "div",
  children: React.Node,
  theme: typeof defaultTokens,
};

const TextElement = createComponentFromTagProp({
  prop: "element",
  propsToOmit: ["tokens", "theme", "type", "weight", "align"],
});

const StyledText = styled(TextElement)`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.tokens.sizeText[props.size]};
  font-weight: ${props => props.tokens.weightText[props.weight]};
  color: ${props => props.tokens.colorText[props.type]};
  line-height: ${props => props.theme.lineHeightText};
  text-align: ${props => props.align};
  text-transform: ${props => props.uppercase && `uppercase`};
  font-style: ${props => props.italic && `italic`};
  margin: 0;
`;

const Text = (props: Props) => {
  const { children, theme } = props;
  const tokens = {
    colorText: {
      primary: theme.colorTextPrimary,
      secondary: theme.colorTextSecondary,
      attention: theme.colorTextAttention,
    },
    weightText: {
      regular: theme.fontWeightNormal,
      bold: theme.fontWeightBold,
    },
    sizeText: {
      large: theme.fontSizeTextLarge,
      normal: theme.fontSizeTextNormal,
      small: theme.fontSizeTextSmall,
    },
  };
  return (
    <StyledText tokens={tokens} {...props}>
      {children}
    </StyledText>
  );
};

const TextWithTheme = withTheme(Text);
TextWithTheme.displayName = "Text";
TextWithTheme.defaultProps = {
  type: "primary",
  size: "normal",
  weight: "regular",
  align: "left",
  element: "p",
  uppercase: false,
  italic: false,
};

export default TextWithTheme;
