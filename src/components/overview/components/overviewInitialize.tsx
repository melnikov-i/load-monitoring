/**
 * OverviewInitialize -- компонент, выполняющий проверку наличия загруженной коллекции
 * для компонента Overview. При успешной проверки передает управление дочернему компоненту.
 * В обратном случае передает сообщение наверх для загрузки меню.
 */
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import NotificationPage from '@src/components/notificationPage';

interface OverviewInitializeProps extends RouteComponentProps<void> {
  isOverviewLoaded: boolean,
  isOverviewError: boolean,
  getOverviewCollection: () => any,
}

export const OverviewInitialize: React.SFC<OverviewInitializeProps> = (props) => {
  const {
    isOverviewLoaded,
    isOverviewError,
    getOverviewCollection,
  } = props;

  if (!isOverviewLoaded) {
    /** Коллекция не загружена */
    if (isOverviewError) {
      /** Из-за ошибки */
      return (<NotificationPage
        hint={'Произошла ошибка запроса данных. Пожалуйста, обновите страницу.'}
        type={'error'}
        callback={() => { }} />);
    } else {
      /** Начальная загрузка модуля */
      getOverviewCollection();
      return null;
    }
  } else {
    /** Меню загружено -- грузим компонент */
    return null;
  }
};