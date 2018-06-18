import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import {
  LOGIN_FORM_INPUT_BIG_HEIGHT,
  LOGIN_FORM_BIG_FONT_SIZE,
  LOGIN_FORM_FONT_SIZE,
  // LOGIN_LAYOUT_BIG_WIDTH,
  MIDDLE_SCREEN_MAX,
  colors,
} from './'

/** 
 * Ссылка на другие страницы
 */
export const FormAnchor = styled(NavLink)`
  text-decoration: none;
`;

/**
 * Содержимое ссылки на другие страницы в виде кнопки
 * @return {React.Component}
 */
type IFormAnchor = {
  color: string,
  bColor: string,
  bgColor: string,
}
export const FormAnchorSpan = styled.span`
  display: block;
  height: ${ LOGIN_FORM_INPUT_BIG_HEIGHT};
  line-height: ${ LOGIN_FORM_INPUT_BIG_HEIGHT};
  font-size: ${ LOGIN_FORM_FONT_SIZE};
  text-align: center;
  border-radius: 2px;
  cursor: pointer;  
  box-sizing: border-box;
  text-decoration: none;
  margin: 0 auto;
  width: 100%;
  color: ${(props: IFormAnchor) => colors[props.color]};
  background-color: ${(props: IFormAnchor) => colors[props.bgColor]};
  border: ${(props: IFormAnchor) => (
    props.bColor !== '' ? '1px solid ' + colors[props.bColor] : 'none'
  )};
  @media screen and (max-width: ${ MIDDLE_SCREEN_MAX}){
    width: 100%;
  }
`;

/**
 * Заголовок формы
 * @return {React.Component}
 */
type IFormSmallHeader = {
  height: string,
  color: string,
  big: boolean,
}
export const FormHeader = styled.h4`
  font-size: ${(props: IFormSmallHeader) => (
    props.big ? `${ LOGIN_FORM_BIG_FONT_SIZE }` : `${ LOGIN_FORM_FONT_SIZE }`
  )};
  font-weight: normal;
  text-align: center;
  height: ${(props: IFormSmallHeader) => props.height};
  line-height: ${(props: IFormSmallHeader) => props.height};
  color: ${(props: IFormSmallHeader) => colors[props.color]};
`;