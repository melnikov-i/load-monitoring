import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import {
  FORM_LAYOUT_WIDTH,
  FORM_PAGE_FONT_SIZE,
  SMALL_SCREEN_MAX,
  emergence2,
  colors,
} from './';

const Logo = require('@src/images/LogoBig');

/** 
 * Внешний каркас формы
 */
export const FormPageLayout = styled.div`
  width: 100%;
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
  @media screen and (max-width: ${SMALL_SCREEN_MAX}) {
    margin-top: -125px;
  }
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
  font-size: ${ FORM_PAGE_FONT_SIZE};
  text-align: center;
  border-radius: 2px;
  cursor: pointer;  
  padding: 6px 0;
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
  margin-bottom: 5px;
`;

export const FormSmallHeader = FormHeader.extend`
  font-size: 10px;
`;
