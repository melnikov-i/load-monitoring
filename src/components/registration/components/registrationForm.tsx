/**
 * Компонент содержит каркас формы и подключает дочерние элементы формы 
 */
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Input from '@src/components/input';
import { ISAtributes } from '@src/core/interfaces';

import {
  RegistrationFormHeader,
  Content,  
} from './';

import {
  GreenCheckboxConnected as GreenCheckbox,
  ReCaptchaConnected as ReCaptcha,
  ConfirmButtonConnected as ConfirmButton,
} from '../connected';

/** Статический котнекст формы */
const formInputItemsCollection: ISAtributes[] = [
  {
    id: ['registration', 'email'],
    type: 'text',
    hint: 'Введите существующий адрес электронной почты',
    placeholder: 'E-Mail',
  },
  {
    id: ['registration', 'password'],
    type: 'password',
    hint: 'Это поле не совпадает с полем Повторите пароль',
    placeholder: 'Пароль',
  },
  {
    id: ['registration', 'confirm'],
    type: 'password',
    hint: 'Это поле не совпадает с полем Пароль',
    placeholder: 'Повторите пароль',
  },
]

interface RegistrationFormProps extends RouteComponentProps<void> {}

export const RegistrationForm: React.SFC<RegistrationFormProps> = () => {
  return (
    <Content>
      <RegistrationFormHeader>{'Регистрация'}</RegistrationFormHeader>
      <form action="">
        {formInputItemsCollection.map((e, i) => <Input key={i} sAtributes={e} />)}
        <ReCaptcha />
        <GreenCheckbox />
        <ConfirmButton />
      </form>
    </Content>
  );
};
