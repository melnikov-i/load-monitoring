import * as React from 'react';

import { InputInitializeConnected as Input } from './connected';
import { ISAtributes } from '@src/core/interfaces';

export default ({ sAtributes }: {sAtributes: ISAtributes}) => (<Input sAtributes={sAtributes} />);