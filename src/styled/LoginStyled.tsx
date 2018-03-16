import styled from 'styled-components';

import {
  emergence
} from '@src/styled';

import {
  LoginFormStateIndexType
} from '@src/interfaces';

const Logo = require('@src/images/LogoBig');


import {
  LOGIN_LAYOUT_BIG_WIDTH,
  LOGIN_LAYOUT_BIG_HEIGHT,
  LOGIN_FORM_INPUT_BIG_HEIGHT
} from '@src/styled';

export const LoginLayoutWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

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

export const LoginWrapper = styled.div`
  width: ${ LOGIN_LAYOUT_BIG_WIDTH };
  height: ${ LOGIN_LAYOUT_BIG_HEIGHT };
`;

export const LoginInnerPart = styled.div`
  display: inline-block;
  vertical-align: top;
  width: calc(${ LOGIN_LAYOUT_BIG_WIDTH } / 2);
  height: ${ LOGIN_LAYOUT_BIG_HEIGHT };
`;

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

export const LoginHeader = styled.h2`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  color: #676a6c;
`;

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

export const LoginFormHeader = styled.h4`
  font-size: 13px;
  font-weight: normal;
  color: ${ ( props: LoginFormStateIndexType ) => (
      ( props.loginFormStateIndex === 2 ) ? '#f52440' : '#888'
    )
  };
  text-align: center;
  height: 50px;
  line-height: 50px;
`;

export const LoginFormInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  font-size: 13px;
  font-weight: normal;
  height: ${ LOGIN_FORM_INPUT_BIG_HEIGHT };
  margin-bottom: 20px;
  padding-left: 12px;
  border: 1px solid ${ ( props: LoginFormStateIndexType ) => (
      ( props.loginFormStateIndex === 2 ) ? '#b84252' : '#e5e6e7'
    )
  };
  background-color: ${( props: LoginFormStateIndexType ) => (
      ( props.loginFormStateIndex === 2 ) ? '#fa8595' : '#fff'
    )
  };
  color: #676a6c;
  border-radius: 2px;
`;

export const LoginFormButton = styled.button`
  width: 100%;
  height: ${ LOGIN_FORM_INPUT_BIG_HEIGHT };
  font-size: 14px;
  color: #fff;
  text-align: center;
  background-color: ${( props: LoginFormStateIndexType ) => (
      ( props.loginFormStateIndex === 1 ) ? '#eee' : '#1ab395'
    )
  };
  border-radius: 2px;
  cursor: pointer;
`;

export const LoginFormSpinner = styled.div`
  width: 100%;
  height: 108px;
  position: relative;
  background-color: #fff;
`;