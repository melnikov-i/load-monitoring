import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import {
  // LayoutWrapper,
  // Layout,
  // Content,
} from '@src/components/registration/views';

interface FormProps extends RouteComponentProps<void> {

}

export const Form: React.SFC<FormProps> = (props) => {
  const { } = props;

  return (
    <form action="">
      <p style={{
        fontSize: '14px',
      }}>Привет из формы</p>
    </form>
  );
};
