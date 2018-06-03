import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import {
  NotificationPageWrapper,
  NotificationPageText,
  NotificationPageLinkToHome
} from './';

interface NotificationPageProps extends RouteComponentProps<void> {
  hint: string,
  type: string,
  callback: () => any,
}

export const NotificationPage: React.SFC<NotificationPageProps> = (props) => {
  const { hint, type, callback } = props;

  return (
    <NotificationPageWrapper type={type}>
      <NotificationPageText
        type={type}
      >{hint ? hint : 'Неизвестная ошибка'}</NotificationPageText>
      <NotificationPageLinkToHome to={'/'} onClick={callback}>{'На главную'}</NotificationPageLinkToHome>
    </NotificationPageWrapper>
  );
}