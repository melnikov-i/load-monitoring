/**
 * RecoveryForm -- это компонент, отображающий страницу в браузере,
 * единственное назначение которой -- предоставление пользователю возможности
 * восстановить пароль от учетной записи. Компонент состоит из нескольких представлений,
 * которые меняются в зависимости от ответа сервера:
 *   1. представление запроса данных от пользователя (форма)
 *   2. представление обработки запроса (спиннер)
 *   3. ответ от сервера:
 *     3.1. успех
 *     3.2. сервер ответил с ошибкой
 *     3.3. сервер не ответил
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

import { RecoveryFormConnected as RecoveryForm } from '../connected';
import NotificationPage from '@src/components/notificationPage';
import FormSpinner from '@src/components/formSpinner';

interface RecoveryProps extends RouteComponentProps<void> {
  recoveryView: string,
  changeRecoveryView: (payload: string) => any,
}

export const Recovery: React.SFC<RecoveryProps> = (props) => {
  const { recoveryView, changeRecoveryView } = props;

  const handleLinkToHome = () => {
    changeRecoveryView('form');
  };

  switch (recoveryView) {
    case 'error':
      console.warn('server not responsed');
      return <NotificationPage
        hint={'Сервер не ответил за отведенное время '
          + 'Пожалуйста проверьте подключение или повторите попытку позднее.'}
        type={'error'}
        callback={handleLinkToHome} />;
    case 'success': return <NotificationPage
      hint={'Данные приняты успешно. Вам на почту было выслано письмо. Для завершения процедуры восстановления пароля, пожалуйста следуйте инструкциям в письме'}
      type={'success'}
      callback={handleLinkToHome} />;
    case 'failed':
      return <NotificationPage
        hint={'Произошла ошибка во время обработки данных. Пожалуйста, попробуйте еще раз позднее'}
        type={'error'}
        callback={handleLinkToHome} />;
    case 'pending': return (
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
          <RecoveryForm />
          <FormSmallHeader color={'grey'}>{'Уже зарегистрированы?'}</FormSmallHeader>
          <FormAnchor to={'/'}>
            <FormAnchorSpan>{'Войти'}</FormAnchorSpan></FormAnchor>
          <FormSmallHeader color={'grey'}>{'Еще нет аккаунта?'}</FormSmallHeader>
          <FormAnchor to={'/registration'}>
            <FormAnchorSpan>{'Регистрация'}</FormAnchorSpan>
          </FormAnchor>
        </FormPage>
      </FormPageLayout>
    );
  }
    
}