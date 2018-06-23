import * as React from 'react';

import { InputInitializeConnected as Input } from './connected';
import { IInputAtributes } from '@src/core/interfaces';

export default ({ atributes }: { atributes: IInputAtributes }) => (<Input atributes={atributes} />);