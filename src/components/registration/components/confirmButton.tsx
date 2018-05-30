import * as React from 'react';

import {
  RegistrationFormButton
} from './';

import { IFormInputValues } from '@src/core/interfaces';
import { RegistrationRequest } from '../interfaces';

interface ConfirmButtonProps {
  values: IFormInputValues['values'],
  agreement: boolean,
  reCaptcha: string,
  changeValidationValue: (payload: IFormInputValues['values']) => any,
  sendRegistrationToAPI: (payload: RegistrationRequest) => any,
}

export const ConfirmButton: React.SFC<ConfirmButtonProps> = (props) => {
  const {
    values,
    agreement,
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

    if (agreement) {
      validation.push('valid');
    } else {
      validation.push('notValid');
      key = false;
    }

    if (reCaptcha !== "") {
      validation.push('valid');
    } else {
      validation.push('notValid');
      key = false;
    }
    
    console.log('validation', validation);
    console.log('reCaptcha', reCaptcha);
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

    // const collection = registrationFormItemsCollection;

    // const validation: IRegistrationFormValidation = {
    //   email: /.+@.+\..+/i.test(registrationFormItemsCollection.email)
    //     ? 'valid' : 'notValid',
    //   password: (collection.password === collection.confirm)
    //     ? collection.password !== '' ? 'valid' : 'notValid' : 'notValid',

    //   agreement: collection.agreement ? 'valid' : 'notValid',
    //   recapture: reCaptcha,
    // }
    // updateRegistrationFormValidation(validation);

  };

  return (
    <RegistrationFormButton
      onClick={handlerSendRegistration}
    > {'Регистрация'} </RegistrationFormButton>
  );
}