import * as React from 'react';
import * as Recaptcha from 'react-recaptcha';

import {
  RecaptchaWrapper
} from './';

interface ReCaptchaProps {
  validation: string,
  updateReCaptchaValue: (payload: string) => any,
}

export const ReCaptcha: React.SFC<ReCaptchaProps> = (props) => {
  const {
    updateReCaptchaValue,
    validation,
  } = props;

  async function handlerVerifyByReCaptcha(response: string): Promise<void> {
    try {
      const resp = await response;
      console.log('resp:', resp);
      updateReCaptchaValue(resp);
    } catch (error) {
      console.warn(error);
    }
  }

  return (
    <RecaptchaWrapper
      validation={validation}
      hint={'Чтобы продолжить, необходимо пройти проверку'
      }
    >
      <Recaptcha
        sitekey="6LcGDlkUAAAAAHu79gGfIkB6F7cU9-zD_vnOpaha"
        render="explicit"
        verifyCallback={handlerVerifyByReCaptcha}
      />
    </RecaptchaWrapper>
  );
}