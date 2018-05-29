import * as React from 'react';

import {
  RegistrationFormButton
} from './';

import {
  IFormInputValues,
} from '@src/components/formInput/interfaces';

interface ConfirmButtonProps {
  values: IFormInputValues['values'],
  agreement: boolean,
  reCaptcha: string,
}

export const ConfirmButton: React.SFC<ConfirmButtonProps> = (props) => {
  const { values/*, agreement, reCaptcha*/ } = props;
  
  const validateFormFields = (): boolean => {
    console.log('values:', values);
    return true;
  }
  
  /**
   * Обработчик кнопки "Регистрация"
   */
  const handlerSendRegistration = 
  (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();


    if (validateFormFields()) {
      console.log('все верно, отправка данных');
    } else {
      console.log('все плохо, валидация не пройдена');
    }

    // const collection = registrationFormItemsCollection;

    // const validation: IRegistrationFormValidation = {
    //   email: /.+@.+\..+/i.test(registrationFormItemsCollection.email)
    //     ? 'valid' : 'notValid',
    //   password: (collection.password === collection.confirm)
    //     ? collection.password !== '' ? 'valid' : 'notValid' : 'notValid',
    //   confirm: collection.password === collection.confirm
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