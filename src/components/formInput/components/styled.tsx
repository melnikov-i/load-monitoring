import styled from 'styled-components';

import {
  LOGIN_FORM_INPUT_BIG_HEIGHT,
  MIDDLE_SCREEN_MAX
} from '@src/core/styled';

/**
 * Обертка поля ввода в форме регистрации
 * @param {string} validation
 * @param {string} hint
 */
type TFormInputWrapper = {
  validation: string,
  hint: string,
};

export const FormInputWrapper = styled.div`
  position: relative;
  &::after {
    content: "${(props: TFormInputWrapper) => props.hint}";
    display: ${(props: TFormInputWrapper) => {
    switch (props.validation) {
      case 'valid': return 'none';
      case 'notValid': return 'block';
      default: return 'none';
    }
  }};
    font-size: 12px;
    color: #b84252;
    position: absolute;
    width: 250px;
    top: 0;
    left: 105%;
  }
  @media screen and (max-width: ${ MIDDLE_SCREEN_MAX}){
    &::after {
      width: 300px;
      left: 50%;
      top: 13%;
    }
  }
`;

/**
 * Поле ввода на странице регистрации
 * @param {string} validation
 */
export const FormInputField = styled.input`
  box-sizing: border-box;
  border: ${(props: { validation: string }) => {
    switch (props.validation) {
      case 'valid': return '2px solid rgb(44, 143, 123)';
      case 'notValid': return '2px solid #b84252';
      default: return '1px solid #e5e6e7';
    }
  }};
  width: 100%;
  font-size: 16px;
  font-weight: normal;
  height: ${ LOGIN_FORM_INPUT_BIG_HEIGHT};
  line-height: ${ LOGIN_FORM_INPUT_BIG_HEIGHT};
  margin-bottom: 20px;
  padding-left: 12px;
  background-color: #fff;
  color: #676a6c;
  border-radius: 2px;
`;