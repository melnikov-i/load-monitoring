import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { FormAnchor, FormAnchorSpan } from '@src/core/styled';

import {
  NotFoundLayout,
  NotFoundHeader,
  NotFoundDescription
} from './';

interface NotFoundProps extends RouteComponentProps<void> { }

export const NotFound: React.SFC<NotFoundProps> = (props) => {
  const { } = props;

  return (
    <NotFoundLayout>
      <NotFoundHeader>{'404'}</NotFoundHeader>
      <NotFoundDescription>{'Страница не найдена'}</NotFoundDescription>
      <FormAnchor to='/'>
        <FormAnchorSpan>{'На главную'}</FormAnchorSpan>
      </FormAnchor>
    </NotFoundLayout>
  );
};