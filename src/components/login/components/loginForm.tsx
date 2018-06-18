import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Input from '@src/components/input';
import { ISAtributes } from '@src/core/interfaces';

import {
  LoginFormLayout,
  // LoginFormHeader
} from './'

import { FormHeader, FormAnchor, FormAnchorSpan } from '@src/core/styled';

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

interface LoginFormProps extends RouteComponentProps<void> {
  
}

export const LoginForm: React.SFC<LoginFormProps> = (props) => {
  const {} = props;

  return (
    <LoginFormLayout>
      <FormHeader
        height={'50px'}
        color={'grey'}
        big={false}
      >{'Введите учетные данные'}</FormHeader>
      <form action="">
        {loginInputCollection.map((e, i) => <Input key={i} sAtributes={e} />)}
      </form>
      <FormHeader
        height={'24px'}
        color={'grey'}
        big={false}
      >{'Еще нет аккаунта?'}</FormHeader>
      <FormAnchor to={'/registration'}>
        <FormAnchorSpan
          color={'grey'}
          bColor={'lightGrey'}
          bgColor={'white'}
        >{'Регистрация'}</FormAnchorSpan>
      </FormAnchor>
    </LoginFormLayout>
  );
}