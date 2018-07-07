/**
 * PageInitialize -- компонент, выполняющий проверку наличия загруженного меню.
 * Если меню загружено, передает управление дочернему компоненту, если нет --
 * передает в action сообщение о необходимости загрузить меню.
 * @param {boolean} isMenuLoaded
 * @param {boolean} isError
 * @returns {JSX.Element | null}
 */
import * as React from 'react';

import { PageLayoutConnected as PageLayout } from '../connected';
import NotificationPage from '@src/components/notificationPage';

interface PageInitializeProps {
  isMenuLoaded: boolean,
  isError: boolean,
  getAllMenusFromAPI: () => any,
}

export const PageInitialize: React.SFC<PageInitializeProps> = (props) => {
  const { isMenuLoaded, isError, getAllMenusFromAPI } = props;
  
  console.log('[PageInitialize]');
  
  if (!isMenuLoaded) {
    /** Меню не загружено */
     if (isError) {
       /** Из-за ошибки */
       console.log('error');
       return <NotificationPage
         hint={'Произошла ошибка запроса данных. Пожалуйста, обновите страницу.'}
         type={'error'}
         callback={() => {}} />;
     } else {
       /** Начальная загрузка модуля */
       getAllMenusFromAPI();
       return null;
     }
  } else {
    /** Меню загружено -- грузим компонент */
    console.log('loaded');
    return <PageLayout />;
  }
};