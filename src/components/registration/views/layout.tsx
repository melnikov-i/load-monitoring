import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import {
  LayoutWrapper,
  Layout,
  Content,
} from '@src/components/registration/views';

import { RegistrationForm } from '../controllers';

interface RegistrationLayoutProps extends RouteComponentProps<void> {

}

export const RegistrationLayout: React.SFC<RegistrationLayoutProps> = (props) => {
  const {} = props;

  const layoutDecorator = (innerJSX: JSX.Element): JSX.Element => (
    <LayoutWrapper>
      <Layout>
        <Content>
          {innerJSX}
        </Content>
      </Layout>
    </LayoutWrapper>
  )

  const view: string = 'form';

  switch (view) {
    case 'form': return layoutDecorator(<RegistrationForm />);
    default: return null;
  }
};
