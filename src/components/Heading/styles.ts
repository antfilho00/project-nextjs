import styled, { css, DefaultTheme } from 'styled-components';
import { HeadingProps } from '.';

const titleSize = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.sizes.medium};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.sizes.large};
  `,
  big: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.sizes.xlarge};
  `,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.sizes.xhuge};
    ${mediaQueryFont(theme)};
  `,
};

const mediaQueryFont = (theme) => css`
  @media (${theme.media.lteMedium}) {
    font-size: ${theme.fonts.sizes.xlarge};
  }
`;

export const Title = styled.h1<HeadingProps>`
  ${({ theme, colorDark, size, uppercase }) => css`
    color: ${colorDark ? theme.colors.primaryColor : theme.colors.white};
    ${titleSize[size](theme)};
    text-transform: ${uppercase ? 'uppercase' : ''};
  `}
`;
