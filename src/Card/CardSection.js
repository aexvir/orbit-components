// @flow
import * as React from "react";
import styled from "styled-components";
import defaultTokens from "@kiwicom/orbit-design-tokens";
import { withTheme } from "theming";

type Props = {
  children?: React.Node,
  theme: typeof defaultTokens,
};

const StyledCardSection = styled.div`
  width: 100%;
  border-top-width: ${props => props.theme.borderWidthCard};
  border-top-style: ${props => props.theme.borderStyleCard};
  border-top-color: ${props => props.theme.borderColorCard};
  padding: ${props => props.theme.spaceLarge};
  box-sizing: border-box;

  &:first-child {
    border: none;
    padding-top: 0;
  }
`;

const CardSection = (props: Props) => {
  const { children } = props;
  return <StyledCardSection {...props}>{children}</StyledCardSection>;
};

const CardSectionWithTheme = withTheme(CardSection);
CardSectionWithTheme.displayName = "CardSection";

export default CardSectionWithTheme;
