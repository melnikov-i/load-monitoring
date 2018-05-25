/**
 * Компонент однострочного поля ввода информации в форму
 */
import * as React from 'react';

import {
  FormInputWrapper,
  FormInputField,
} from './styled';

import {
  IFormInputItems,
  IFormInputChangeValue
} from '../interfaces';

interface FormInputProps {
  formInputItems: IFormInputItems,
  value: string,
  changeValue: (payload: IFormInputChangeValue) => any,
}

export const FormInput: React.SFC<FormInputProps> = (props) => {
  const {
    formInputItems: {
      storeContext,
      type,
      hint,
      validation,
      placeholder,
    },
    changeValue,
    value,
  } = props;

  const changeValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const payload: IFormInputChangeValue = {
      storeContext: storeContext,
      value: e.currentTarget.value,
    };
    changeValue(payload);
  }

  return (
    <FormInputWrapper
      validation={validation}
      hint={hint}
    >
      <FormInputField
        validation={validation}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={changeValueHandler}
      >

      </FormInputField>
    </FormInputWrapper>
  );
}