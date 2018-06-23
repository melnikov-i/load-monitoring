/**
 * Компонент однострочного поля ввода информации в форму
 */
import * as React from 'react';

import { InputWrapper, InputField } from './styled';
import { ISAtributes, IDAtributes } from '@src/core/interfaces';

interface InputProps {
  formItemModel: IFormItemModel,
  sAtributes: ISAtributes,
  dAtributes: IDAtributes,
  changeInputValue: (payload: any) => any,
}

export const Input: React.SFC<InputProps> = (props) => {
  const {
    formItemModel: { id, type, hint, placeholder, value, validation},
    // sAtributes: {id, type, hint, placeholder},
    // dAtributes: {value, validation},
    changeInputValue,
  } = props;

  const changeValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    changeInputValue({ [id[0]]: { [id[1]]: { value: e.currentTarget.value } } });
  }
  
  return (
    <InputWrapper
      validation={validation}
      hint={hint}
    >
      <InputField
        validation={validation}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={changeValueHandler}
      />
    </InputWrapper>
  );
}
