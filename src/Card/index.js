// @flow
import * as React from "react";
import styled from "styled-components";
import defaultTokens from "@kiwicom/orbit-design-tokens";
import { withTheme } from "theming";

import { CloseCircle } from "../icons";
import Button from "../Button";
import Heading from "../Heading";
import Text from "../Text";
import Section from "./Section";

type Props = {
  title: string,
  description: string,
  closable: boolean,
  sectioned: boolean,
  icon?: React.ComponentType<*>,
  children?: React.Node,
  onClose: () => void,
  theme: typeof defaultTokens,
};

const StyledCard = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.backgroundCard};
  border-radius: ${({ theme }) => theme.borderRadiusNormal};
  border-width: ${({ theme }) => theme.borderWidthCard};
  border-style: ${({ theme }) => theme.borderStyleCard};
  border-color: ${({ theme }) => theme.borderColorCard};
  box-sizing: border-box;
  overflow: hidden;
`;

const StyledCardHeader = styled.div`
  position: relative;
  width: 100%;
  padding: ${({ theme }) => theme.spaceLarge};
  padding-right: ${({ theme, closable }) => (closable ? theme.spaceXXLarge : theme.spaceLarge)};
  box-sizing: border-box;
`;

const StyledCardBody = styled.div`
  width: 100%;
  padding: ${({ theme, sectioned }) => !sectioned && theme.spaceLarge};
  padding-top: ${({ sectioned }) => !sectioned && "0"};
  box-sizing: border-box;
`;

const HeadingContainer = styled.div`
  display: flex;
  margin-bottom: ${({ theme, description }) => (description ? theme.spaceXSmall : "0")};
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${({ theme }) => theme.spaceXSmall};
`;

const CloseContainer = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spaceXSmall};
  right: ${({ theme }) => theme.spaceXSmall};
`;

const Card = (props: Props) => {
  const { title, description, closable, icon, sectioned, children, theme } = props;
  return (
    <StyledCard theme={theme}>
      <StyledCardHeader theme={theme} closable={closable}>
        <HeadingContainer theme={theme} description={description}>
          {icon && <IconContainer theme={theme}>{icon}</IconContainer>}
          <Heading type="title2" element="h2">
            {title}
          </Heading>
        </HeadingContainer>
        {description && <Text>{description}</Text>}
        {closable && (
          <CloseContainer theme={theme}>
            <Button
              variation="link"
              type="secondary"
              size="small"
              icon={<CloseCircle />}
              onClick={props.onClose}
              onlyIcon
            />
          </CloseContainer>
        )}
      </StyledCardHeader>
      {children && (
        <StyledCardBody theme={theme} sectioned={sectioned}>
          {children}
        </StyledCardBody>
      )}
    </StyledCard>
  );
};

const CardWithTheme = withTheme(Card);
CardWithTheme.defaultProps = {
  sectioned: false,
  closable: false,
  onClose: () => {},
};
CardWithTheme.Section = Section;
CardWithTheme.displayName = "Card";
CardWithTheme.Section.displayName = "Card.Section";
export default CardWithTheme;
