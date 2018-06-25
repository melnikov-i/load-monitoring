/**
 * FormSpinner -- это компонент, отображающий на странице браузера
 * круговой индикатор, говорящий пользователю об активности выполнения
 * процесса отправки данных на сервер.
 */
import * as React from 'react';

import { FormHeader } from '@src/core/styled';
import { SpinnerLayout } from './';
import Spinner from '@src/components/spinner';

export const FormSpinner: React.SFC<{}> = () => {
  return (
    <div>
      <FormHeader color={'grey'}>{'Выполняется проверка'}</FormHeader>
      <SpinnerLayout>
        <Spinner width={3} color={'grey'} bgColor={'#f3f3f4'} />
      </SpinnerLayout>
    </div>
  );
}