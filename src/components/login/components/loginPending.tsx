import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { FormSpinnerLayout, FormHeader } from '@src/core/styled';
import Spinner from '@src/components/spinner';

interface LoginPendingProps extends RouteComponentProps<void> { }

export const LoginPending: React.SFC<LoginPendingProps> = (props) => {
  const { } = props;

  console.log('[login].loginPending');

  return (
    <div>
      <FormHeader color={'grey'}>{'Выполняется проверка'}</FormHeader>
      <FormSpinnerLayout>
        <Spinner width={3} color={'grey'} bgColor={'#f3f3f4'} />
      </FormSpinnerLayout>
    </div>
  );
}