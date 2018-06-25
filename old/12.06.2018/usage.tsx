import * as React from 'react';

import { InputInitializeConnected as Input } from './connected';
import { ISAtributes } from './interfaces';

export default ({ sAtributes }: {sAtributes: ISAtributes}) => (<Input sAtributes={sAtributes} />);