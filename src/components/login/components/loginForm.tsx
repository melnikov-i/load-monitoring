import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Input from '@src/components/input';
import Submit from '@src/components/submit';
import { IInputAtributes, ILoginRequestPayload, ISubmitParams } from '@src/core/interfaces';

import { FormHeader } from '@src/core/styled';

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

let params: ISubmitParams = {
  value: 'Вход',
  formName: 'login',
  validationRules: {
    login: {
      method: '',
      condition: '',
    },
    password: {
      method: '',
      condition: '',
    }
  }
};

interface LoginFormProps extends RouteComponentProps<void> {
  sendUserCredentialToAPI: (payload: ILoginRequestPayload) => any,
}

export const LoginForm: React.SFC<LoginFormProps> = (props) => {
  const { sendUserCredentialToAPI } = props;

  const sendDataToAPI = (formItems: any) => {
    const payload: ILoginRequestPayload = {
      login: formItems.login.value,
      password: formItems.password.value,
    }
    sendUserCredentialToAPI(payload);
  }

  return (
    <div>
      <FormHeader color={'grey'}>{'Введите учетные данные'}</FormHeader>
      <form action="">
        {loginInputCollection.map((e, i) => <Input key={i} atributes={e} />)}
        <Submit params={params} callback={sendDataToAPI} />
      </form>
    </div>
  );
}
