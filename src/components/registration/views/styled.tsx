import styled from 'styled-components';

import { emergence } from '@src/core/common/styled';

/** Шаблон для стиля чекбокса */
const Checkboxes = require('@src/images/checkboxes');

/**
 * Импорт констант
 */
import {
  LOGIN_LAYOUT_BIG_WIDTH,
  LOGIN_FORM_INPUT_BIG_HEIGHT,
  MIDDLE_SCREEN_MAX,
} from '@src/core/common/styled';

/**
 * Обертка основного блока каркаса страницы.
 * Необходима для анимации страницы.
 * @return {React.Component}
 */
export const LayoutWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

/**
 * Основной блок каркаса страницы. Задает ширину,
 * высоту, положение на странице и анимацию формы
 * авторизации.
 * @return {React.Component}
 */
export const Layout = styled.div`
  width: ${ LOGIN_LAYOUT_BIG_WIDTH};
  padding-top: 100px;
  margin: 0 auto;
  animation-name: ${ emergence};
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-fill-mode: both;
  @media screen and (max-width: ${ MIDDLE_SCREEN_MAX}){
    padding: 20px 20px 0;
    box-sizing: border-box;
    width: 100%;
  }
`;

/**
 * Оборачивает ключевые части формы регистрации
 * @returns {React.Component}
 */
export const Content = styled.div`
  width: calc(${ LOGIN_LAYOUT_BIG_WIDTH} / 2);
  margin: 0 auto;
  @media screen and (max-width: ${ MIDDLE_SCREEN_MAX}){
    width: 100%;
  }
`;

/**
 * Заголовок внутри формы регистрации
 * @returns {React.Component}
 */
export const RegistrationFormHeader = styled.div`
  height: 50px;
  line-height: 50px;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  color: #676a6c;
`;

/**
 * Обертка поля ввода в форме регистрации
 * @param {string} validation
 * @param {string} hint
 */
type TRegistrationFormInputWrapper = {
  validation: string,
  hint: string,
};


export const RegistrationFormInputWrapper = styled.div`
  position: relative;
  &::after {
    content: "${(props: TRegistrationFormInputWrapper) => props.hint}";
    display: ${(props: TRegistrationFormInputWrapper) => {
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


export const RegistrationFormInput = styled.input`
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

/**
 * Чекбокс пользовательского соглашения
 * @returns {React.Component}
 */
type TRegistrationAgreementCheckbox = {
  isSelected: boolean,
  hint: string,
  validation: string,
};


export const RegistrationAgreementCheckbox = styled.a`
  text-decoration: none;
  cursor: pointer;
  width: 100%;
  height: 24px;
  display: block;
  margin-bottom: 20px;
  font-size: 14px;
  color: #676a6c;
  position: relative;
  &::before {
    content: "";
    display: inline-block;
    vertical-align: top;
    width: 24px;
    height: 24px;
    margin-right: 10px;
    background-image: url(${Checkboxes});
    background-size: 240px 24px;
    background-position: ${(props: TRegistrationAgreementCheckbox) => (
    props.isSelected ? '-48px 0' : '0 0'
  )};
  }
  &:hover:before {
    background-position: ${(props: TRegistrationAgreementCheckbox) => (
    props.isSelected ? '-48px 0' : '-24px 0'
  )};
  }
  &::after {
    content: "${(props: TRegistrationAgreementCheckbox) => props.hint}";
    display: ${(props: TRegistrationAgreementCheckbox) => {
    switch (props.validation) {
      case 'valid': return 'none';
      case 'notValid': return 'block';
      default: return 'none';
    }
  }};
    font-size: 12px;
    color: #b84252;
    position: absolute;
    top: 50%;
    left: 105%;
    transform: translateY(-50%);
    width: 250px;
  }
`;

/**
 * Кнопка подтверждения регистрации.
 * @return {React.Component}
 */

export const RegistrationFormButton = styled.button`
  width: 100%;
  height: ${ LOGIN_FORM_INPUT_BIG_HEIGHT};
  font-size: 18px;
  color: #fff;
  text-align: center;
  background-color: #1ab395;
  border-radius: 2px;
  cursor: pointer;
  margin-top: 20px;
`;

