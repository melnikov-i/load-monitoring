import * as React from 'react';


import {
  DashboardInterface,
  DashboardWidgetInterface
} from '@src/interfaces';

import DashboardWidgetConnected from 
  '@src/connected/DashboardWidgetConnected.usage';

import {
  DraggableConfigColumnsWrapper,
  DraggableConfigColumnsHeaderWrapper,
  DraggableConfigColumnsHeader,
  DraggableConfigColumnsItems,
  DraggableConfigColumnsItemAnchor,
  DraggableConfigColumnsItemSpan,

  FullWidthWidgetWrapper,
  FullWidthWidgetContent,
  FullWidthWidgetHeaderWrapper,

  DynamicWidthWidgetsLayout,
  WidgetHeader,
} from '@src/styled';

interface DraggableDashboardProps {
  changeSelectedCheckbox: (payload: string) => any,
  SelectedCheckbox: string,
  DashboardCollection: DashboardInterface,
}

export const DraggableDashboard: React.SFC<DraggableDashboardProps> = 
(props) => {
  const {
    changeSelectedCheckbox,
    SelectedCheckbox,
    // id,
    // DashboardWasRequestedFromAPI,
    // makeDashboardRequestFromAPI,
    DashboardCollection,
    // MainHeaderButtonWasClicked,
  } = props;

  // Поля
  const ColumnsValuesCollection: string[] = [
    '1 Колонка',
    '2 Колонки',
    '3 Колонки',
    // '4 Колонки',
  ];

  // Обработчики событий
  const columnsHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    const attribute: string | null = 
      e.currentTarget.getAttribute('data-index');
    if ( attribute !== null ) {
      changeSelectedCheckbox(attribute)
    }
  }

  return (
    <div>
      <FullWidthWidgetWrapper bg={true}>
        <FullWidthWidgetHeaderWrapper>
          <WidgetHeader>{'Настройки панели'}</WidgetHeader>
        </FullWidthWidgetHeaderWrapper>
        <FullWidthWidgetContent>
          <DraggableConfigColumnsWrapper>
            <DraggableConfigColumnsHeaderWrapper>
              <DraggableConfigColumnsHeader>
                {'Количество колонок:'}
              </DraggableConfigColumnsHeader>
            </DraggableConfigColumnsHeaderWrapper>
            <DraggableConfigColumnsItems>
              {ColumnsValuesCollection.map((e, i) => (
                <DraggableConfigColumnsItemAnchor
                  key={i}
                  data-index={i + 1}
                  isSelected={SelectedCheckbox === String(i + 1)}
                  onClick={columnsHandler}
                >
                  <DraggableConfigColumnsItemSpan>
                    {e}                  
                  </DraggableConfigColumnsItemSpan>
                </DraggableConfigColumnsItemAnchor>
              ))}
            </DraggableConfigColumnsItems>
          </DraggableConfigColumnsWrapper>
        </FullWidthWidgetContent>
      </FullWidthWidgetWrapper>


      <DynamicWidthWidgetsLayout>
        {DashboardCollection.dash_data.map((e, i) => {
          const element: DashboardWidgetInterface = {
            index: i + 1,
            width: SelectedCheckbox,
            widget_name: e.widget_name,
            device_id: e.device_id,
          }
          return (
            <DashboardWidgetConnected key={i} element={element} />
          );
        })}
      </DynamicWidthWidgetsLayout>
    </div>
  );    
};
          // <DynamicWidthWidgetWrapper
          //   width={SelectedCheckbox}
          //   margin={i + 1}
          //   key={i}
          // >
          //   <DynamicWidthWidgetHeaderWrapper>
          //     <WidgetHeader>{ e.widget_name }</WidgetHeader>
          //   </DynamicWidthWidgetHeaderWrapper>
          //   <DynamicWidthWidgetContent>

          //   </DynamicWidthWidgetContent>
          // </DynamicWidthWidgetWrapper>