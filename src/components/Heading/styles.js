import styled, { css } from "styled-components";

const wrapperModifiers = {
  small: (theme) => css`
    font-size: ${theme.font.sizes.medium};
    &::after {
      width: 3rem;
    }
  `,

  medium: (theme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,

  huge: (theme) => css`
    font-size: ${theme.font.sizes.huge};
  `,

  lineLeft: (theme, lineColor) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors[lineColor]};
  `,

  lineBottom: (theme, lineColor) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};
    &::after {
      position: absolute;
      left: 0;
      bottom: -0.5rem;
      content: "";
      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors[lineColor]};
    }
  `,
};
export const Wrapper = styled.h2`
  ${({ theme, color, lineLeft, lineBottom, lineColor, size }) => css`
    color: ${theme.colors[color]};
    ${lineLeft && wrapperModifiers.lineLeft(theme, lineColor)}
    ${lineBottom && wrapperModifiers.lineBottom(theme, lineColor)}
    ${!!size && wrapperModifiers[size](theme)}
  `}
`;
