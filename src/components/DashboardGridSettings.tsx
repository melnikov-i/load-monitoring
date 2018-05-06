import * as React from 'react';

import {
  DashboardInterface
} from '@src/interfaces';

import {
  WidgetsLayout,
  Widget,
  WidgetContent,
  WidgetHeaderWrapper,
  WidgetHeader,  
  DraggableConfigColumnsWrapper,
  DraggableConfigColumnsHeaderWrapper,
  DraggableConfigColumnsHeader,
  DraggableConfigColumnsItems,
  DraggableConfigColumnsItemAnchor,
  DraggableConfigColumnsItemSpan,
  DraggableConfigAnchorsWrapper,
  Anchor
} from '@src/styled';

interface DashboardGridSettingsProps {
  /* Значение для конфигурирования количества колонок */
  DashboardDragModel: DashboardInterface,
  /* Запускает в action метод, меняющий значение DashboardDragModelCheckbox */
  changeSelectedCheckbox: (payload: string) => any,
  /* Запускает метод в action, меняющий ключ MainHeaderButtonWasClicked */
  mainHeaderButtonSwitch: () => any,
  /* Запускает метод в action, отправляющий в бэкэнд измененные данные */
  sendChangedDashboardToAPI: 
  ( payload: DashboardInterface ) => any,
}

export const DashboardGridSettings: React.SFC<DashboardGridSettingsProps> = (props) => {
  const {
    DashboardDragModel,
    changeSelectedCheckbox,
    mainHeaderButtonSwitch,
    sendChangedDashboardToAPI,
  } = props;

  const checkbox = DashboardDragModel.dash_id.dash_columns;
  
  /**
   * Поля выбора количество колонок сетки дашборда
   */
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
  };

  const canselHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    mainHeaderButtonSwitch();
  };

  const confirmHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    sendChangedDashboardToAPI(DashboardDragModel);
  };

  return (
    <WidgetsLayout>
      <Widget>
        <WidgetHeaderWrapper>
          <WidgetHeader>{'Настройки панели'}</WidgetHeader>
        </WidgetHeaderWrapper>
        <WidgetContent>
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
                  isSelected={checkbox === String(i + 1)}
                  onClick={columnsHandler}
                >
                  <DraggableConfigColumnsItemSpan>
                    {e}                  
                  </DraggableConfigColumnsItemSpan>
                </DraggableConfigColumnsItemAnchor>
              ))}
            </DraggableConfigColumnsItems>
          </DraggableConfigColumnsWrapper>
          <DraggableConfigColumnsWrapper>
            <DraggableConfigAnchorsWrapper>
              <Anchor
                background={'#f8ac59'}
                onClick={canselHandler}
              >
                {'Отмена'}
              </Anchor>
              <Anchor
                background={'#1ab394'}
                onClick={confirmHandler}
              >
                {'Применить'}
              </Anchor>
            </DraggableConfigAnchorsWrapper>
          </DraggableConfigColumnsWrapper>        
        </WidgetContent>
      </Widget>      
    </WidgetsLayout>
  );
};
