import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Input from '@src/components/input';
import { ISAtributes } from '@src/core/interfaces';

import {
  LoginFormLayout,
  LoginFormHeader
} from './'

const loginInputCollection: ISAtributes[] = [
  {
    id: ['login', 'login'],
    type: 'text',
    hint: '',
    placeholder: 'login',
  },
  {
    id: ['login', 'password'],
    type: 'password',
    hint: '',
    placeholder: 'password',
  },
]

interface LoginFormProps extends RouteComponentProps<void> {
  
}

export const LoginForm: React.SFC<LoginFormProps> = (props) => {
  const {} = props;
  return (
    <LoginFormLayout>
      <LoginFormHeader color={'darkGrey'}>
        {'Введите учетные данные'}
      </LoginFormHeader>
      <form action="">
        {loginInputCollection.map((e, i) => <Input key={i} sAtributes={e} />)}
      </form>
    </LoginFormLayout>
  );
}