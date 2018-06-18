import * as React from 'react';

import {
  LoginFormButton
} from './';

interface ConfirmButtonProps {}

export const ConfirmButton: React.SFC<ConfirmButtonProps> = (props) => {
  const {} = props;

  const handlerSendCredential = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // sendUserCredentialToAPI({
    //   login: 'loginValue',
    //   password: 'passwordValue',
    // });
  };

  return (
    <LoginFormButton
      bgColor={'green'}
      onClick={handlerSendCredential}
    >{'Вход'}</LoginFormButton>
  );
}