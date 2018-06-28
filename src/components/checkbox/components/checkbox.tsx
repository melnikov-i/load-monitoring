import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import {
  RegistrationCheckboxWrapper,
  RegistrationCheckbox,
  RegistrationLabelText,
  RegistrationLink,
} from './';

import { IFormModelCheckboxItem } from '@src/core/interfaces';

interface CheckboxProps extends RouteComponentProps<void> {
  items: IFormModelCheckboxItem
  /** Отправляет в store изменение значения чекбокса по нажатию пользователя */
  changeCheckboxValue: (payload: any) => any,
  /** Меняет значение фокуса псевдочекбокса при фокусе на оригинальном чекбоксе */
  changeCheckboxFocused: (payload: any) => any,
}

export const Checkbox: React.SFC<CheckboxProps> = (props) => {
  const {
    items: {value, validation, isFocused},
    changeCheckboxValue,
    changeCheckboxFocused,
  } = props;

  const payload: any = { registration: { checkbox: {} } };

  const handleSelection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    changeCheckboxValue(payload);
  };

  const handleFocusAndBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.preventDefault();
    changeCheckboxFocused(payload);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.keyCode === 32) {
      changeCheckboxValue(payload);
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
