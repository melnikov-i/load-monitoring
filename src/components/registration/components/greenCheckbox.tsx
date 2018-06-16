import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import {
  RegistrationCheckboxWrapper,
  RegistrationCheckbox,
  RegistrationLabelText,
  RegistrationLink,
} from './';

import { ICheckboxDynamic } from '../interfaces';

interface GreenCheckboxProps extends RouteComponentProps<void> {
  checkboxDynamic: ICheckboxDynamic,
  /** Отправляет в store изменение значения чекбокса по нажатию пользователя */
  switchAgreementValue: () => any,
  /** Меняет значение фокуса псевдочекбокса при фокусе на оригинальном чекбоксе */
  switchFocusedValue: () => any,
}

export const GreenCheckbox: React.SFC<GreenCheckboxProps> = (props) => {
  const {
    checkboxDynamic: {value, validation, isFocused},
    switchAgreementValue,
    switchFocusedValue,
  } = props;


  const handleSelection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    switchAgreementValue();
  };

  const handleFocusAndBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.preventDefault();
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
      hint={'Необходимо принять пользовательское соглашение'}
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
          isSelected={value}
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
