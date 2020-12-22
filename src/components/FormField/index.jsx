/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const FormField = ({ label, name, value, onChange, type, suggestions }) => {
  const fieldId = `id_${name}`;
  const isTextArea = type === 'textarea';
  const tag = isTextArea ? 'textarea' : 'input';
  const hasSuggestion = Boolean(suggestions.length > 0);
  return (
    <S.FormFieldWrapper>
      <S.Label htmlFor={fieldId}>
        <S.InputText
          as={tag}
          id={fieldId}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          autoComplete={hasSuggestion ? 'off' : 'on'}
          list={`suggestionId_${fieldId}`}
        />
        <S.Label.Text>{label}</S.Label.Text>
        {hasSuggestion && (
          <datalist id={`suggestionId_${fieldId}`}>
            {suggestions.map((suggestion) => (
              <option
                key={`suggestionFor_${fieldId}_option_${suggestion}`}
                value={suggestion}
              >
                {suggestion}
              </option>
            ))}
          </datalist>
        )}
      </S.Label>
    </S.FormFieldWrapper>
  );
};

FormField.defaultProps = {
  type: 'text',
  value: '',
  suggestions: [],
};
FormField.protoTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};
export default FormField;
