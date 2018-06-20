import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Input from '@src/components/input';
import { ISAtributes } from '@src/core/interfaces';

import {} from './'

import { FormHeader, FormSubmit } from '@src/core/styled';

const loginInputCollection: ISAtributes[] = [
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
]

interface LoginFormProps extends RouteComponentProps<void> {}

export const LoginForm: React.SFC<LoginFormProps> = (props) => {
  const {} = props;

  return (
    <div>
      <FormHeader color={'grey'}>{'Введите учетные данные'}</FormHeader>
      <form action="">
        {loginInputCollection.map((e, i) => <Input key={i} sAtributes={e} />)}
        <FormSubmit>{'Вход'}</FormSubmit>
      </form>
    </div>
  );
}