import styled from 'styled-components';

import {
  emergence
} from '@src/styled';

/**
 *  Импорт логотипа страницы 
 */
const Logo = require('@src/images/LogoBig');

/**
 * Импорт констант
 */
import {
  LOGIN_LAYOUT_BIG_WIDTH,
  LOGIN_LAYOUT_BIG_HEIGHT,
  LOGIN_FORM_INPUT_BIG_HEIGHT,
  MIDDLE_SCREEN_MAX,
} from '@src/styled';

/**
 * Обертка основного блока каркаса страницы.
 * Необходима для анимации страницы.
 * @return {React.Component}
 */
export const LoginLayoutWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

/**
 * Основной блок каркаса страницы. Задает ширину,
 * высоту, положение на странице и анимацию формы
 * авторизации.
 * @return {React.Component}
 */
export const LoginLayout = styled.div`
  width: ${ LOGIN_LAYOUT_BIG_WIDTH };
  height: ${ LOGIN_LAYOUT_BIG_HEIGHT };
  padding-top: 100px;
  margin: 0 auto;
  animation-name: ${ emergence };
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-fill-mode: both;
  @media screen and (max-width: ${ MIDDLE_SCREEN_MAX }){
    padding: 20px 20px 0;
    box-sizing: border-box;
    width: 100%;
    height: calc(${ LOGIN_LAYOUT_BIG_HEIGHT } * 2);
  }
`;

/**
 * Оборачивает ключевые части формы
 * @return {React.Component}
 */
export const LoginWrapper = styled.div`
  width: ${ LOGIN_LAYOUT_BIG_WIDTH };
  height: ${ LOGIN_LAYOUT_BIG_HEIGHT };
  @media screen and (max-width: ${ MIDDLE_SCREEN_MAX}){
    height: calc(${ LOGIN_LAYOUT_BIG_HEIGHT } * 2);
    width: 100%;
  }
`;

/**
 * Оборачивает ключевые части формы регистрации
 * @returns {React.Component}
 */
export const RegistrationWrapper = styled.div`
  width: calc(${ LOGIN_LAYOUT_BIG_WIDTH } / 2);
  height: calc(${ LOGIN_LAYOUT_BIG_HEIGHT } / 2);
  margin: 0 auto;
  @media screen and (max-width: ${ MIDDLE_SCREEN_MAX}){
    width: 100%;
  }
`;

/**
 * Ключевая часть формы
 * @return {React.Component}
 */
export const LoginInnerPart = styled.div`
  display: inline-block;
  vertical-align: top;
  width: calc(${ LOGIN_LAYOUT_BIG_WIDTH } / 2);
  height: ${ LOGIN_LAYOUT_BIG_HEIGHT };
  @media screen and (max-width: ${ MIDDLE_SCREEN_MAX }){
    display: block;
    width: 100%;
  }
`;

/**
 * Логотип слева от формы ввода
 * @return {React.Component}
 */
export const LoginLogotype = styled.div`
  box-sizing: border-box;
  width: calc(100% - 10px);
  height: ${ LOGIN_LAYOUT_BIG_HEIGHT };
  background-image: url( ${ Logo } );
  background-position: top center;
  background-repeat: no-repeat;
  background-size: contain;
  padding-top: calc(${ LOGIN_LAYOUT_BIG_HEIGHT } - 80px);
  @media screen and (max-width: ${ MIDDLE_SCREEN_MAX }){
    width: calc(50% - 10px);
    height: calc(${ LOGIN_LAYOUT_BIG_HEIGHT } / 2);
    margin: 0 auto;
  }
`;

/**
 * Заголовок под логотипом
 * @return {React.Component}
 */
export const LoginHeader = styled.h2`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  color: #676a6c;
`;

/**
 * Каркас формы ввода логина и пароля
 * @return {React.Component}
 */
export const LoginFormLayout = styled.form`
  box-sizing: border-box;
  width: calc(100% - 10px);
  margin-left: 10px;
  height: ${ LOGIN_LAYOUT_BIG_HEIGHT };
  background-color: #fff;
  box-shadow: 0 0 5px 0 rgb(231, 234, 236);
  border-radius: 4px;  
  padding: 0 20px;
  position: relative;
`;

