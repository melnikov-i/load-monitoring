import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

// import FormInput, {
//   IFormInputStaticItems,
// } from '@src/components/formInput';

/** стили */
import {
  LoginFormLayout,
  LoginFormHeader,
  LoginFormButton,
} from './';

import {
  // ConfirmButtonConnected as ConfirmButton,
} from '../connected';

/** Статический котнекст формы */
const formInputItemsCollection: IFormInputStaticItems[] = [
  {
    id: ['login', 'login'],
    type: 'text',
    hint: '',
    placeholder: 'Имя пользователя'
  },
  {
    id: ['login', 'password'],
    type: 'password',
    hint: '',
    placeholder: 'Пароль',
  },
]

interface LoginFormProps extends RouteComponentProps<void> {
  dynamicItemsModel: any,
  sendUserCredentialToAPI: (payload: LoginFormInterface) => any,
}

export const LoginForm: React.SFC<LoginFormProps> = (props) => {
  const {
    dynamicItemsModel,
    sendUserCredentialToAPI
  } = props;
  const handlerSendCredential = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const UserCredential: LoginFormInterface = {
      login: dynamicItemsModel.login.value,
      password: passwordValue,
    };
    sendUserCredentialToAPI(UserCredential);
  };

  return (
    <LoginFormLayout>
      <LoginFormHeader color={'darkGrey'}>
        {'Введите учетные данные'}
      </LoginFormHeader>
      {formInputItemsCollection.map((e, i) =>
        <FormInput key={i} staticItems={e} />)}
      <LoginFormButton
      // loginFormStateIndex={
      //   loginFormState.loginFormStateIndex
      // }
      onClick={handlerSendCredential}
      >{'Вход'}</LoginFormButton>
    </LoginFormLayout>
  );
};