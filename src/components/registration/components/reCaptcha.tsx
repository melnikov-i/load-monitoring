import * as React from 'react';
import * as Recaptcha from 'react-recaptcha';

interface ReCaptchaProps {
  updateReCaptchaValue: (payload: string) => any,
}

export const ReCaptcha: React.SFC<ReCaptchaProps> = (props) => {
  const { updateReCaptchaValue } = props;

  const handlerVerifyByReCaptcha = (response: string) => {
    updateReCaptchaValue(response);
  }

  return (
    <Recaptcha
      sitekey="6LcGDlkUAAAAAHu79gGfIkB6F7cU9-zD_vnOpaha"
      render="explicit"
      verifyCallback={handlerVerifyByReCaptcha}
    />
  );
}