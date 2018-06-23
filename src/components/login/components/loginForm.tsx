import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Input from '@src/components/input';
import { IInputAtributes, ILoginRequestPayload } from '@src/core/interfaces';

import { FormHeader, FormSubmit } from '@src/core/styled';

const loginInputCollection: IInputAtributes[] = [
  {
    id: ['login', 'login'],
    type: 'text',
    hint: '',
    placeholder: 'имя пользователя',
  },
  {
    id: ['login', 'password'],
    type: 'password',
    hint: '',
    placeholder: 'пароль',
  },
];

interface LoginFormProps extends RouteComponentProps<void> {
  sendUserCredentialToAPI: (payload: ILoginRequestPayload) => any,
}

export const LoginForm: React.SFC<LoginFormProps> = (props) => {
  const { /* sendUserCredentialToAPI */ } = props;

  console.log('[login].loginForm');

  const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  }

  return (
    <div>
      <FormHeader color={'grey'}>{'Введите учетные данные'}</FormHeader>
      <form action="">
        {loginInputCollection.map((e, i) => <Input key={i} atributes={e} />)}
        <FormSubmit onClick={submitHandler}>{'Вход'}</FormSubmit>
      </form>
    </div>
  );
}