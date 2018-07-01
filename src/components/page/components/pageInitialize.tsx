/**
 * PageInitialize -- компонент, выполняющий проверку наличия загруженного меню.
 * Если меню загружено, передает управление дочернему компоненту, если нет --
 * передает в action сообщение о необходимости загрузить меню.
 */
import * as React from 'react';

interface PageInitializeProps {
  isMenuLoaded: boolean,
  isError: boolean,
}

export const PageInitialize: React.SFC<PageInitializeProps> = (props) => {
  const { isMenuLoaded, isError } = props;
  if (!isMenuLoaded) {
    /** Меню не загружено */
     if (isError) {
       return null;
     } else {
       return null;
     }
  } else {
    /** Меню загружено -- грузим компонент */
    return null;
  }
};