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

// Обертка основного компонента 
export const MainComponentWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

// Происк крайнего элемента в строке
const checkPosition = (width: number, margin: number):boolean => {
  const currentMargin: number = margin + 1;
  const currentWidth: number = width + 1;
  if ( currentMargin % currentWidth === 0 ) {
    return false;
  }
  return true;
};

// Получение величины отступа
const getMargin = (width: number):string => {
  switch ( width ) {
    case 0: return '0';
    case 1: return '4%';
    case 2: return '3.125%';
    case 3: return '2.5%';
    default: return '0';
  }
};

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

// Сореджимое компонента
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

export const MainComponentHeader = styled.h2`
  font-size: 16px;
  font-weight: 100;
  color: #676a6c;
  padding: 15px;
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