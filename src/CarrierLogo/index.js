// @flow
import * as React from "react";
import defaultTokens from "@kiwicom/orbit-design-tokens";
import styled from "styled-components";
import { withTheme } from "theming";

const baseURL = "//images.kiwi.com"; // token or const

type Carrier = { code: string, name: string };
type Props = {
  size: "small" | "medium" | "large",
  carriers: Carrier[],
  theme: typeof defaultTokens,
};

const StyledCarrierLogo = styled.div`
  border-radius: ${props => props.theme.borderRadiusNormal};
  background-color: ${props => props.theme.backgroundCarrierLogo};
  height: ${props =>
    props.carriers.length > 1
      ? `${props.theme.heightIconLarge}`
      : `${props.tokens.renderSizes[props.size]}px`};
  width: ${props =>
    props.carriers.length > 1
      ? `${props.theme.widthIconLarge}`
      : `${props.tokens.renderSizes[props.size]}px`};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
`;
const StyledImage = styled.img`
  height: ${props => props.imageSize}px;
  width: ${props => props.imageSize}px;
  border-radius: ${props => props.theme.borderRadiusNormal};
  background-color: ${props => props.theme.backgroundCarrierLogo};
  position: absolute;
  /* one item */
  &:first-child:nth-last-child(1) {
    max-width: 100%;
    max-height: 100%;
  }
  /* two items */
  &:first-child:nth-last-child(2) ~ &:last-child {
    bottom: 0;
    right: 0;
  }
  /* three items */
  &:first-child:nth-last-child(3),
  &:first-child:nth-last-child(3) ~ & {
    width: ${props => props.tokens.renderSizes.small - 1}px;
    height: ${props => props.tokens.renderSizes.small - 1}px;
  }
  &:first-child:nth-last-child(3) ~ &:nth-child(2) {
    top: 0;
    right: 0;
  }
  &:first-child:nth-last-child(3) ~ &:nth-child(3) {
    left: 0;
    bottom: 0;
  }
  /* four items */
  &:first-child:nth-last-child(4),
  &:first-child:nth-last-child(4) ~ & {
    width: ${props => props.tokens.renderSizes.small - 1}px;
    height: ${props => props.tokens.renderSizes.small - 1}px;
  }
  &:first-child:nth-last-child(4) ~ &:nth-child(2) {
    top: 0;
    right: 0;
  }
  &:first-child:nth-last-child(4) ~ &:nth-child(3) {
    bottom: 0;
    left: 0;
  }
  &:first-child:nth-last-child(4) ~ &:nth-child(4) {
    bottom: 0;
    right: 0;
  }
`;

const CarrierLogo = (props: Props) => {
  const { size, carriers, theme } = props;
  const tokens = {
    directorySizes: {
      small: 16,
      medium: 32,
      large: 32,
    },
    retinaSizes: {
      small: 32,
      medium: 64,
      large: 64,
    },
    renderSizes: {
      small: parseInt(theme.heightIconSmall, 10),
      medium: parseInt(theme.heightIconMedium, 10),
      large: parseInt(theme.heightIconLarge, 10),
    },
  };
  const sourceSize =
    carriers.length > 1 ? tokens.directorySizes.small : tokens.directorySizes[size];
  const imageSize = carriers.length > 1 ? tokens.renderSizes.small : tokens.renderSizes[size];
  const srcSetSize = carriers.length > 1 ? tokens.retinaSizes.small : tokens.retinaSizes[size];

  return (
    <StyledCarrierLogo tokens={tokens} {...props}>
      {carriers
        .slice(0, 4)
        .map(carrierImage => (
          <StyledImage
            key={carrierImage.code}
            src={`${baseURL}/airlines/${sourceSize}/${carrierImage.code}.png`}
            srcSet={`${baseURL}/airlines/${srcSetSize}/${carrierImage.code}.png 2x`}
            alt={carrierImage.name}
            title={carrierImage.name}
            imageSize={imageSize}
            tokens={tokens}
            {...props}
          />
        ))}
    </StyledCarrierLogo>
  );
};

const CarrierLogoWithTheme = withTheme(CarrierLogo);
CarrierLogoWithTheme.displayName = "CarrierLogo";
CarrierLogoWithTheme.defaultProps = {
  size: "large",
};

export default CarrierLogoWithTheme;
