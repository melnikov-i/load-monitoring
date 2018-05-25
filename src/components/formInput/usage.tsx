/**
 * Отдает главный компонент за пределы модуля для взаимодействия
 * с другими компонентами приложения
 */
import * as React from 'react';

import { FormInputConnected as FormInput } from './connected';
import { IFormInputItems } from './interfaces';

export default ({ formInputItems }: {formInputItems: IFormInputItems}) => (
  <FormInput formInputItems={formInputItems} />
);