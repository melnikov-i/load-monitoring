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

/** Статический котнекст формы */
const formInputItemsCollection: IFormInputItems[] = [
  {
    id: 'email',
    validation: '',
    type: 'text',
    hint: 'Введите существующий адрес электронной почты',
    placeholder: 'E-Mail',
  },
  {
    id: 'password',
    validation: '',
    type: 'password',
    hint: 'Это поле не совпадает с полем Повторите пароль',
    placeholder: 'Пароль',
  },
  {
    id: 'confirm',
    validation: '',
    type: 'password',
    hint: 'Это поле не совпадает с полем Пароль',
    placeholder: 'Повторите пароль',
  },
]

/** Контекст элементов формы */
// const _formInputItemsCollection: IFormInputItems[] = [
//   {
//     storeContext: [0, 0],
//     type: 'text',
//     hint: 'Введите существующий адрес электронной почты',
//     placeholder: 'E-Mail',
//   },
//   {
//     storeContext: [0, 1],
//     type: 'password',
//     hint: 'Это поле не совпадает с полем Повторите пароль',
//     placeholder: 'Пароль',
//   },
//   {
//     storeContext: [0, 2],
//     type: 'password',
//     hint: 'Это поле не совпадает с полем Пароль',
//     placeholder: 'Повторите пароль',
//   },
// ];

interface RegistrationFormProps extends RouteComponentProps<void> {
  context: any,
  createContext: (payload: any) => any,
}

export const RegistrationForm: React.SFC<RegistrationFormProps> = (props) => {
  const { context, createContext } = props;
  console.log('context', context);

  if (context['registration'] === undefined) {
    /** Создаем и передаем в reducer контекст формы, чтобы с ней могли работать другие компоненты */
    createContext(['registration', formInputItemsCollection]);
    return null;
  } else {
    return (
      <Content>
        <RegistrationFormHeader>{'Регистрация'}</RegistrationFormHeader>
        <form action="">
          {formInputItemsCollection.map((e, i) => <FormInput key={i} formInputItems={e} />)}
          <ReCaptcha />
          <GreenCheckbox />
          <ConfirmButton />
        </form>
      </Content>
    );
  }
};
