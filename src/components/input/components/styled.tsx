import styled from 'styled-components';

import {
  FORM_PAGE_FONT_SIZE,
  FORM_INPUT_WIDTH,
  colors,
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

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 15px;
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
`;

/**
 * Поле ввода на странице регистрации
 * @param {string} validation
 */
export const InputField = styled.input`
  border: ${(props: { validation: string }) => {
    switch (props.validation) {
      case 'valid': return '1px solid ' + colors.green;
      case 'notValid': return '1px solid ' + colors.red;
      default: return '1px solid ' + colors.lightGrey;
    }
  }};
  width: ${FORM_INPUT_WIDTH};
  font-size: ${FORM_PAGE_FONT_SIZE};
  font-weight: normal;
  padding: 6px 12px;
  background-color: #fff;
  background-image: none;
  color: inherit;
  display: block;
  color: #676a6c;
  border-radius: 1px;
`;
// box-sizing: border-box;
  // height: ${ LOGIN_FORM_INPUT_BIG_HEIGHT};
  // line-height: ${ LOGIN_FORM_INPUT_BIG_HEIGHT};