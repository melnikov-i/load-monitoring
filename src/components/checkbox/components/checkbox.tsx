import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import {
  RegistrationCheckboxWrapper,
  RegistrationCheckbox,
  RegistrationLabelText,
  RegistrationLink,
} from './';

import { ICheckboxDynamic } from '@src/core/interfaces';

interface CheckboxProps extends RouteComponentProps<void> {
  checkboxDynamic: ICheckboxDynamic,
  /** Отправляет в store изменение значения чекбокса по нажатию пользователя */
  changeCheckboxValue: () => any,
  /** Меняет значение фокуса псевдочекбокса при фокусе на оригинальном чекбоксе */
  changeCheckboxFocused: () => any,
}

export const Checkbox: React.SFC<CheckboxProps> = (props) => {
  const {
    checkboxDynamic: { value, validation, isFocused },
    changeCheckboxValue,
    changeCheckboxFocused,
  } = props;

  const handleSelection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    changeCheckboxValue();
  };

  const handleFocusAndBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.preventDefault();
    changeCheckboxFocused();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.keyCode === 32) {
      changeCheckboxValue();
    }
    if (e.keyCode === 9) {
      const next: any = document.getElementById('submit');
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
        >{'Я принимаю'}</RegistrationLabelText>
      </label>
      <RegistrationLink
        to={'/registration/agreement'}
      >{'пользовательское соглашение'}</RegistrationLink>
    </RegistrationCheckboxWrapper>
  );
};
