import * as React from 'react';

import {
  RegistrationFormButton
} from './';

interface ConfirmButtonProps {

}

export const ConfirmButton: React.SFC<ConfirmButtonProps> = (props) => {
  const {  } = props;

  const validateFormFields = (): boolean => {
    return true;
  }
  
  /**
   * Обработчик кнопки "Регистрация"
   */
  const handlerSendRegistration = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();

    if (validateFormFields()) {
      
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