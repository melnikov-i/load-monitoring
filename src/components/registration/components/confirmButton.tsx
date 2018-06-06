import * as React from 'react';

import {
  RegistrationFormButton
} from './';

import { IFormInputValues } from '@src/core/interfaces';
import { IFormInputDynamicItems } from '@src/components/formInput';
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
  let _dynamicItemsModel: any;
  
  
  const validateFormFields = (): boolean => {
    let key: boolean = true;
    const model: any = dynamicItemsModel.registration;
    
    /** Проверка поля с e-mail */
    const email: IFormInputDynamicItems = {
      ...model.email,
      validation: /.+@.+\..+/i.test(model.email.value)
        ? 'valid' : 'notValid',
    };
    
    if (email.validation === 'notValid') key = false;
    
    /** Проверка поля с паролем и подтверждением пароля */
    const password: IFormInputDynamicItems = {
      ...model.password,
      validation: (model.password && model.password === model.confirm)
        ? 'valid' : 'notValid',
    };

    const confirm: IFormInputDynamicItems = {
      ...model.confirm,
      validation: (model.password && model.password === model.confirm)
        ? 'valid' : 'notValid',
    };

    if (password.validation === 'notValid') key = false;

    _dynamicItemsModel = {
      ...model,
      ['registration']: {
        email: email,
        password: password,
        confirm: confirm,
      }
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