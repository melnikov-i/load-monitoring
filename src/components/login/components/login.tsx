import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

// import { Spinner } from '@src/components';

import {} from './';

import { LoginFormConnected as LoginForm } from '../connected';
import { LoginPendingConnected as LoginPending } from '../connected';
import {
  FormPageLayout,
  FormPage,
  FormPageLogotype,
  FormPageLogotypeHeader,
  FormSmallHeader,
  FormAnchor,
  FormAnchorSpan
} from '@src/core/styled';

interface LoginProps extends RouteComponentProps<void> {
  // loginView
}

export const Login: React.SFC<LoginProps> = (props) => {
  const {} = props;

  console.log('[login].login');

  const status: string = 'pending';

  const getView = (status: string): JSX.Element => {
    switch (status) {
      case 'pending': return <LoginPending />
      default: return <LoginForm />;
    }
  };

  return (
    <FormPageLayout>
      <FormPage>
        <FormPageLogotype>
          <FormPageLogotypeHeader>
            {'Система мониторинга'}
          </FormPageLogotypeHeader>
        </FormPageLogotype>
        {getView(status)}
        <FormSmallHeader color={'grey'}>{'Еще нет аккаунта?'}</FormSmallHeader>
        <FormAnchor to={'/registration'}>
          <FormAnchorSpan>{'Регистрация'}</FormAnchorSpan>
        </FormAnchor>
        <FormSmallHeader color={'grey'}>{'Забыли пароль?'}</FormSmallHeader>
        <FormAnchor to={'/recovery'}>
          <FormAnchorSpan>{'Восстановить пароль'}</FormAnchorSpan>
        </FormAnchor>
      </FormPage>
    </FormPageLayout>
  );
}
