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

  const pageAfter = (innerText: string): JSX.Element => (
    <div>
      <p
        style={{
          fontSize: '16px',
          textAlign: 'center'
        }}
      >
        {innerText}
      </p>
    </div>
  );

  const successText: string = 'Регистрация прошла успешно. В течение ближайшего времени '
    + 'Вам на почту придет ссылка подтверждения регистрации.';
  const alreadyText: string = 'Данный электронный адрес уже зарегистрирован.';
  const error: string = 'Во время регистрации произошла ошибка. Попробуйте зарегистрироваться позднее';

  switch (registrationView) {
    case 'success': return layoutDecorator(pageAfter(successText));
    case 'already': return layoutDecorator(pageAfter(alreadyText));
    case 'failed': return layoutDecorator(pageAfter(error));
    default: return layoutDecorator(<RegistrationForm />);
  }
};
