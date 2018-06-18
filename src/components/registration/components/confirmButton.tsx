import * as React from 'react';

import {
  RegistrationFormButton
} from './';

import { IDAtributes } from '@src/core/interfaces';
import {
  RegistrationRequest,
  IReCaptchaDynamic,
  ICheckboxDynamic
} from '@src/core/interfaces';
  
/**
 * Компонент на вход принимает поля с изменяемым контентом из хранилищ 
 * вспомогательных компонентов и производит их парсинг, по резульату 
 * которого отправляет обратно в хранилища результат проверки 
 */
interface ConfirmButtonProps {
  /** Массив значений полей ввода информации */
  dAtributes: any,
  /** Значение рекапчи */
  reCaptchaDynamic: IReCaptchaDynamic,
  /** Значение чекбокса */
  checkboxDynamic: ICheckboxDynamic,
  /** Отправляет в хранилище проверенные на корректность ввода значений 
   * содержание полей */
  changeValidationValueInComponents: (payload: any) => any,
  /** Отправляет данные на сервер */
  sendRegistrationToAPI: (payload: RegistrationRequest) => any,
}

export const ConfirmButton: React.SFC<ConfirmButtonProps> = (props) => {
  const {
    dAtributes,
    reCaptchaDynamic,
    checkboxDynamic,
    changeValidationValueInComponents,
    sendRegistrationToAPI,
  } = props;
  
  let _dAtributes: any;
  let _reCaptchaDynamic: IReCaptchaDynamic;
  let _checkboxDynamic: ICheckboxDynamic;
  
  const validateFormFields = (): boolean => {
    let key: boolean = true;
    const model: any = dAtributes.registration;
    
    /** Проверка поля с e-mail */
    const email: IDAtributes = {
      ...model.email,
      validation: /.+@.+\..+/i.test(model.email.value)
        ? 'valid' : 'notValid',
    };
    
    if (email.validation === 'notValid') key = false;
    
    /** Проверка поля с паролем и подтверждением пароля */
    const password: IDAtributes = {
      ...model.password,
      validation: 
        (model.password.value && model.password.value === model.confirm.value)
          ? 'valid' : 'notValid',
    };

    const confirm: IDAtributes = {
      ...model.confirm,
      validation: 
        (model.password.value && model.password.value === model.confirm.value)
          ? 'valid' : 'notValid',
    };

    if (password.validation === 'notValid') key = false;

    _dAtributes = {
      ...model,
      ['registration']: {
        email: email,
        password: password,
        confirm: confirm,
      }
    }

    /** Проверка чекбокса */
    _checkboxDynamic = {
      ...checkboxDynamic,
      validation: checkboxDynamic.value ? 'valid' : 'notValid',
    };

    if (_checkboxDynamic.validation === 'notValid') key = false;

    /** Проверка рекапчи */
    _reCaptchaDynamic = {
      ...reCaptchaDynamic,
      validation: reCaptchaDynamic.value ? 'valid' : 'notValid',
    };

    if (_reCaptchaDynamic.validation === 'notValid') key = false;
    
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
        email: dAtributes.registration.email.value,
        password: dAtributes.registration.password.value,
        ['g-recaptcha-response']: reCaptchaDynamic.value,
      });
    } else {
      console.log('все плохо, валидация не пройдена');
      const payload: any = {
        formInput: _dAtributes,
        reCaptcha: _reCaptchaDynamic,
        checkbox: _checkboxDynamic,
      };
      changeValidationValueInComponents(payload);
    }
  };
  // const handlerSendRegistration = (e: React.MouseEvent<HTMLButtonElement>): void => {
  //   e.preventDefault();
  //   console.log('send');
  // };

  return (
    <RegistrationFormButton
      id={'registrationButton'}
      onClick={handlerSendRegistration}
    > {'Регистрация'} </RegistrationFormButton>
  );
}