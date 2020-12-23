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

export const WrapperIcon = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.bgMain};
    font-size: 2rem;
    display: flex;
    margin: 0;
    border: 0;
    outline: 0;
    align-items: center;
  `}
`;
