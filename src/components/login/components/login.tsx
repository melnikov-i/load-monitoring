import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Spinner } from '@src/components';
// import FormInput, {
//   IFormInputItems,
// } from '@src/components/formInput';

import {
  LoginLayoutWrapper,
  LoginLayout,
  LoginWrapper,
  LoginInnerPart,
  LoginLogotype,
  LoginHeader,
  LoginFormLayout,
  LoginFormHeader,
  LoginFormSpinner,
} from './';

/** Контекст элементов формы */
// const formInputItemsCollection: IFormInputItems[] = [
//   {
//     storeContext: [1, 0],
//     type: 'text',
//     hint: '',
//     placeholder: 'Имя пользователя'
//   },
//   {
//     storeContext: [1, 1],
//     type: 'text',
//     hint: '',
//     placeholder: 'Пароль',
//   },
// ];

interface LoginProps extends RouteComponentProps<void> {

}

export const Login: React.SFC<LoginProps> = (props) => {
  const {} = props;

  const status: string = '';

  const getView = (status: string): JSX.Element => {
    switch (status) {
      case 'processing':
        return (
          <LoginFormLayout>
            <LoginFormHeader color={'grey'}>{'Проверка учетных данных'}</LoginFormHeader>
            <LoginFormSpinner>
              <Spinner
                width={3}
                color={'grey'}
                bgColor={'#fff'}
              />
            </LoginFormSpinner>
          </LoginFormLayout>
        );
      default:
        return (
          <LoginFormLayout>
            <LoginFormHeader color={'darkGrey'}>{'Введите учетные данные'}</LoginFormHeader>
            {/* {formInputItemsCollection.map((e, i) => <FormInput key={i} formInputItems={e} />)} */}
          </LoginFormLayout>
        );
    }
  };

  return (
    <LoginLayoutWrapper>
      <LoginLayout>
        <LoginWrapper>
          <LoginInnerPart>
            <LoginLogotype>
              <LoginHeader>{'Система мониторинга'}</LoginHeader>
            </LoginLogotype>
          </LoginInnerPart>
          <LoginInnerPart>
            {getView(status)}
          </LoginInnerPart>
        </LoginWrapper>
      </LoginLayout>
    </LoginLayoutWrapper>
  );
}