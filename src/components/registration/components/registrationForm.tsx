/**
 * Компонент содержит каркас формы и подключает дочерние элементы формы 
 */
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

/** Контекст элементов формы */
const formInputItemsCollection: IFormInputItems[] = [
  {
    storeContext: [0, 0],
    type: 'text',
    hint: 'Введите существующий адрес электронной почты',
    placeholder: 'E-Mail',
  },
  {
    storeContext: [0, 1],
    type: 'password',
    hint: 'Это поле не совпадает с полем Повторите пароль',
    placeholder: 'Пароль',
  },
  {
    storeContext: [0, 2],
    type: 'password',
    hint: 'Это поле не совпадает с полем Пароль',
    placeholder: 'Повторите пароль',
  },
];

interface RegistrationFormProps extends RouteComponentProps<void> {}

export const RegistrationForm: React.SFC<RegistrationFormProps> = () => {
  return (
    <Content>
      <RegistrationFormHeader>{'Регистрация'}</RegistrationFormHeader>
      <form action="">
        {formInputItemsCollection.map((e, i) => <FormInput key={i} formInputItems={e} />)}
        <GreenCheckbox />
        <ReCaptcha />
        <ConfirmButton />
      </form>
    </Content>
  );
};
