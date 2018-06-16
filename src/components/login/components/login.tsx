import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Spinner } from '@src/components';

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
  // LoginFormButton,
} from './';

import {
  LoginFormConnected as LoginForm
} from '../connected';

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
      default: return <LoginForm />;
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