/**
 * ReCaptchaInitialize -- это компонент, задачей которого является
 * проверка существования ячейки для хранения данных в хранилище формы.
 * При отсутствии создает, при наличии передает управление дочернему компоненту,
 * который отображает рекапчу
 */
import * as React from 'react';
import { IFormsModelItem } from '@src/core/interfaces';
import { ReCaptchaConnected as ReCaptcha } from '../connected';

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
        reCaptcha: {
          value: '',
          validation: '',
        }
      }
    });
    return null;
  } else {
    return <ReCaptcha items={formsModelReCaptcha} />;
  }

};