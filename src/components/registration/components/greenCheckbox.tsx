import * as React from 'react';

import {
  RegistrationAgreementCheckbox,
  RegistrationAgreementLink,
  RegistrationAgreementCheckboxWrapper
} from './';

interface GreenCheckboxProps {
  agreement: boolean,
  validation: string,
  switchAgreementValue: () => any,
}

export const GreenCheckbox: React.SFC<GreenCheckboxProps> = (props) => {
  const {
    agreement,
    switchAgreementValue,
    validation,
  } = props;


  const handlerAgreement = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    switchAgreementValue();
  }

  return (
    <RegistrationAgreementCheckboxWrapper
      validation={validation}    
      hint={'Чтобы продолжить, '
        + 'необходимо принять пользовательское соглашение'
      }
    >
      <RegistrationAgreementCheckbox
        isSelected={agreement}
        onClick={handlerAgreement}
      >
        {'Я принимаю'}
      </RegistrationAgreementCheckbox>
      <RegistrationAgreementLink
        to={'/registration/agreement'}
        title={'Пользовательское соглашение'}
      >
        {'пользовательское соглашение'}
      </RegistrationAgreementLink>
    </RegistrationAgreementCheckboxWrapper>
  );
}