import * as React from 'react';
import {
  Chart,
  Layer,
  Bars,
  Ticks,
  Handlers,
  Title,
} from 'rumble-charts';

import {
  WidgetInterface,
  DashboardInterface,
  ElementsOfDashboardCollectionInterface
} from '@src/interfaces';

import {
  WidgetWrapperForSVG,
  Widget,
  WidgetContent,
  WidgetContentInForSVG,
  WidgetHeaderWrapper,
  WidgetHeader,
} from '@src/styled';

export interface DashboardWidgetSelectorInterface {
  SeriesDataCollection: any,
  widget_name: WidgetInterface['widget_name'],
}

export interface DashboardWidgetProps {
  SeriesDataCollection: any,
  widget_name: WidgetInterface['widget_name'],
  width: DashboardInterface['dash_id']['dash_columns'],
  margin?: number,
  elements: ElementsOfDashboardCollectionInterface,
  makeSeriesDataRequestFromAPI: ( payload: any ) => any
}

export const DashboardWidget: 
React.SFC<DashboardWidgetProps> = (props) => {
  const {
    SeriesDataCollection,
    elements,
    widget_name,
    width,
    margin,
    makeSeriesDataRequestFromAPI
  } = props;

  
  /**
   * Данный механизм запускает повторное обращение к бэкэнду
   * с целью получить обновленные данные для всех диаграмм.
   * Но запускается только в первом виджете.
   */

  if ( elements.element === widget_name ) {
    makeSeriesDataRequestFromAPI(elements);
  }


  /**
   * Данные для блиблиотеки rumble-charts для отображения
   */

  const series: any = [
    {
      data: SeriesDataCollection,
    }
  ];

  console.log('series:', series[0].data.length);


  /**
   * Обрабатывает движения мыши по диаграмме.
   * 
   */

  const handleMouseMove = ( e: any ) => {

    /**
     * Вычисляет координату по оси Х для верхнего
     * левого угла всплывающей подсказки
     *
     * @return {number}
     */

    const clientX = () => {
      const x = e.clientX;
      if ( x >= 65 ) return x - 29;
      return x + 1;
    };


    /**
     * Вычисляет координату по оси Y для верхнего
     * левого угла всплывающей подсказки
     *
     * @return {number}
     */
    
    const clientY = () => {
      const y = e.clientY;
      if ( y >= 10 ) return y - 9;
      return y + 1;
    };


    /**
     * Получение <g> элемента внутри Title для импорта в него
     * данных для отображения.
     */

    const title = document.getElementById(props.widget_name);
    if ( !title ) return;

    
    /**
     * Получение и отсеивание ненужного элемента диаграммы,
     * на котором произошло событие наведения мыши.
     */

    const curent = e.originalEvent.target;
    
    if ( curent.nodeName === 'rect' ) {
      title.style.opacity = '0';
      return;
    }

    
    /**
     * Получение родительского и корневого элемента
     * блока с элементами диаграммы.
     */

    const parent = curent.parentNode;
    const root = parent.parentNode;

    
    /**
     * Индекс элемента диаграммы, на котором произошло событие.
     */

    let index = -1;
    root.childNodes.forEach((node, i) => {
      if ( node === parent ) index = i
    });

    if ( index === -1 ) return;


    /**
     * Получение времени для отображения во всплывающем меню
     */

    const date = 
      new Date(series[0].data[index].x * 1000);
    
    const time = ((date.getHours() > 9) ? '' : '0') + date.getHours()
    + ((date.getMinutes() > 9) ? ':' : ':0') + date.getMinutes()    
    + ((date.getSeconds() > 9) ? ':' : ':0') + date.getSeconds();

    
    /**
     * Добавление в элемент всплывающей подсказки информации,
     */

    title.setAttribute(
      'transform', `translate(${clientX()} ${clientY()})`);
    title.style.opacity = '1';
    title.innerHTML = '<rect x="0" y="0" width="28" height="8"'
      + ' fill="#676a6c" fillOpacity=".8" rx="1" ry="1"></rect>'
      + '<text fill="lightgray" x="2" y="5" style="fillOpacity: 1;'
      + ' transition: all 250ms; font-family: sans-serif;'
      + 'font-size: 3px; text-rendering: geometricprecision;">'
      + series[0].data[index].y + '% / ' + time + '</text>';
  };



  const handleMouseLeave = ( e: any ) => {
    const title = document.getElementById(props.widget_name);
    if ( !title ) return;
    title.style.opacity = '0';
  };


  return (
    <Widget
      width={width}
      margin={margin}
    >
      <WidgetHeaderWrapper>
        <WidgetHeader>{ widget_name }</WidgetHeader>
      </WidgetHeaderWrapper>
      <WidgetContent>
        <WidgetWrapperForSVG>
          <WidgetContentInForSVG>
            <Chart
              series={series}
              viewBox={'0 0 100 50'}
              minY={0}
              maxY={100}
              scaleX={{paddingStart: 1, paddingEnd: 0}}
              scaleY={{paddingTop: 4, paddingBottom: .05}}
            >
              <Layer width={'100%'} height={'100%'}>
                <Ticks 
                  axis={'y'}
                  position={'right'}
                  lineLength={.94}
                  lineOffset={-1}
                  lineVisible={true}
                  lineStyle={{
                    stroke: 'lightgray',
                    strokeWidth: 0.2,
                  }}
                  labelStyle={{
                    textAnchor: 'start',
                    dominantBaseline: 'middle',
                    fill: 'lightgray',
                    fontSize: 2.5,
                  }}
                  labelAttributes={{x: -5}}
                />
              </Layer>
              <Layer
                width={'92%'}
                height={'100%'}
                position={'left bottom'}
              >
                <Handlers
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  optimized={false}
                >
                  <Bars
                    barWidth={.011}
                    barStyle={{
                      fillOpacity: .7,
                      transition: 'all 250ms',
                      cursor: 'pointer',
                    }}
                    barAttributes={{
                      onMouseMove: e => e.target.style.fillOpacity = 1,
                      onMouseLeave: e => e.target.style.fillOpacity = .7,
                    }}
                  />
                </Handlers>
              </Layer>
              <Layer width={'100%'} height={'100%'}>
                <Title position={'top left'}>
                  <g id={widget_name} style={{opacity: 0,}}></g>
                </Title>
              </Layer>
            </Chart>
          </WidgetContentInForSVG>
        </WidgetWrapperForSVG>
      </WidgetContent>
    </Widget>
  );
};