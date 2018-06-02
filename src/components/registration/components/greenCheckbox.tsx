import * as React from 'react';

import {
  RegistrationAgreementCheckboxLink,
  RegistrationAgreementLink,
  RegistrationAgreementCheckboxWrapper,
  RegistrationAgreementCheckbox
} from './';

interface GreenCheckboxProps {
  /** Значение чекбокса */
  agreement: boolean,
  /** Значение результата валидации перед отправкой на сервер */
  validation: string,
  /** Отправляет в store изменение значения чекбокса по нажатию пользователя */
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
      hint={'Чтобы продолжить, необходимо принять пользовательское соглашение'}
    >
      <RegistrationAgreementCheckbox
        isSelected={agreement}
        onClick={handlerAgreement}
      >{'Я принимаю'}</RegistrationAgreementCheckbox>
      <RegistrationAgreementLink
        to={'/registration/agreement'}
        title={'Пользовательское соглашение'}
      >{'пользовательское соглашение'}</RegistrationAgreementLink>
    </RegistrationAgreementCheckboxWrapper>
  );
}