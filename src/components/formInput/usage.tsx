/**
 * Отдает главный компонент за пределы модуля для взаимодействия
 * с другими компонентами приложения
 */
import * as React from 'react';

import { FormInputConnected as FormInput } from './connected';
import { IFormInputStaticItems } from './interfaces';

export default ({ staticItems }: {staticItems: IFormInputStaticItems}) => (
  <FormInput staticItems={staticItems} />
);