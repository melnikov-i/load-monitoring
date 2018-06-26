/**
 * Компонент содержт google reCaptcha и механизмы обработки полученного результата
 */
import * as React from 'react';
import * as Recaptcha from 'react-recaptcha';

import { RecaptchaWrapper } from './';
import { IFormsModelItem } from '@src/core/interfaces';

interface ReCaptchaProps {
  items: IFormsModelItem,
  /** Отправляет результат рекапчи в store */
  changeInputValue: (payload: any) => any,
}

export const ReCaptcha: React.SFC<ReCaptchaProps> = (props) => {
  const { changeInputValue, items: {validation} } = props;

  const handlerVerifyByReCaptcha = (response: string) => {
    changeInputValue({ registration: { reCaptcha: { value: response }}});
  };

  return (
    <RecaptchaWrapper
      validation={validation}
      hint={'Чтобы продолжить, необходимо пройти проверку'
      }
    >
      <div
        style={{
          display: 'inline-block',
        }}
      >
        <Recaptcha
          sitekey="6LcGDlkUAAAAAHu79gGfIkB6F7cU9-zD_vnOpaha"
          render="explicit"
          verifyCallback={handlerVerifyByReCaptcha}
        />
      </div>
    </RecaptchaWrapper>
  );
};
