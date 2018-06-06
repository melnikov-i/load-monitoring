import * as React from 'react';

import {
  RegistrationFormButton
} from './';

import { IFormInputValues } from '@src/core/interfaces';
import { RegistrationRequest } from '../interfaces';

interface ConfirmButtonProps {
  /** Массив значений полей ввода информации */
  dynamicItemsModel: any,
  // values: IFormInputValues['values'],
  /** Значение чекбокса */
  isSelected: boolean,
  /** Значение рекапчи */
  reCaptcha: string,

  changeValidationValueInComponents: (payload: any) => any,
  /** Отправляет результат валидации в Store для последующей стилизации элементов формы */
  changeValidationValue: (payload: IFormInputValues['values']) => any,
  /** Отправляет данные на сервер */
  sendRegistrationToAPI: (payload: RegistrationRequest) => any,
}

export const ConfirmButton: React.SFC<ConfirmButtonProps> = (props) => {
  const {
    // values,
    dynamicItemsModel,
    isSelected,
    reCaptcha,
    changeValidationValueInComponents,
    // changeValidationValue,
    sendRegistrationToAPI,
  } = props;
  
  let validation = new Array();
  let _dynamicItemsModel: any = dynamicItemsModel;
  
  const validateFormFields = (): boolean => {
    let key: boolean = true;
    
    /** Проверка поля с e-mail */
    if (/.+@.+\..+/i.test(dynamicItemsModel.registration.email.value)) {
      _dynamicItemsModel.registration.email.validation = 'valid';
    } else {
      _dynamicItemsModel.registration.email.validation = 'notValid';
      key = false;
    }

    /** Проверка поля с паролем и подтверждением пароля */
    if (dynamicItemsModel.registration.password.value 
      && dynamicItemsModel.registration.password.value === dynamicItemsModel.registration.confirm.value ) {
      _dynamicItemsModel.registration.password.validation = 'valid';
      _dynamicItemsModel.registration.confirm.validation = 'valid';
    } else {
      _dynamicItemsModel.registration.password.validation = 'notValid';
      _dynamicItemsModel.registration.confirm.validation = 'notValid';
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
        email: dynamicItemsModel.registration.email.value,
        password: dynamicItemsModel.registration.password.value,
        ['g-recaptcha-response']: reCaptcha,
      });
    } else {
      console.log('все плохо, валидация не пройдена');
      const payload: any = {
        formInput: _dynamicItemsModel,
      };
      changeValidationValueInComponents(payload);
      // changeValidationValue([validation]);
    }
  };

  return (
    <RegistrationFormButton
      id={'registrationButton'}
      onClick={handlerSendRegistration}
    > {'Регистрация'} </RegistrationFormButton>
  );
}