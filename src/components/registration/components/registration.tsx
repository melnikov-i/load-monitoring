/**
 * Основной компонент этого модуля. Выполняет сборку всех остальных компонентов.
 * Варьирует ими в зависимости от входных параметров.
 */
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { LayoutWrapper, Layout } from './';

import {
  RegistrationFormConnected as RegistrationForm
} from '../connected';
import SimplyPage from '@src/components/simplyPage';

interface RegistrationProps extends RouteComponentProps<void> {
  /** параметр, определяющий отображаемый шаблон */
  registrationView: string,
}

export const Registration: React.SFC<RegistrationProps> = (props) => {
  const { registrationView } = props;

  const layoutDecorator = (innerJSX: JSX.Element): JSX.Element => (
    <LayoutWrapper>
      <Layout>
        {innerJSX}
      </Layout>
    </LayoutWrapper>
  );

  switch (registrationView) {
    case 'success': return <SimplyPage
      hint={'Регистрация прошла успешно. В течение ближайшего времени '
        + 'Вам на почту придет ссылка подтверждения регистрации.'}
      type={'success'} />;
    case 'already': 
      return <SimplyPage
        hint={'Указанный e-mail уже зарегистрирован в системе'}
        type={'error'} />;
    case 'failed': 
      return <SimplyPage
        hint={'Произошла ошибка во время регистрации. Пожалуйста, попробуйте еще раз позднее'}
        type={'error'} />;
    default: return layoutDecorator(<RegistrationForm />);
  }
};
