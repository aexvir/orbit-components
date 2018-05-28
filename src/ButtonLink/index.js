// @flow
import * as React from "react";
import defaultTokens from "@kiwicom/orbit-design-tokens";
import styled from "styled-components";
import { withTheme } from "theming";

import { iconSizes } from "../Icon";

type Props = {
  children?: React.Node,
  onClick?: (e: SyntheticEvent<HTMLButtonElement>) => void,
  disabled: boolean,
  block: boolean,
  external: boolean,
  type: "primary" | "secondary",
  size: "small" | "normal" | "large",
  url?: string,
  width: number,
  icon?: React.Node,
  theme: typeof defaultTokens,
};

const IconContainer = styled(({ tokens, sizeIcon, type, onlyIcon, ...props }) => (
  <div {...props} />
))`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: ${props => (props.onlyIcon ? "0" : props.tokens.marginRightIcon[props.size])};
  color: ${props => props.tokens.colorTextButton[props.type]};

  > * {
    width: ${props => iconSizes[props.sizeIcon]};
    height: ${props => iconSizes[props.sizeIcon]};
  }
`;

const StyledButton = styled(
  ({
    tokens,
    onlyIcon,
    external,
    block,
    theme,
    type,
    icon,
    sizeIcon,
    width,
    disabled,
    url,
    children,
    ...props
  }) => <a {...props}>{children}</a>,
)`
  font-family: ${props => props.theme.fontFamily};
  box-sizing: border-box;
  appearance: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${props =>
    props.block
      ? "100%"
      : (props.width && `${props.width}px`) ||
        (props.onlyIcon && `${props.tokens.heightButton[props.size]}`) ||
        "auto"};
  height: ${props => props.tokens.heightButton[props.size]};
  background: ${props => props.tokens.backgroundButton[props.type]};
  color: ${props => props.tokens.colorTextButton[props.type]};
  border: 0;
  border-radius: ${props => props.theme.borderRadiusNormal};
  padding: 0 ${props => (props.onlyIcon ? "0" : props.tokens.paddingButton[props.size])} 0
    ${props =>
      (props.onlyIcon && "0") ||
      (props.icon
        ? props.tokens.paddingButtonWithIcon[props.size]
        : props.tokens.paddingButton[props.size])};
  font-weight: ${props => props.theme.fontWeightBold};
  font-size: ${props => props.tokens.fontSizeButton[props.size]};
  cursor: ${props => (props.disabled ? "default" : "pointer")};
  opacity: ${props => (props.disabled ? props.theme.opacityButtonDisabled : "1")};
  transition: all 0.15s ease-in-out;
  outline: 0;
  text-decoration: none;

  &:hover {
    background: ${props => props.tokens.backgroundButtonHover[props.type]};
    color: ${props => props.tokens.colorTextButtonHover[props.type]};
  }

  &:active {
    transform: scale(${props => props.theme.modifierScaleButtonActive});
    background: ${props => props.tokens.backgroundButtonActive[props.type]};
    color: ${props => props.tokens.colorTextButtonActive[props.type]};
  }
`;

const ButtonLink = (props: Props) => {
  const { external, children, size, icon, type, theme, url, onClick } = props;

  const sizeIcon = size === "small" ? "small" : "medium";

  const onlyIcon = icon && !children;
  const tokens = {
    heightButton: {
      large: theme.heightButtonLarge,
      normal: theme.heightButtonNormal,
      small: theme.heightButtonSmall,
    },
    fontSizeButton: {
      large: theme.fontSizeButtonLarge,
      normal: theme.fontSizeButtonNormal,
      small: theme.fontSizeButtonSmall,
    },
    paddingButton: {
      large: theme.paddingButtonLarge,
      normal: theme.paddingButtonNormal,
      small: theme.paddingButtonSmall,
    },
    paddingButtonWithIcon: {
      large: theme.paddingButtonLargeWithIcon,
      normal: theme.paddingButtonNormalWithIcon,
      small: theme.paddingButtonSmallWithIcon,
    },
    marginRightIcon: {
      small: theme.marginButtonIconSmall,
      normal: theme.marginButtonIconNormal,
      large: theme.marginButtonIconLarge,
    },
    backgroundButton: {
      primary: theme.backgroundButtonPrimaryLink,
      secondary: theme.backgroundButtonSecondaryLink,
    },
    backgroundButtonHover: {
      primary: theme.backgroundButtonPrimaryLinkHover,
      secondary: theme.backgroundButtonSecondaryLinkHover,
    },
    backgroundButtonActive: {
      primary: theme.backgroundButtonPrimaryLinkActive,
      secondary: theme.backgroundButtonSecondaryLinkActive,
    },
    colorTextButton: {
      primary: theme.colorTextButtonPrimaryLink,
      secondary: theme.colorTextButtonSecondaryLink,
    },
    colorTextButtonHover: {
      primary: theme.colorTextButtonPrimaryLinkHover,
      secondary: theme.colorTextButtonSecondaryLinkHover,
    },
    colorTextButtonActive: {
      primary: theme.colorTextButtonPrimaryLinkActive,
      secondary: theme.colorTextButtonSecondaryLinkActive,
    },
  };

  return (
    <StyledButton
      onClick={onClick}
      href={url}
      onlyIcon={onlyIcon}
      sizeIcon={sizeIcon}
      tokens={tokens}
      type={type}
      target={external ? "_blank" : undefined}
      {...props}
    >
      {icon && (
        <IconContainer
          size={size}
          type={type}
          onlyIcon={onlyIcon}
          sizeIcon={sizeIcon}
          tokens={tokens}
        >
          {icon}
        </IconContainer>
      )}
      {children}
    </StyledButton>
  );
};

const ButtonLinkWithTheme = withTheme(ButtonLink);
ButtonLinkWithTheme.displayName = "ButtonLink";
ButtonLinkWithTheme.defaultProps = {
  disabled: false,
  block: false,
  external: false,
  type: "primary",
  size: "normal",
  width: 0,
};

export default ButtonLinkWithTheme;
