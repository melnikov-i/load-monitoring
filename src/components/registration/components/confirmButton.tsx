import * as React from 'react';

import {
  RegistrationFormButton
} from './';

import { IFormInputValues } from '@src/core/interfaces';
import { RegistrationRequest } from '../interfaces';

interface ConfirmButtonProps {
  /** Массив значений полей ввода информации */
  values: IFormInputValues['values'],
  /** Значение чекбокса */
  isSelected: boolean,
  /** Значение рекапчи */
  reCaptcha: string,
  /** Отправляет результат валидации в Store для последующей стилизации элементов формы */
  changeValidationValue: (payload: IFormInputValues['values']) => any,
  /** Отправляет данные на сервер */
  sendRegistrationToAPI: (payload: RegistrationRequest) => any,
}

export const ConfirmButton: React.SFC<ConfirmButtonProps> = (props) => {
  const {
    values,
    isSelected,
    reCaptcha,
    changeValidationValue,
    sendRegistrationToAPI,
  } = props;
  
  let validation = new Array();
  
  const validateFormFields = (): boolean => {
    let key: boolean = true;
    
    /** Проверка поля с e-mail */
    if (/.+@.+\..+/i.test(values[0][0])) {
      validation.push('valid');
    } else {
      validation.push('notValid');
      key = false;
    }

    /** Проверка поля с паролем и подтверждением пароля */
    if (values[0][1] && values[0][1] === values[0][2]) {
      validation.push('valid');
      validation.push('valid');
    } else {
      validation.push('notValid');
      validation.push('notValid');
      key = false;
    }

    /** Проверка чекбокса */
    if (isSelected) {
      validation.push('valid');
    } else {
      validation.push('notValid');
      key = false;
    }

    /** Проверка рекапчи */
    if (reCaptcha !== "") {
      validation.push('valid');
    } else {
      validation.push('notValid');
      key = false;
    }
    
    return key;
  }
  
  /**
   * Обработчик кнопки "Регистрация"
   */
  const handlerSendRegistration = 
  (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();

    if (validateFormFields()) {
      console.log('все верно, отправка данных');
      sendRegistrationToAPI({
        state: 'register',
        email: values[0][0],
        password: values[0][1],
        ['g-recaptcha-response']: reCaptcha,
      });
    } else {
      console.log('все плохо, валидация не пройдена');
      changeValidationValue([validation]);
    }
  };

  return (
    <RegistrationFormButton
      id={'registrationButton'}
      onClick={handlerSendRegistration}
    > {'Регистрация'} </RegistrationFormButton>
  );
}