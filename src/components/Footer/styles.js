import styled, { css } from "styled-components";

export const FooterBase = styled.footer`
  ${({ theme }) => css`
    background: ${theme.colors.mainBg};
    border-top: 2px solid ${theme.colors.primary};
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 32px;
    padding-bottom: 32px;
    text-align: center;
    color: ${theme.colors.white};

    p a {
      text-decoration: none;
      color: ${theme.colors.white};
    }

    @media (max-width: 800px) {
      margin-bottom: 50px;
    }
  `}
`;
