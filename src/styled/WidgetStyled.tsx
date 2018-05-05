import styled from 'styled-components';

import {
  getWidth,
  checkPosition
} from '@src/libs';

import {
  emergence
} from '@src/styled';

/**
 * Компонент, содержащий компоненты виджетов. 
 * Задает отступы и проигрывает анимацию при старте страницы.
 * @return {React.Component}
 */
export const WidgetsLayout = styled.div`
  display: block;  
  box-sizing: border-box;
  overflow: hidden;
  margin: 20px 15px 0;
  animation-name: ${ emergence };
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-fill-mode: both;
`;

/**
 * Контейнер отдельного виджета.
 * Поведение при передаче параметров:
 *  + bg -> false - убирает фон, делая его прозрачным
 *  + width       - задает коэффициент, по которому вычисляется ширина
 *                  виджета. Коэффициент равен количеству колонок сетки.
 *  + margin      - наряду с width нужен для формирования отступа
 *                  виджета. Является порядковым номером виджета в сетке.
 * @param {boolean} bg
 * @param {string} width
 * @param {number} margin
 */
interface WidgetProps {
  bg?: boolean,
  width?: string,
  margin?: number,  
}

export const Widget = styled.div`
  background-color: ${ ( props: WidgetProps ) => (
      ( props.bg !== undefined )
        ? props.bg ? '#fff' : 'transparent'
        : '#fff'
    )
  };
  border-top: ${ ( props: WidgetProps ) => (
      ( props.bg !== undefined )
        ? props.bg ? '2px solid #e7eaec' : 'none'
        : '2px solid #e7eaec'
    )
  };
  width: ${(props: WidgetProps) => (
      ( props.width !== undefined )
        ? getWidth(props.width) : 'auto'
    )
  };
  display: ${(props: WidgetProps) => (
      ( props.width !== undefined ) ? 'inline-block' : 'block'
    )
  };
  vertical-align: ${(props: WidgetProps) => (
      props.width !== undefined ? 'top' : 'baseline'
    )
  };
  margin-right: ${(props: WidgetProps) => (
      ( props.margin !== undefined && props.width !== undefined )
        ? checkPosition(Number(props.width), props.margin)
          ? ( props.width === '1' ) ? '0' : '2%' : '0'
        : '0'
    )
  };
  margin-bottom: ${(props: WidgetProps) => (
      ( props.margin !== undefined && props.width !== undefined )
        ? ( props.width === '1' ) ? '20px' : '2%'
        : '0'
    )
  };
`;

/**
 * Обертка заголовка виджета
 * @return {React.Component}
 */
export const WidgetHeaderWrapper = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #e7eaec;
  padding: 15px;
`;

/**
 * Заголовок виджета
 */
export const WidgetHeader = styled.h4`
  font-size: 14px;
  height: 20px;
  text-overflow: ellipsis;
  color: #676a6c;
  box-sizing: border-box;
`;

/**
 * Содержимое виджета
 * @return {React.Component}
 */
export const WidgetContent = styled.div`
  box-sizing: border-box;
  padding: 0 15px 10px;
`;

/**
 * Обертка для формирования высоты виджета
 * @return {React.Component}
 */
export const WidgetWrapperForSVG = styled.div`
  position: relative;
  display: block;
  &::before {
    content: "";
    display: block;
    padding-top: 50%;
  }
`;

/**
 * Формирует высоту виджета
 *
 * @return {React.Component}
 */
export const WidgetContentInForSVG = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
