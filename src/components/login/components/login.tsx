import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

// import { Spinner } from '@src/components';

import {} from './';

import { LoginFormConnected as LoginForm } from '../connected';
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

  const status: string = '';

  const getView = (status: string): JSX.Element => {
    switch (status) {

  //     case 'processing':
  //       return (
  //         <LoginFormLayout>
  //           <LoginFormHeader color={'grey'}>{'Проверка учетных данных'}</LoginFormHeader>
  //           <LoginFormSpinner>
  //             <Spinner
  //               width={3}
  //               color={'grey'}
  //               bgColor={'#fff'}
  //             />
  //           </LoginFormSpinner>
  //         </LoginFormLayout>
  //       );

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
      </FormPage>
    </FormPageLayout>
  );
}
