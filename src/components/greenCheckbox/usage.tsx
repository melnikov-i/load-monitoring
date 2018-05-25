/**
 * Отдает главный компонент за пределы модуля для взаимодействия
 * с другими компонентами приложения
 */
import * as React from 'react';

import { GreenCheckboxConnected as GreenCheckbox } from './connected';

export default () => <GreenCheckbox />