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
  /** параметры для построения поля. Получаются от родительского контейнера */
  formInputItems: IFormInputItems,
  /** введенная в поле информация. Получается из redux */
  value: string,
  /** значение результата прохождения валидации формы перед отправкой на сервер */
  validation: string,
  /** отправляет в redux введенную в поле информацию (то, что уже в поле, плюс введенный символ) */
  changeValue: (payload: IFormInputChangeValue) => any,
}

export const FormInput: React.SFC<FormInputProps> = (props) => {
  const {
    formInputItems: {
      // id,
      validation,
      type,
      hint,
      placeholder,
    },
    // changeValue,
    value,
  } = props;

  const changeValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    // const payload: IFormInputChangeValue = {
    //   dest: dest,
    //   value: e.currentTarget.value,
    // };
    // changeValue(payload);
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
      />
    </FormInputWrapper>
  );
}