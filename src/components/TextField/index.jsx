import React from "react";
import * as S from "./styles";
import { MdSearch } from "react-icons/md";

const TextField = ({ value, onChange, ...rest }) => {
  return (
    <S.FormFieldWrapper>
      <S.WrapperIcon>
        <MdSearch />
      </S.WrapperIcon>
      <S.InputText {...rest} value={value} onChange={onChange} />
    </S.FormFieldWrapper>
  );
};

export default TextField;
