/**
 * Компонент однострочного поля ввода информации в форму
 */
import * as React from 'react';

import {
  FormInputWrapper,
  FormInput,
} from './styled';

import { IFormInputItems } from '../model';

interface VMainProps {
  formInputItems: IFormInputItems,
}

export const VMain: React.SFC<VMainProps> = (props) => {
  const { formInputItems: {
    type,
    hint,
    validation,
    placeholder,
    value,
  }} = props;

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(e.currentTarget.value);
  }

  return (
    <FormInputWrapper
      validation={validation}
      hint={hint}
    >
      <FormInput
        validation={validation}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={changeValue}
      >

      </FormInput>
    </FormInputWrapper>
  );
}