/**
 * Заголовок внутри формы ввода логина и пароля
 * @param {number} loginFormStateIndex
 * @return {React.Component}
 */
export const LoginFormHeader = styled.h4`
  font-size: 13px;
  font-weight: normal;
  color: ${ ( props: {loginFormStateIndex: number} ) => (
      ( props.loginFormStateIndex === 2 ) ? '#f52440' : '#888'
    )
  };
  text-align: center;
  height: 50px;
  line-height: 50px;
`;

/**
 * Заголовок внутри формы регистрации
 * @returns {React.Component}
 */
export const RegistrationFormHeader = styled.div`
  font-size: 13px;
  font-weight: normal;
  color: '#f52440';
  text-align: center;
  height: 50px;
  line-height: 50px;
`;

/**
 * Поле ввода логина или пароля
 * При вводе некорректных данных меняет цвет фона и рамки
 * @param {number} loginFormStateIndex
 * @return {React.Component}
 */
export const LoginFormInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  font-size: 18px;
  font-weight: normal;
  height: ${ LOGIN_FORM_INPUT_BIG_HEIGHT };
  margin-bottom: 20px;
  padding-left: 12px;
  border: 1px solid ${ ( props: {loginFormStateIndex: number} ) => (
      ( props.loginFormStateIndex === 2 ) ? '#b84252' : '#e5e6e7'
    )
  };
  background-color: ${( props: {loginFormStateIndex: number} ) => (
      ( props.loginFormStateIndex === 2 ) ? '#fa8595' : '#fff'
    )
  };
  color: #676a6c;
  border-radius: 2px;
`;

/**
 * Поле ввода на странице регистрации
 * В зависимости от состояния меняет цвет:
 *  - в процессе ввода данных - становитса ораньжевой
 *  - при вводе корректных данных становится зеленой
 *  - при вводе некорректных данных становится красной.
 * @param {string} registrationFormStateType
 */
export const RegistrationFormInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  font-size: 18px;
  font-weight: normal;
  height: ${ LOGIN_FORM_INPUT_BIG_HEIGHT};
  line-height: ${ LOGIN_FORM_INPUT_BIG_HEIGHT};
  margin-bottom: 20px;
  padding-left: 12px;
  border: 1px solid ${ (props: { registrationFormStateType: string }) => {
    switch ( props.registrationFormStateType ) {
      case 'notValid': return '#b84252';
      case 'valid': return 'green';
      case 'inProgress': return '#ff8500';
      default: return '#e5e6e7';
    }}
  };
  background-color: ${(props: { registrationFormStateType: string }) => {
    switch ( props.registrationFormStateType ) {
      case 'notValid': return '#fa8595';
      case 'valid': return 'green';
      case 'inProgress': return '#f8ac59';
      default: return '#fff';
    }}
  };
  color: ${(props: { registrationFormStateType: string }) => {
    switch (props.registrationFormStateType) {
      case 'notValid': return '#b84252';
      case 'valid':
      case 'inProgress': return '#fff';
      default: return '#676a6c';
    }
  }
  };
  border-radius: 2px;
`;

/**
 * Кнопка авторизации. В процессе проверки введенных данных
 * меняет цвет
 * @param {number} loginFormStateIndex
 * @return {React.Component}
 */
export const LoginFormButton = styled.button`
  width: 100%;
  height: ${ LOGIN_FORM_INPUT_BIG_HEIGHT };
  font-size: 18px;
  color: #fff;
  text-align: center;
  background-color: ${( props: {loginFormStateIndex: number} ) => (
      ( props.loginFormStateIndex === 1 ) ? '#eee' : '#1ab395'
    )
  };
  border-radius: 2px;
  cursor: pointer;
`;

/**
 * Контейнер, в который помещается спиннер
 * @return {React.Component}
 */
export const LoginFormSpinner = styled.div`
  width: 100%;
  height: 108px;
  position: relative;
  background-color: #fff;
`;
