import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

/**
 * Импорт констант
 */
import {
  emergence,
  LOGIN_LAYOUT_BIG_WIDTH,
  LOGIN_FORM_INPUT_BIG_HEIGHT,
  MIDDLE_SCREEN_MAX,
} from '@src/core/styled';

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
`;

/** Шаблон для стиля чекбокса */
const Checkboxes = require('@src/images/checkboxes');

/**
 * Чекбокс пользовательского соглашения
 * @returns {React.Component}
 */
/**
 * Обертка для чекбока. Служит каркасом для дочерних элементов
 */
type TRegistrationCheckbox = {
  hint: string,
  validation: string,
};
export const RegistrationCheckboxWrapper = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 15px;
  &::after {
    content: "${(props: TRegistrationCheckbox) => props.hint}";
    display: ${(props: TRegistrationCheckbox) => {
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
 * Зеленый скрытый оригинальный чекбокс
 */
export const RegistrationCheckbox = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
`;

/**
 * Текст для чекбокса с имитированным и стилизованным чекбоксом
 */
export const RegistrationLabelText = styled.span`
  cursor: pointer;
  font-size: 14px;
  color: #676a6c;
  &::before {
    content: '';
    display: inline-block;
    vertical-align: top;
    width: 24px;
    height: 24px;
    margin-right: 5px;
    background-image: url(${Checkboxes});
    background-size: 240px 24px;
    background-position: ${(props: {isSelected: boolean, isFocused: boolean}) => (
      props.isSelected ? '-48px 0' : props.isFocused ? '-24px 0' : '0 0'
    )};
  }
  &:hover:before {
    background-position: ${(props: { isSelected: boolean }) => (
      props.isSelected ? '-48px 0' : '-24px 0'
    )};
  }
`;

/**
 * Ссылка на страницу с пользовательским соглашением
 */
export const RegistrationLink = styled(NavLink)`
  text-decoration: none;
  height: 24px;
  line-height: 24px;
  display: inline-block;
  margin-left: 10px;
  font-size: 14px;
  color: #1c84c6;
`;

export const RecaptchaWrapper =
RegistrationCheckboxWrapper.extend`
  @media screen and (max-width: ${ MIDDLE_SCREEN_MAX}){
    &::after {
      width: 175px;
      left: 75%;
      text-align: left;
      top: 45%;
    }
  }
`;

export const ToLoginPageHead = styled.h4`
  font-size: 14px;
  color: #676a6c;
  margin: 15px auto;
  text-align: center;
`;

export const ToLoginPageLink = styled(NavLink)`
  display: block;
  height: ${ LOGIN_FORM_INPUT_BIG_HEIGHT};
  font-size: 18px;
  color: #676a6c;
  text-align: center;
  background-color: #fff;
  border-radius: 2px;
  cursor: pointer;
  box-sizing: border-box;
  border: 1px solid #e7eaec;
  text-decoration: none;
  line-height: 32px;
  margin: 0 auto;
  width: calc(${ LOGIN_LAYOUT_BIG_WIDTH} / 2);
  @media screen and (max-width: ${ MIDDLE_SCREEN_MAX}){
    width: 100%;
  }
`;

