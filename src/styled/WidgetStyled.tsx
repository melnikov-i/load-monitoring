import styled, { keyframes } from 'styled-components';

interface MainWidgetWrapperInterface {
  width: string,
  margin: number,
}

// Основная анимация блока
const emergence = keyframes`
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
const checkPosition = (width: number, margin: number):boolean => {
  const currentMargin: number = margin;
  const currentWidth: number = width;
  if ( currentMargin % currentWidth === 0 ) {
    return false;
  }
  return true;
};

// Получение величины отступа динамического виджета
const getMargin = (width: number):string => {
  switch ( width ) {
    case 1: return '0';
    case 2: return '4%';
    case 3: return '3.125%';
    case 4: return '2.5%';
    default: return '0';
  }
};

export const DynamicWidthWidgetWrapper = styled.div`
  width: ${(props: MainWidgetWrapperInterface) => {
      switch (props.width) {
        case '1': return '100%';
        case '2': return '48%';
        case '3': return '31.25%';
        case '4': return '23.125%';
        default: return '100%';
      }
    }
  };
  overflow: hidden;
  background-color: #fff;
  border-top: 2px solid #e7eaec;
  animation-name: ${ emergence };
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-fill-mode: both;
  display: inline-block;
  vertical-align: top;
  position: relative;
  margin-right: ${(props: MainWidgetWrapperInterface) => (
      checkPosition(Number(props.width), props.margin) 
        ? getMargin(Number(props.width)) : '0'
    )
  };
  margin-bottom:  ${(props: MainWidgetWrapperInterface) => {
      switch ( props.width ) {
        case '1': return '20px';
        case '2':
        case '3':
        case '4': return getMargin(Number(props.width));
        default: return '20px';
      }
    }
  };
  &::before{
    content: "";
    display: block;
    padding-top: 62%;
  }
`;

export const DynamicWidthWidgetContent = styled.div`
  box-sizing: border-box;
  padding: 0 15px 20px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;








// Обертка основного компонента 
export const MainComponentWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

// Сореджимое основного компонента
export const MainComponentContent = styled.div`
  margin: 20px 15px 0;
  box-sizing: border-box;
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

// Основной заголовок компонента
// export const MainComponentHeader = styled.h2`
//   font-size: 16px;
//   font-weight: 100;
//   color: #676a6c;
//   padding: 15px;
// `;







// Обертка виджета
export const MainWidgetWrapper = MainComponentWrapper.extend`
  width: ${(props: MainWidgetWrapperInterface) => {
      switch (props.width) {
        case '0': return '100%';
        case '1': return '48%';
        case '2': return '31.25%';
        case '3': return '23.125%';
        default: return '100%';
      }
    }
  };
  display: inline-block;
  vertical-align: top;
  position: relative;
  margin-right: ${(props: MainWidgetWrapperInterface) => (
      checkPosition(Number(props.width), props.margin) 
        ? getMargin(Number(props.width)) : '0'
    )
  };
  margin-bottom:  ${(props: MainWidgetWrapperInterface) => (
      checkPosition(Number(props.width), props.margin) 
        ? getMargin(Number(props.width)) : '20px'
    )
  };
  &::before{
    content: "";
    display: block;
    padding-top: 62%;
  }
`;

// Содержимое виджета
export const MainWidgetContent = styled.div`
  background-color: #fff;
  border-top: 2px solid #e7eaec;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;





export const MainComponentWidgetHeaderWrapper = styled.div`
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #e7eaec;
`;


export const MainComponentWidgetHeader = styled.h4`
  display: inline-block;
  font-size: 14px;
  text-overflow: ellipsis;
  padding: 15px;
  color: #676a6c;
`;

export const MainErrorText = styled.p`
  font-size: 14px;
  font-weight: normal;
  color: #676a6c;
`;