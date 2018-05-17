// @flow
import * as React from "react";
import styled from "styled-components";
import defaultTokens from "@kiwicom/orbit-design-tokens";
import { withTheme } from "theming";

import { CloseCircle } from "../icons";
import Button from "../Button";
import Heading from "../Heading";
import Text from "../Text";

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
  background: ${props => props.theme.backgroundCard};
  border-radius: ${props => props.theme.borderRadiusNormal};
  border-width: ${props => props.theme.borderWidthCard};
  border-style: ${props => props.theme.borderStyleCard};
  border-color: ${props => props.theme.borderColorCard};
  box-sizing: border-box;
  overflow: hidden;
`;

const StyledCardHeader = styled.div`
  position: relative;
  width: 100%;
  padding: ${props => props.theme.spaceLarge};
  padding-right: ${props => (props.closable ? props.theme.spaceXXLarge : props.theme.spaceLarge)};
  box-sizing: border-box;
`;

const StyledCardBody = styled.div`
  width: 100%;
  padding: ${props =>
    !props.sectioned
      ? `0 ${props.closable ? props.theme.spaceXXLarge : props.theme.spaceLarge} ${
          props.theme.spaceLarge
        } ${props.theme.spaceLarge}`
      : "0"};
  box-sizing: border-box;
`;

const HeadingContainer = styled.div`
  display: flex;
  margin-bottom: ${props => (props.description ? props.theme.spaceXSmall : "0")};
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${props => props.theme.spaceXSmall};
`;

const CloseContainer = styled.div`
  position: absolute;
  top: ${props => props.theme.spaceXSmall};
  right: ${props => props.theme.spaceXSmall};
`;

const Card = (props: Props) => {
  const { title, description, closable, icon, children, theme } = props;
  return (
    <StyledCard {...props}>
      <StyledCardHeader {...props}>
        <HeadingContainer {...props}>
          {icon && <IconContainer theme={theme}>{icon}</IconContainer>}
          <Heading type="title2" element="h2">
            {title}
          </Heading>
        </HeadingContainer>
        {description && <Text>{description}</Text>}
        {closable && (
          <CloseContainer {...props}>
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
      {children && <StyledCardBody {...props}>{children}</StyledCardBody>}
    </StyledCard>
  );
};

const CardWithTheme = withTheme(Card);
CardWithTheme.displayName = "Card";
CardWithTheme.defaultProps = {
  sectioned: false,
  closable: false,
  onClose: () => {},
};

export default CardWithTheme;
