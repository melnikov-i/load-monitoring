import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { LoginFormConnected as LoginForm } from '../connected';
import FormSpinner from '@src/components/formSpinner';
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
  loginView: string,
}

export const Login: React.SFC<LoginProps> = (props) => {
  const { loginView } = props;
  
  switch (loginView) {
    case 'pending': return (
      <FormPageLayout>
        <FormPage>
          <FormPageLogotype>
            <FormPageLogotypeHeader>
              {'Система мониторинга'}
            </FormPageLogotypeHeader>
          </FormPageLogotype>
          <FormSpinner />
        </FormPage>
      </FormPageLayout>
    );
    default: return (
      <FormPageLayout>
        <FormPage>
          <FormPageLogotype>
            <FormPageLogotypeHeader>
              {'Система мониторинга'}
            </FormPageLogotypeHeader>
          </FormPageLogotype>
          <LoginForm />
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
  };
}
