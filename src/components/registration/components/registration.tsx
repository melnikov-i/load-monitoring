/**
 * Основной компонент этого модуля. Выполняет сборку всех остальных компонентов.
 * Варьирует ими в зависимости от входных параметров.
 */
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { LayoutWrapper, Layout } from './';
import { FormHeader, FormAnchor, FormAnchorSpan } from '@src/core/styled';

import {RegistrationFormConnected as RegistrationForm} from '../connected';
import NotificationPage from '@src/components/notificationPage';

interface RegistrationProps extends RouteComponentProps<void> {
  /** параметр, определяющий отображаемый шаблон */
  registrationView: string,
  changeRegistrationView: (payload: string) => any,
}

export const Registration: React.SFC<RegistrationProps> = (props) => {
  const {
    registrationView,
    changeRegistrationView
  } = props;

  const handleLinkToHome = () => {
    changeRegistrationView('form');
  }

  switch (registrationView) {
    case 'success': return <NotificationPage
      hint={'Регистрация прошла успешно. В течение ближайшего времени '
        + 'Вам на почту придет ссылка подтверждения регистрации.'}
      type={'success'}
      callback={handleLinkToHome} />;
    case 'already': 
      return <NotificationPage
        hint={'Указанный e-mail уже зарегистрирован в системе'}
        type={'error'}
        callback={handleLinkToHome} />;
    case 'failed': 
      return <NotificationPage
        hint={'Произошла ошибка во время регистрации. Пожалуйста, попробуйте еще раз позднее'}
        type={'error'}
        callback={handleLinkToHome} />;
    default: return (
      <LayoutWrapper>
        <Layout>
          <RegistrationForm />
          <FormHeader
            height={'24px'}
            color={'grey'}
            big={false}
          >
            {'Уже зарегистрированы?'}</FormHeader>
          <FormAnchor to={'/'}>
            <FormAnchorSpan
              color={'grey'}
              bColor={'lightGrey'}
              bgColor={'white'}
            >{'Войти'}</FormAnchorSpan></FormAnchor>
          <FormHeader
            height={'24px'}
            color={'grey'}
            big={false}
          >
            {'Забыли пароль?'}</FormHeader>
          <FormAnchor to={'/restore'}><FormAnchorSpan
            color={'grey'}
            bColor={'lightGrey'}
            bgColor={'white'}
          >{'Восстановить пароль'}</FormAnchorSpan></FormAnchor>
        </Layout>
      </LayoutWrapper>
    );
  }
};
