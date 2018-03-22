import styled from 'styled-components';

import {
  getWidth,
  checkPosition
} from '@src/libs';

import {
  emergence
} from '@src/styled';



/**
 * Каркас виджета. Задает ширину и проигрывает
 * анимацию при старте страницы.
 *
 * @param {boolean} bg
 * @param {string} width
 * @param {margin} number
 * @return {React.Component}
 */

export const WidgetLayout = styled.div`
  display: block;  
  overflow: hidden;
  animation-name: ${ emergence };
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-fill-mode: both;
  margin: 20px 15px 0;
  box-sizing: border-box;
`;


/**
 * Контейнер виджета.
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
        : '15px'
    )
  };
  margin-bottom: ${(props: WidgetProps) => (
      ( props.margin !== undefined && props.width !== undefined )
        ? ( props.width === '1' ) ? '20px' : '2%'
        : '20px'
    )
  };

`;


  // margin-top: ${(props: WidgetProps) => (
  //     props.margin && props.width
  //       ? '0' : '20px'
  //   )
  // };
  // margin-left: ${(props: WidgetProps) => (
  //     props.margin && props.width
  //       ? '0' : '15px'
  //   )
  // };



/**
 * Виджет, способный менять свою ширину
 */

// export const DynamicWidthWidgetsLayout1 = styled.div`
//   box-sizing: border-box;
// `;




/**
 * Виджет на всю ширину родительского контейнера
 *
 * @return {React.Component}
 */

export const FullWidthWidgetContent = styled.div`
  box-sizing: border-box;
  padding: 0 15px 20px;
`;





export const DynamicWidthWidget = styled.div`
  background-color: #fff;
  --border-top: 2px solid #e7eaec;
  --position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const DynamicWidthWidgetContent = styled.div`
  padding: 10px 15px 20px;
  display: block;
  height: calc( 100% - 50px );
  box-sizing: border-box;
`;











/**
 * Обертка заголовка виджета
 *
 * @return {React.Component}
 */

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
`;

// заголовок любого виджета
export const WidgetHeader = styled.h4`
  font-size: 14px;
  height: 20px;
  text-overflow: ellipsis;
  color: #676a6c;
  box-sizing: border-box;
`;



// interface MainWidgetWrapperInterface {
//   width: string,
//   margin: number,
// }



// export const DynamicWidthWidgetWrapper1 = styled.div`
//   width: ${(props: MainWidgetWrapperInterface) => (
//       getWidth(props.width)
//     )
//   };
//   overflow: hidden;
//   animation-name: ${ emergence };
//   animation-duration: 1s;
//   animation-timing-function: linear;
//   animation-fill-mode: both;

//   display: inline-block;
//   vertical-align: top;
  
//   --position: relative;
//   margin-right: ${(props: MainWidgetWrapperInterface) => (
//       checkPosition(Number(props.width), props.margin)
//         ? ( props.width === '1' ) ? '0' : '2%' : '0'
//     )
//   };
//   margin-bottom: ${(props: MainWidgetWrapperInterface) => (
//       ( props.width === '1' ) ? '20px' : '2%'
//     )
//   };
//   &::before{
//     --content: "";
//     --display: block;
//     --padding-top: 62%;
//   }
// `;


/**
 * Обертка виджета на всю ширину родительского контейнера
 * Проигрывает анимацию на старте отображения страницы.
 *
 * @param {boolean} bg
 * @return {React.Component}
 */

// export const FullWidthWidgetWrapper = styled.div`
//   box-sizing: border-box;
//   overflow: hidden;
//   margin: 20px 15px;
//   background-color: ${(props: {bg: boolean}) => (
//       props.bg ? '#fff' : 'transparent'
//     )
//   };
//   border-top: ${(props: {bg: boolean}) => (
//       props.bg ? '2px solid #e7eaec' : 'none'
//     )
//   };
//   animation-name: ${ emergence };
//   animation-duration: 1s;
//   animation-timing-function: linear;
//   animation-fill-mode: both;
// `;

// Происк самого правого элемента среди динамических виджетов