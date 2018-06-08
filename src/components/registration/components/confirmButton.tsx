import * as React from 'react';

import {
  RegistrationFormButton
} from './';

// import { IFormInputValues } from '@src/core/interfaces';
import { IFormInputDynamicItems } from '@src/components/formInput';
import { RegistrationRequest, IReCaptchaDynamic } from '../interfaces';

/**
 * Компонент на вход принимает поля с изменяемым контентом из хранилищ вспомогательных 
 * компонентов и производит их парсинг, по резульату которого отправляет обратно в 
 * хранилища результат проверки 
 */
interface ConfirmButtonProps {
  /** Массив значений полей ввода информации */
  dynamicItemsModel: any,
  /** Значение рекапчи */
  reCaptchaDynamic: IReCaptchaDynamic,
  /** Отправляет в хранилище проверенные на корректность ввода значений содержание полей */
  changeValidationValueInComponents: (payload: any) => any,
  /** Отправляет данные на сервер */
  sendRegistrationToAPI: (payload: RegistrationRequest) => any,


  // values: IFormInputValues['values'],
  /** Значение чекбокса */
  // isSelected: boolean,
  /** Отправляет результат валидации в Store для последующей стилизации элементов формы */
  // changeValidationValue: (payload: IFormInputValues['values']) => any,
}

export const ConfirmButton: React.SFC<ConfirmButtonProps> = (props) => {
  const {
    // values,
    dynamicItemsModel,
    // isSelected,
    reCaptchaDynamic,
    changeValidationValueInComponents,
    // changeValidationValue,
    sendRegistrationToAPI,
  } = props;
  
  // let validation = new Array();
  let _dynamicItemsModel: any;
  let _reCaptchaDynamic: IReCaptchaDynamic;
  
  
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
    // if (isSelected) {
    //   validation.push('valid');
    // } else {
    //   validation.push('notValid');
    //   key = false;
    // }

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
        email: dynamicItemsModel.registration.email.value,
        password: dynamicItemsModel.registration.password.value,
        ['g-recaptcha-response']: reCaptchaDynamic.value,
      });
    } else {
      console.log('все плохо, валидация не пройдена');
      const payload: any = {
        formInput: _dynamicItemsModel,
        reCaptcha: _reCaptchaDynamic,
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