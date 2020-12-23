import React from "react";
import * as S from "./styles";
import { MdClose } from "react-icons/md";

const TextField = ({ onClickClear, value, onChange, ...rest }) => {
  function handleClear() {
    onClickClear && onClickClear();
  }
  return (
    <S.FormFieldWrapper>
      <S.InputText {...rest} value={value} onChange={onChange} />
      <S.WrapperIcon onClick={handleClear}>
        <MdClose />
      </S.WrapperIcon>
    </S.FormFieldWrapper>
  );
};

export default TextField;
