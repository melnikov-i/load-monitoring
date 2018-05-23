import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { LayoutWrapper, Layout } from '@src/components/registration/views';

import { Form } from '../controllers';

interface VMainProps extends RouteComponentProps<void> {

}

export const VMain: React.SFC<VMainProps> = (props) => {
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
    case 'form': return layoutDecorator(<Form />);
    default: return null;
  }
};
