import styled from 'styled-components';

import {
  LOGIN_LAYOUT_BIG_WIDTH,
  LOGIN_LAYOUT_BIG_HEIGHT,
  LOGIN_FORM_INPUT_BIG_HEIGHT,
  MIDDLE_SCREEN_MAX,
  emergence,
  colors,
} from '@src/core/styled';

const Logo = require('@src/images/LogoBig');

export const LoginLayoutWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const LoginLayout = styled.div`
  width: ${ LOGIN_LAYOUT_BIG_WIDTH};
  padding-top: 100px;
  margin: 0 auto;
  animation-name: ${ emergence};
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-fill-mode: both;
  @media screen and (max-width: ${ MIDDLE_SCREEN_MAX }){
    padding: 20px 20px 0;
    box-sizing: border-box;
    width: 100%;
  }
`;

export const LoginWrapper = styled.div`
  width: ${ LOGIN_LAYOUT_BIG_WIDTH};
  height: ${ LOGIN_LAYOUT_BIG_HEIGHT};
  @media screen and (max-width: ${ MIDDLE_SCREEN_MAX}){
    width: 100%;
    height: calc(${ LOGIN_LAYOUT_BIG_HEIGHT } * 2);
  }
`;

export const LoginInnerPart = styled.div`
  display: inline-block;
  vertical-align: top;
  width: calc(${ LOGIN_LAYOUT_BIG_WIDTH} / 2);
  height: ${ LOGIN_LAYOUT_BIG_HEIGHT};
  @media screen and (max-width: ${ MIDDLE_SCREEN_MAX }){
    display: block;
    width: 100%;
  }
`;

export const LoginLogotype = styled.div`
  box-sizing: border-box;
  width: calc(100% - 10px);
  height: ${ LOGIN_LAYOUT_BIG_HEIGHT};
  background-image: url( ${ Logo} );
  background-position: top center;
  background-repeat: no-repeat;
  background-size: contain;
  padding-top: calc(${ LOGIN_LAYOUT_BIG_HEIGHT} - 80px);
  @media screen and (max-width: ${ MIDDLE_SCREEN_MAX}){
    width: calc(50% - 10px);
    height: calc(${ LOGIN_LAYOUT_BIG_HEIGHT } / 2);
    margin: 0 auto;
  }
`;

export const LoginHeader = styled.div`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  color: #676a6c;
`;

export const LoginFormLayout = styled.div`
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

export const LoginFormHeader = styled.h4`
  font-size: 13px;
  font-weight: normal;
  text-align: center;
  height: 50px;
  line-height: 50px;
  color: ${(props: {color: string}) => 
    colors[props.color]};
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

/**
 * Кнопка авторизации. В процессе проверки введенных данных
 * меняет цвет
 * @param {number} loginFormStateIndex
 * @return {React.Component}
 */
export const LoginFormButton = styled.button`
  width: 100%;
  height: ${ LOGIN_FORM_INPUT_BIG_HEIGHT};
  font-size: 16px;
  color: #fff;
  text-align: center;
  background-color: #1ab395;
  border-radius: 2px;
  cursor: pointer;
`;

// background - color: ${
//   (props: { loginFormStateIndex: number }) => (
//     (props.loginFormStateIndex === 1) ? '#eee' : '#1ab395'
//   )
// };