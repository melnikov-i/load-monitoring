import * as React from 'react';

import {
  DashboardInterface,
  // WidgetInterface
} from '@src/interfaces';

import {
  emergence
} from '@src/styled';

import DashboardDragItemConnected from 
  '@src/usage/DashboardDragItemUsage';

interface DashboardDragContainerProps {
  /* Модель статического дашборда */
  DashboardStaticModel: DashboardInterface,
  /* Модель дашборда для конфигурирования */
  DashboardDragModel: DashboardInterface,
  /* Ключ, по значению которого определяется актуальность модели */
  isDashboardDragModelCopied: boolean,
  /* ID целевого элемента при перемещении виджета */
  currentTargetId: string,
  /* Запускает в action метод, актуализирующий модель DashboardDragModel */
  copyDashboardFromDashboardStaticModel: 
  ( payload: DashboardInterface ) => any,
  /* Запускает в action метод, обновляющий структуру DashboardDragModel */
  reorderDashboardDragModelDataCollectionOnlyOneTime: 
  ( payload: { model: DashboardInterface['dash_data'], id: string } ) => any,
  /* Метод библиотеки React-DnD */
  connectDropTarget?: any,
}


export const DashboardDragContainer:
React.SFC<DashboardDragContainerProps> = ( props ) => {
  const {
    DashboardStaticModel,
    DashboardDragModel,
    isDashboardDragModelCopied,
    currentTargetId,
    copyDashboardFromDashboardStaticModel,
    reorderDashboardDragModelDataCollectionOnlyOneTime,
    connectDropTarget,
  } = props;


  const { dash_data: widgets } = DashboardDragModel;
  const { dash_columns: width } = DashboardDragModel.dash_id;

  if ( !connectDropTarget ) return null;
  console.log('DashboardDragContainer');


  /**
   * Если в сторе не лежит актуальная модель для редактирования
   * запускает action, исправляющий это положение.
   */

  if ( !isDashboardDragModelCopied ) {
    copyDashboardFromDashboardStaticModel(DashboardStaticModel);
  } 


  /**
   * Передвигает виджеты.
   * id - id перемещаемого виджета.
   * targetIndex - индекс целевого таргета
   */

  // let currentTargetId: string = '';

  const moveWidgets = ( sourceId: string, targetId: string ) => {
    
    /* Исключаем повторные срабатывания */
    if ( currentTargetId !== targetId ) {
      console.log('source:', sourceId);
      console.log('target:', targetId);
      const numberOfSourceId: number = Number(sourceId);
      const numberOfTargetId: number = Number(targetId);
      const result = widgets.map(( widget, i ) => {
        switch ( i ) {
          case numberOfSourceId: return widgets[numberOfTargetId];
          case numberOfTargetId: return widgets[numberOfSourceId];
          default: return widgets[i];
        }
      });
      reorderDashboardDragModelDataCollectionOnlyOneTime({
        model: result,
        id: targetId
      });
      // console.log('source:', widgets);
      // console.log('result:', result);
    }
  };

  // moveItem( id: string, atIndex: string ) {
    // const sourceIndex: number = findWidget(id)['']

    // console.log('sourceIndex:', sourceIndex);

    // const item: WidgetInterface = this.findItem(id)['item'];
    // const index: number = this.findItem(id)['index'];
    // this.setState(
    //   update(this.state, {
    //     items: {
    //       $splice: [[index, 1], [atIndex, 0, item]],
    //     },
    //   }),
    // )


  /**
   * Возвращает id целевого таргета
   *
   * @param {string} id
   * @return {Object}
   */

  const findWidget = ( id: string ) => {
    return widgets.indexOf(widgets[id]);
  };

  // findItem( id: string ) {
    // const { items } = this.state;
    // const item = items.filter( i => i.id === id)[0];
    // const widget =
    //   widgets.filter( w => (w.device_id + w.widget_name ) === id )[0];
    // return {
    //   widget,
    //   index: widgets.indexOf(widget)
    // };
    // return {
    //   item,
    //   index: items.indexOf(item),
    // };

  
  /**
   * Стиль контейнера с виджетами. Соответствует WidgetsLayout
   */

  const WidgetsLayoutStyle = {
    display: 'block',
    boxSizing: 'border-box',
    overflow: 'hidden',
    margin: '20px 15px 0',
    animationName: emergence,
    animationDuration: '1s',
    animationTimingFunction: 'linear',
    animationFillMode: 'both',
  }

  return connectDropTarget(
    <div style={{WidgetsLayoutStyle}}>
      {widgets.map(( widget, i ) => (
        <DashboardDragItemConnected
          key={widget.device_id + widget.widget_name}
          widget_name={widget.widget_name}
          moveWidgets={moveWidgets}
          findWidget={findWidget}
          width={width}
          id={String(i)}
          margin={i + 1}
        />
      ))}
    </div>
  );
};


// type DashboardDragContainerState = {
//   widgets: DashboardInterface['dash_data'],
//   items: WidgetInterface[],
// }

// export class DashboardDragContainer 
// extends React.Component<DashboardDragContainerProps, DashboardDragContainerState> {
//   constructor( props ) {
//     super(props);
//     this.moveItem = this.moveItem.bind(this);
//     this.findItem = this.findItem.bind(this);
//     this.state = {
//       items: [
//         {
//           widget_name: 'cpu',
//           device_id: '12345',
//         },
//         {
//           widget_name: 'memory',
//           device_id: '12345',
//         },
//         {
//           widget_name: 'hdd',
//           device_id: '12345',
//         },
//         {
//           widget_name: 'lan',
//           device_id: '12345',
//         },
//       ],
//     };
//   };
