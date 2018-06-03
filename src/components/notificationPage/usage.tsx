/**
 * Отдает главный компонент за пределы модуля для взаимодействия
 * с другими компонентами приложения
 */
import * as React from 'react';

import { NotificationPageConnected as NotificationPage } from './connected';

export default ({hint, type, callback}: {
  hint: string,
  type: string,
  callback: () => any,
}) => <NotificationPage hint={hint} type={type} callback={callback} />