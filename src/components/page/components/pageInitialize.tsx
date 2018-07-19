/**
 * PageInitialize -- компонент, выполняющий проверку наличия загруженного меню.
 * Если меню загружено, передает управление дочернему компоненту, если нет --
 * передает в action сообщение о необходимости загрузить меню.
 * @param {boolean} isMenuLoaded
 * @param {boolean} isError
 * @returns {JSX.Element | null}
 */
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { PageLayoutConnected as PageLayout } from '../connected';
import NotificationPage from '@src/components/notificationPage';

interface PageInitializeProps extends RouteComponentProps<void> {
  isMenuLoaded: boolean,
  isError: boolean,
  getAllMenusFromAPI: () => any,
}

export const PageInitialize: React.SFC<PageInitializeProps> = (props) => {
  const { isMenuLoaded, isError, getAllMenusFromAPI } = props;
  if (!isMenuLoaded) {
    /** Меню не загружено */
     if (isError) {
       /** Из-за ошибки */
       return (<NotificationPage
         hint={'Произошла ошибка запроса данных. Пожалуйста, обновите страницу.'}
         type={'error'}
       callback={() => {}} />);
     } else {
       /** Начальная загрузка модуля */
       getAllMenusFromAPI();
       return null;
     }
  } else {
    /** Меню загружено -- грузим компонент */
    return <PageLayout />;
  }
};