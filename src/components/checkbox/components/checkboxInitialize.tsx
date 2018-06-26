import * as React from 'react';
import { IFormsModelItem } from '@src/core/interfaces';
import { CheckboxConnected as Checkbox } from '../connected';

interface ReCaptchaInitializeProps {
  formsModelReCaptcha: IFormsModelItem,
  createFormsModelItem: (payload: any) => any;
}

export const ReCaptchaInitialize: React.SFC<ReCaptchaInitializeProps> = (props) => {
  const { formsModelReCaptcha, createFormsModelItem } = props;
  console.log('formsModelReCaptcha:', formsModelReCaptcha);

  if (!formsModelReCaptcha) {
    createFormsModelItem({
      registration: {
        checkbox: {
          value: false,
          focused: false,
          validation: '',
        }
      }
    });
    return null;
  } else {
    return <Checkbox items={formsModelReCaptcha} />;
  }
};