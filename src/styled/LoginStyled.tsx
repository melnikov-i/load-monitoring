import styled from 'styled-components';

import {
  emergence
} from '@src/styled';


/* Импорт логотипа страницы */

const Logo = require('@src/images/LogoBig');


import {
  LOGIN_LAYOUT_BIG_WIDTH,
  LOGIN_LAYOUT_BIG_HEIGHT,
  LOGIN_FORM_INPUT_BIG_HEIGHT
} from '@src/styled';


/**
 * Обертка основного блока каркаса страницы.
 * Необходима для анимации страницы.
 *
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
 *
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
`;


/**
 * Оборачивает ключевые части формы
 *
 * @return {React.Component}
 */

export const LoginWrapper = styled.div`
  width: ${ LOGIN_LAYOUT_BIG_WIDTH };
  height: ${ LOGIN_LAYOUT_BIG_HEIGHT };
`;


/**
 * Ключевая часть формы
 *
 * @return {React.Component}
 */

export const LoginInnerPart = styled.div`
  display: inline-block;
  vertical-align: top;
  width: calc(${ LOGIN_LAYOUT_BIG_WIDTH } / 2);
  height: ${ LOGIN_LAYOUT_BIG_HEIGHT };
`;


/**
 * Логотип слева от формы ввода
 *
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
`;


/**
 * Заголовок под логотипом
 *
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
 *
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
 *
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
 * Поле ввода логина или пароля
 * При вводе некорректных данных меняет цвет фона и рамки
 *
 * @param {number} loginFormStateIndex
 * @return {React.Component}
 */

export const LoginFormInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  font-size: 13px;
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
 * Кнопка авторизации. В процессе проверки введенных данных
 * меняет цвет
 *
 * @param {number} loginFormStateIndex
 * @return {React.Component}
 */

export const LoginFormButton = styled.button`
  width: 100%;
  height: ${ LOGIN_FORM_INPUT_BIG_HEIGHT };
  font-size: 14px;
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
 *
 * @return {React.Component}
 */

export const LoginFormSpinner = styled.div`
  width: 100%;
  height: 108px;
  position: relative;
  background-color: #fff;
`;