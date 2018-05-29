// @flow
import * as React from "react";
import styled from "styled-components";
import defaultTokens from "@kiwicom/orbit-design-tokens";
import { withTheme } from "theming";

type Props = {
  children?: React.Node,
  theme: typeof defaultTokens,
};

const StyledSection = styled.div`
  width: 100%;
  border-top-width: ${({ theme }) => theme.borderWidthCard};
  border-top-style: ${({ theme }) => theme.borderStyleCard};
  border-top-color: ${({ theme }) => theme.borderColorCard};
  padding: ${({ theme }) => theme.spaceLarge};
  box-sizing: border-box;

  &:first-child {
    border: none;
    padding-top: 0;
  }
`;

const Section = (props: Props) => {
  const { children } = props;
  return <StyledSection {...props}>{children}</StyledSection>;
};

const CardSectionWithTheme = withTheme(Section);
export default CardSectionWithTheme;
