import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { LayoutWrapper, Layout } from './';

import {
  RegistrationFormConnected as RegistrationForm
} from '../connected';

interface RegistrationProps extends RouteComponentProps<void> {

}

export const Registration: React.SFC<RegistrationProps> = (props) => {
  const {} = props;


  const layoutDecorator = (innerJSX: JSX.Element): JSX.Element => (
    <LayoutWrapper>
      <Layout>
        {innerJSX}
      </Layout>
    </LayoutWrapper>
  );

  console.log('layout');

  const view: string = 'form';

  switch (view) {
    case 'form': return layoutDecorator(<RegistrationForm />);
    default: return null;
  }
};
