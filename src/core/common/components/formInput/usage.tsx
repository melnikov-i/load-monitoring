/**
 * Отдает главный компонент за пределы модуля для взаимодействия
 * с другими компонентами приложения
 */
import * as React from 'react';

import { Main as FormInput } from './controllers';
import { IFormInputItems } from './model';

export default ({ formInputItems }: {formInputItems: IFormInputItems}) => (
  <FormInput formInputItems={formInputItems} />
);