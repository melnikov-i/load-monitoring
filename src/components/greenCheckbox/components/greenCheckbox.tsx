import * as React from 'react';

import {
  RegistrationAgreementCheckbox,
} from './';

interface GreenCheckboxProps {
  agreement: boolean,
  switchAgreementValue: () => any,
}

export const GreenCheckbox: React.SFC<GreenCheckboxProps> = (props) => {
  const { agreement, switchAgreementValue } = props;


  const handlerAgreement = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    switchAgreementValue();
  }

  return (
    <RegistrationAgreementCheckbox
      isSelected={agreement}
      onClick={handlerAgreement}
      validation={''}
      hint={'Чтобы продолжить, '
        + 'необходимо принять пользовательское соглашение'
      }
    >
      {'Я принимаю'}
    </RegistrationAgreementCheckbox>
  );
}