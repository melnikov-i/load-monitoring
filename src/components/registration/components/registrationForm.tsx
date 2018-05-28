import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import FormInput, {
  IFormInputItems,
} from '@src/components/formInput';

import {
  RegistrationFormHeader,
  Content,  
} from './';

import {
  GreenCheckboxConnected as GreenCheckbox,
  ReCaptchaConnected as ReCaptcha,
  ConfirmButtonConnected as ConfirmButton,
} from '../connected';

const formInputItemsCollection: IFormInputItems[] = [
  {
    storeContext: [0, 0],
    type: 'text',
    hint: 'Введите существующий адрес электронной почты',
    placeholder: 'E-Mail',
    validation: '',
  },
  {
    storeContext: [0, 1],
    type: 'password',
    hint: 'Это поле не совпадает с полем Повторите пароль',
    placeholder: 'Password',
    validation: '',
  },
  {
    storeContext: [0, 2],
    type: 'password',
    hint: 'Это поле не совпадает с полем Пароль',
    placeholder: 'Confirm',
    validation: '',
  },
];

interface RegistrationFormProps extends RouteComponentProps<void> {}

export const RegistrationForm: React.SFC<RegistrationFormProps> = (/*props*/) => {
  console.log('form');

  return (
    <Content>
      <RegistrationFormHeader>{'Регистрация'}</RegistrationFormHeader>
      <form action="">
        {formInputItemsCollection.map((e, i) => (
          <FormInput
            key={i}
            formInputItems={e}
          />
        ))}
        <GreenCheckbox />
        <ReCaptcha />
        <ConfirmButton />
      </form>
    </Content>
  );
};
