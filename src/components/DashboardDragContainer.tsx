import * as React from 'react';

import {
  DashboardInterface,
} from '@src/interfaces';

import {
  emergence
} from '@src/styled';

import DashboardDragItemConnected from 
  '@src/usage/DashboardDragItemUsage';

interface DashboardDragContainerProps {
  /* Модель статического дашборда для копирования */
  DashboardStaticModel: DashboardInterface,
  /* Модель дашборда для конфигурирования */
  DashboardDragModel: DashboardInterface,
  /* Ключ, по значению которого определяется актуальность модели */
  isDashboardDragModelCopied: boolean,
  /* ID целевого элемента при перемещении виджета */
  currentTargetId: number,
  /* Запускает в action метод, актуализирующий модель DashboardDragModel */
  copyDashboardFromDashboardStaticModel: 
  ( payload: DashboardInterface ) => any,
  /* Запускает в action метод, обновляющий структуру DashboardDragModel */
  reorderDashboardDragModelDataCollectionOnlyOneTime: 
  ( payload: { model: DashboardInterface['dash_data'], id: number } ) => any,
  /* Запускает в action метод, изменяющий ID целевого таргета перемещения */
  changeCurrentTargetId: ( payload: number ) => any,
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
    changeCurrentTargetId,
    connectDropTarget,
  } = props;

  
  /**
   * Присваиваем удобные имена для рабочих переменных
   */

  const { dash_data: widgets } = DashboardDragModel;
  const { dash_columns: width } = DashboardDragModel.dash_id;

  if ( !connectDropTarget ) return null;


  /**
   * Если в сторе не лежит актуальная модель для редактирования
   * запускает action, исправляющий это положение.
   */

  if ( !isDashboardDragModelCopied ) {
    copyDashboardFromDashboardStaticModel(DashboardStaticModel);
    return null;
  } 


  /**
   * Передвигает виджеты.
   * id - id перемещаемого виджета.
   * targetIndex - индекс целевого таргета
   */

  const moveWidgets = ( sourceIndex: number, targetIndex: number ) => {    
    /* Исключаем повторные срабатывания */
    if ( currentTargetId !== targetIndex ) {
      const result = widgets.map(( widget, i ) => {
        switch ( i ) {
          case sourceIndex: return widgets[targetIndex];
          case targetIndex: return widgets[sourceIndex];
          default: return widgets[i];
        }
      });
      reorderDashboardDragModelDataCollectionOnlyOneTime({
        model: result,
        id: targetIndex
      });
    }
  };


  /**
   * Возвращает индекс виджета в коллекции по id
   *
   * @param {string} id
   * @return {Object}
   */

  const findWidget = ( id: string ) => {
    const widget =
      widgets.filter( w => (w.device_id + w.widget_name) === id )[0];
    return widgets.indexOf(widget);
  };


  /**
   * Очищает currentTargetId
   *
   * @return {void}
   */

  const clearCurrentTargetId = () => {
    if ( currentTargetId !== -1 ) {
      changeCurrentTargetId(-1);
    }
  }
  

  return connectDropTarget(
    <div style={{// WidgetsLayout
      display: 'block',
      boxSizing: 'border-box',
      overflow: 'hidden',
      margin: '20px 15px 0',
      animationName: emergence,
      animationDuration: '1s',
      animationTimingFunction: 'linear',
      animationFillMode: 'both',
    }}
    >

      {widgets.map(( widget, i ) => (
        <DashboardDragItemConnected
          key={widget.device_id + widget.widget_name}
          id={widget.device_id + widget.widget_name}
          moveWidgets={moveWidgets}
          findWidget={findWidget}
          clearCurrentTargetId={clearCurrentTargetId}
          widget_name={widget.widget_name}
          width={width}
          margin={i + 1}
        />
      ))}
    </div>
  );
};