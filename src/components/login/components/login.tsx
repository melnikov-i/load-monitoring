import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import {
  LoginLayoutWrapper,
  LoginLayout,
  LoginWrapper,
  LoginInnerPart,
  LoginLogotype,
  LoginHeader,
  LoginFormLayout,
  LoginFormHeader,
} from './';

interface LoginProps extends RouteComponentProps<void> {

}

export const Login: React.SFC<LoginProps> = (props) => {
  const {} = props;
  const layout = (inner: JSX.Element[]):JSX.Element => (
    <LoginLayoutWrapper>
      <LoginLayout>
        <LoginWrapper>
          <LoginInnerPart>
            <LoginLogotype>
              <LoginHeader>{'Система мониторинга'}</LoginHeader>
            </LoginLogotype>
          </LoginInnerPart>
          <LoginInnerPart>
            <LoginFormLayout>
              {inner[0]}
            </LoginFormLayout>
          </LoginInnerPart>
        </LoginWrapper>
      </LoginLayout>
    </LoginLayoutWrapper>
  );

  const header = (text: string): JSX.Element => (
    <LoginFormHeader>
      {text}
    </LoginFormHeader>
  )

  switch ('') {
    default:
      return layout([
        header('Введите учетные данные'),
        <div></div>
      ]);
  }
}