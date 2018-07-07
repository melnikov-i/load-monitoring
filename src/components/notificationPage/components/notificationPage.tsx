/**
 * NotificationPage -- Страница, сообщающая о проблеме в работе приложения или об успешном
 * действии пользователя. За это отвечает ключ type. Страница показывает сообщение, за которое
 * отвечает параметр hint.
 * callback нужен для того, чтобы при нажатии на ссылку произвести какое-либо действие, 
 * связанное с redux (как частный случай - сбросить ключ, по которому выбирается отображаемый
 * на странице вид).
 */
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

  console.log('[notificationPage].notificationPage');

  return (
    <NotificationPageWrapper type={type}>
      <NotificationPageText type={type}>{hint ? hint : 'Неизвестная ошибка'}</NotificationPageText>
      <NotificationPageLinkToHome to={'/'} onClick={callback}>{'На главную'}</NotificationPageLinkToHome>
    </NotificationPageWrapper>
  );
}