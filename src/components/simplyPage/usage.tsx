/**
 * Отдает главный компонент за пределы модуля для взаимодействия
 * с другими компонентами приложения
 */
import * as React from 'react';

import { SimplyPageConnected as SimplyPage } from './connected';

export default ({hint, type}: {
  hint: string,
  type: string,
}) => <SimplyPage hint={hint} type={type} />