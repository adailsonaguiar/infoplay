import styled from 'styled-components';

const Button = styled.button`
  box-sizing: border-box;
  cursor: pointer;
  font-weight: bold;
  font-size: 13px;
  outline: none;
  border: none;
  border-radius: 25px;
  text-decoration: none;
  display: inline-block;
  transition: opacity 0.3s;
  color: var(--white);
  background-color: var(--primary);
  padding: 16px 44px;
  &:hover,
  &:focus {
    opacity: 0.9;
  }
`;

export default Button;
