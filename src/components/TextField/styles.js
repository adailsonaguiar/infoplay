import styled, { css } from "styled-components";

export const FormFieldWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    background: ${theme.colors.white};
    padding-left: 1rem;
    padding-right: 1rem;
    height: 4rem;
    @media (min-width: 800px) {
      width: 50%;
    }
  `}
`;

export const InputText = styled.input`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    width: 100%;
    border: 0;
  `}
`;

export const WrapperIcon = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.bgMain};
    font-size: 2rem;
    display: flex;

    align-items: center;
    margin-right: 1rem;
  `}
`;

export const Spinner = styled.div`
  ${({ theme }) => css`
    @keyframes three-quarters-loader {
      0% {
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }

    -moz-animation: three-quarters-loader 1250ms infinite linear;
    -webkit-animation: three-quarters-loader 1250ms infinite linear;
    animation: three-quarters-loader 1250ms infinite linear;
    border: 4px solid ${theme.colors.primary};
    border-right-color: transparent;
    border-radius: 16px;
    box-sizing: border-box;
    display: inline-block;
    position: relative;
    overflow: hidden;
    text-indent: -9999px;
    width: 20px;
    height: 20px;
  `}
`;
