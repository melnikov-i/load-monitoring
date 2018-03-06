import styled, { keyframes } from 'styled-components';

import {
  getWidth,
  checkPosition
} from '@src/libs';

interface MainWidgetWrapperInterface {
  width: string,
  margin: number,
}

// Основная анимация блока
export const emergence = keyframes`
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;


/**
 * Виджет на всю ширину области
 */

// Обертка для виджета во всю ширину окна
export const FullWidthWidgetWrapper = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  margin: 20px 15px;
  background-color: ${(props: {bg: boolean}) => (
      props.bg ? '#fff' : 'transparent'
    )
  };
  border-top: ${(props: {bg: boolean}) => (
      props.bg ? '2px solid #e7eaec' : 'none'
    )
  };
  animation-name: ${ emergence };
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-fill-mode: both;
`;

// Виджет во всю ширину окна
export const FullWidthWidgetContent = styled.div`
  box-sizing: border-box;
  padding: 0 15px 20px;
`;

/**
 * Заголовок виджета 
 */
// обертка для заголовка во всю ширину окна
export const FullWidthWidgetHeaderWrapper = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #e7eaec;
  padding: 15px;
`;

// Обертка для заголовка способного менять ширину
export const DynamicWidthWidgetHeaderWrapper = 
FullWidthWidgetHeaderWrapper.extend`
  width: 100%;
  display: block;
  height: 50px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
`;

// заголовок любого виджета
export const WidgetHeader = styled.h4`
  font-size: 14px;
  height: 20px;
  text-overflow: ellipsis;
  color: #676a6c;
  box-sizing: border-box;
`;


/**
 * Виджет, способный менять свою ширину
 */

export const DynamicWidthWidgetsLayout = styled.div`
  box-sizing: border-box;
  margin: 20px 15px 0;
`;

// Происк самого правого элемента среди динамических виджетов

export const DynamicWidthWidgetWrapper = styled.div`
  width: ${(props: MainWidgetWrapperInterface) => (
      getWidth(props.width)
    )
  };
  overflow: hidden;
  animation-name: ${ emergence };
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-fill-mode: both;
  display: inline-block;
  vertical-align: top;
  position: relative;
  margin-right: ${(props: MainWidgetWrapperInterface) => (
      checkPosition(Number(props.width), props.margin)
        ? ( props.width === '1' ) ? '0' : '2%' : '0'
    )
  };
  margin-bottom: ${(props: MainWidgetWrapperInterface) => (
      ( props.width === '1' ) ? '20px' : '2%'
    )
  };
  &::before{
    content: "";
    display: block;
    padding-top: 62%;
  }
`;

export const DynamicWidthWidget = styled.div`
  background-color: #fff;
  border-top: 2px solid #e7eaec;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const DynamicWidthWidgetContent = styled.div`
  padding: 0 15px 20px;
  box-sizing: border-box;
`;