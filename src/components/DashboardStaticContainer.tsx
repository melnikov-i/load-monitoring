import * as React from 'react';

import {
  DashboardInterface,
  ElementsOfDashboardCollectionInterface
} from '@src/interfaces';


import {
  WidgetsLayout,
} from '@src/styled';


import DashboardWidgetConnected from
  '@src/usage/DashboardWidgetUsage';

interface DashboardStaticContainerProps {
  /* Коллекция элементов дашборда */
  widgets: DashboardInterface['dash_data'],
  /* Коэффициент ширины виджета */
  width: DashboardInterface['dash_id']['dash_columns'],
  /*  */
  elements: ElementsOfDashboardCollectionInterface,
}

export const DashboardStaticContainer: 
React.SFC<DashboardStaticContainerProps> = (props) => {
  const { width, widgets, elements } = props;

  
  return (
    <WidgetsLayout>
      {/* Контейнер с виджетами */}
      {widgets.map( (widget, i) => (
        <DashboardWidgetConnected 
          key={i}
          widget_name={widget.widget_name}
          width={width}
          margin={i + 1}
          elements={elements}
          makeSeriesDataRequestFromAPI={undefined}
        />
      ))}
    </WidgetsLayout>
  );
};