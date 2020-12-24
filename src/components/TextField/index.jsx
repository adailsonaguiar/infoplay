import React from "react";
import * as S from "./styles";
import { MdSearch } from "react-icons/md";

const TextField = ({ value, onChange, searchField, loading, ...rest }) => {
  return (
    <S.FormFieldWrapper>
      {searchField && (
        <S.WrapperIcon>{loading ? <S.Spinner /> : <MdSearch />}</S.WrapperIcon>
      )}
      <S.InputText {...rest} value={value} onChange={onChange} />
    </S.FormFieldWrapper>
  );
};

export default TextField;
