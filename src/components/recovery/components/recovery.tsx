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

interface RecoveryProps extends RouteComponentProps<void> {}

export const Recovery: React.SFC<RecoveryProps> = (props) => {
  const {} = props;
  return (
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
        <FormSmallHeader color={'grey'}>{'Забыли пароль?'}</FormSmallHeader>
        <FormAnchor to={'/restore'}><FormAnchorSpan>{'Восстановить пароль'}</FormAnchorSpan></FormAnchor>
      </FormPage>
    </FormPageLayout>
  );
}