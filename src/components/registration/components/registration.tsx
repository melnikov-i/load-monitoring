/**
 * Registration -- это компонент, отображающий страницу в браузере, 
 * единственное назначение которой -- предоставление пользователю
 * возможности осуществить регистрацию в системе. Компонент состоит
 * из нескольких представлений, которые меняются в зависимости от
 * ответа сервера:
 *   1. представление запроса данных от пользователя (форма).
 *   2. представление обработки запроса (спиннер).
 *   3. ответ от сервера
 *     3.1. успешная регистрация
 *     3.2. сервер вернул ошибку при регистрации
 *     3.3. пользователь уже существует
 *     3.4. сервер не ответил
 */
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import {
  FormPageLayout,
  FormPage,
  FormPageLogotype,
  FormPageLogotypeHeader,
  FormSmallHeader,
  FormAnchor,
  FormAnchorSpan
} from '@src/core/styled';

import {RegistrationFormConnected as RegistrationForm} from '../connected';
import NotificationPage from '@src/components/notificationPage';
import FormSpinner from '@src/components/formSpinner';

interface RegistrationProps extends RouteComponentProps<void> {
  /** параметр, определяющий отображаемый шаблон */
  registrationView: string,
  changeRegistrationView: (payload: string) => any,
}

export const Registration: React.SFC<RegistrationProps> = (props) => {
  const { registrationView, changeRegistrationView } = props;
  const handleLinkToHome = () => {
    changeRegistrationView('form');
  }

  switch (registrationView) {
    case 'error': 
      console.warn('server not responsed');
      return null;
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
    case 'pending':
      return (
        <FormPageLayout>
          <FormPage>
            <FormPageLogotype>
              <FormPageLogotypeHeader>
                {'Система мониторинга'}
              </FormPageLogotypeHeader>
              <FormSpinner />
            </FormPageLogotype>
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
          <RegistrationForm />
          <FormSmallHeader color={'grey'}>{'Уже зарегистрированы?'}</FormSmallHeader>
          <FormAnchor to={'/'}>
            <FormAnchorSpan>{'Войти'}</FormAnchorSpan></FormAnchor>
          <FormSmallHeader color={'grey'}>{'Забыли пароль?'}</FormSmallHeader>
          <FormAnchor to={'/recovery'}>
            <FormAnchorSpan>{'Восстановить пароль'}</FormAnchorSpan>
          </FormAnchor>
        </FormPage>
      </FormPageLayout>
    );
  }
};
