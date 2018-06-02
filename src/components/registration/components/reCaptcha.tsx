/**
 * Компонент содержт google reCaptcha и механизмы обработки полученного результата
 */
import * as React from 'react';
import * as Recaptcha from 'react-recaptcha';

import { RecaptchaWrapper } from './';

interface ReCaptchaProps {
  /** Значение результата валидации перед отправкой на сервер */
  validation: string,
  /** Отправляет результат рекапчи в store */
  updateReCaptchaValue: (payload: string) => any,
}

export const ReCaptcha: React.SFC<ReCaptchaProps> = (props) => {
  const {
    updateReCaptchaValue,
    validation,
  } = props;

  const handlerVerifyByReCaptcha = (response: string) => {
    updateReCaptchaValue(response);
  };

  return (
    <RecaptchaWrapper
      validation={validation}
      hint={'Чтобы продолжить, необходимо пройти проверку'
      }
    >
      <Recaptcha
        elementID={'g-recaptcha'}
        sitekey="6LcGDlkUAAAAAHu79gGfIkB6F7cU9-zD_vnOpaha"
        verifyCallback={handlerVerifyByReCaptcha}
      />
    </RecaptchaWrapper>
  );
}
