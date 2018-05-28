import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { LayoutWrapper, Layout } from './';

import {
  RegistrationFormConnected as RegistrationForm
} from '../connected';

interface RegistrationProps extends RouteComponentProps<void> {
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

  console.log('registrationView', registrationView);

  console.log('layout');

  switch (registrationView) {
    case 'form': return layoutDecorator(<RegistrationForm />);
    case 'success': return null;
    case 'failed': return null;
    default: return null;
  }
};
