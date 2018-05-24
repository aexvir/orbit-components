// @flow
import * as React from "react";
import defaultTokens from "@kiwicom/orbit-design-tokens";
import styled from "styled-components";
import { withTheme } from "theming";

type Props = {
  children: React.Node,
  url: string,
  onClick: (SyntheticEvent<HTMLLinkElement>) => any,
  external: boolean,
  type: "primary" | "secondary",
  rel?:
    | "alternate"
    | "author"
    | "bookmark"
    | "external"
    | "help"
    | "license"
    | "next"
    | "nofollow"
    | "noreferrer"
    | "noopener"
    | "prev"
    | "search"
    | "tag",
  theme: typeof defaultTokens,
};

const StyledTextLink = styled(({ tokens, theme, type, url, ...props }) => (
  <a {...props}>{props.children}</a>
))`
      color: ${props => props.tokens.colorTextLink[props.type]};
      font-weight: ${props => props.theme.fontWeightLinks}; 
      text-decoration: ${props =>
        props.type === "secondary"
          ? props.theme.textDecorationLinkSecondary
          : props.theme.textDecorationLinkPrimary};
      cursor: pointer;
      transition: color ${props => props.theme.durationFast} ease-in-out;
    }
    &:hover {
      text-decoration: ${props =>
        props.type === "secondary"
          ? props.theme.textDecorationLinkSecondaryHover
          : props.theme.textDecorationLinkPrimaryHover};
      color: ${props => props.theme.colorLinkPrimaryHover};
    }
    &:focus {
      outline-width: 3px;
    }        
  `;

const TextLink = (props: Props) => {
  const { children, url, external, theme } = props;
  const tokens = {
    colorTextLink: {
      primary: theme.colorLinkPrimary,
      secondary: theme.colorLinkSecondary,
    },
  };

  return (
    <StyledTextLink href={url} target={external ? "_blank" : undefined} tokens={tokens} {...props}>
      {children}
    </StyledTextLink>
  );
};

const TextLinkWithTheme = withTheme(TextLink);
TextLinkWithTheme.displayName = "TextLink";
TextLinkWithTheme.defaultProps = {
  type: "primary",
  external: false,
};

export default TextLinkWithTheme;
