import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import {
  RegistrationCheckboxWrapper,
  RegistrationCheckbox,
  RegistrationLabelText,
  RegistrationLink,
} from './';

interface GreenCheckboxProps extends RouteComponentProps<void> {
  /** Значение чекбокса */
  isSelected: boolean,
  isFocused: boolean,
  /** Значение результата валидации перед отправкой на сервер */
  validation: string,
  /** Отправляет в store изменение значения чекбокса по нажатию пользователя */
  switchAgreementValue: () => any,
  /** Меняет значение фокуса псевдочекбокса при фокусе на оригинальном чекбоксе */
  switchFocusedValue: () => any,
}

export const GreenCheckbox: React.SFC<GreenCheckboxProps> = (props) => {
  const {
    isSelected,
    isFocused,
    switchAgreementValue,
    switchFocusedValue,
    validation,
  } = props;


  const handleSelection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    switchAgreementValue();
  };

  const handleFocusAndBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log('focus');
    switchFocusedValue();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.keyCode === 32) {
      switchAgreementValue();
    }
    if (e.keyCode === 9) {
      const next: any = document.getElementById('registrationButton');
      next.focus();
    }
  }

  return (
    <RegistrationCheckboxWrapper
      validation={validation}    
      hint={'Чтобы продолжить, необходимо принять пользовательское соглашение'}
    >
      <label htmlFor="">
        <RegistrationCheckbox
          id={'registrationCheckbox'}
          type={'checkbox'}
          onFocus={handleFocusAndBlur}
          onBlur={handleFocusAndBlur}
          onKeyDown={handleKeyDown}
        />
        <RegistrationLabelText
          isSelected={isSelected}
          isFocused={isFocused}
          onClick={handleSelection}
        >
          {'Я принимаю'}
        </RegistrationLabelText>
      </label>
      <RegistrationLink
        to={'/registration/agreement'}
      >
        {'пользовательское соглашение'}
      </RegistrationLink>
  </RegistrationCheckboxWrapper>
  );
};
