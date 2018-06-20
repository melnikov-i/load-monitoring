import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import {
  FORM_LAYOUT_WIDTH,
  LOGIN_FORM_INPUT_BIG_HEIGHT,
  FORM_PAGE_FONT_SIZE,
  emergence2,
  colors,
} from './';

const Logo = require('@src/images/LogoBig');

/** 
 * Внешний каркас формы
 */
export const FormPageLayout = styled.div`
  width: 100%;
  overflow: hidden;
`;

/** 
 * Внутренний каркас формы
 */
export const FormPage = styled.div`
  width: ${FORM_LAYOUT_WIDTH};
  padding: 20px 0;
  margin: 0 auto;
  animation-name: ${ emergence2};
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-fill-mode: both;
`;

export const FormPageLogotype = styled.div`
  width: ${FORM_LAYOUT_WIDTH};
  height: 40px;
  background-image: url( ${ Logo} );
  background-position: top center;
  background-repeat: no-repeat;
  background-size: contain;
  padding-top: 170px;
`;

export const FormPageLogotypeHeader = styled.h1`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  margin-top: 5px;
  color: ${colors.grey};
`;


/** 
 * Ссылка на другие страницы
 */
export const FormAnchor = styled(NavLink)`
  text-decoration: none;
  display: block;
  margin-bottom: 15px;
`;

/**
 * Содержимое ссылки на другие страницы в виде кнопки
 * @return {React.Component}
 */
export const FormAnchorSpan = styled.span`
  display: block;
    height: ${ LOGIN_FORM_INPUT_BIG_HEIGHT};
    line-height: ${ LOGIN_FORM_INPUT_BIG_HEIGHT};
  font-size: ${ FORM_PAGE_FONT_SIZE};
  text-align: center;
  border-radius: 2px;
  cursor: pointer;  
  box-sizing: border-box;
  text-decoration: none;
  margin: 0 auto;
  width: 100%;
  color: ${colors.grey};
  background-color: ${colors.white};
  border: 1px solid ${colors.lightGrey};
  &:hover {
    border-color: ${colors.lightMidGrey};
  }
`;

/**
 * Заголовок формы
 * @return {React.Component}
 */
export const FormHeader = styled.h4`
  font-size: ${FORM_PAGE_FONT_SIZE};
  font-weight: normal;
  text-align: center;
  color: ${(props: {color: string}) => colors[props.color]};
  margin-bottom: 10px;
`;

export const FormSmallHeader = FormHeader.extend`
  font-size: 10px;
`;

/**
 * Кнопка отправки формы
 */
export const FormSubmit = styled.button`
  width: 100%;
  padding: 6px 12px;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: ${FORM_PAGE_FONT_SIZE};
  font-weight: 400;
  touch-action: manipulation;
  cursor: pointer;
  color: #fff;
  background-color: ${colors.lightGreen};
  text-align: center;
  white-space: nowrap;
  user-select: none;
  margin-bottom: 15px;
  &:hover {
    background-color: ${colors.green};
  }
`;