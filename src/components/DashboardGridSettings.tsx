import * as React from 'react';

import {
  DashboardInterface
} from '@src/interfaces';

import {
  FullWidthWidgetWrapper,
  FullWidthWidgetHeaderWrapper,
  WidgetHeader,
  FullWidthWidgetContent,
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
  changeSelectedCheckbox: (payload: string) => any,
  DraggableSelectedCheckbox: string,
  DraggableWidgetsCollection: DashboardInterface,
  mainHeaderButtonSwitch: () => any,
  sendChangedDashboardToAPI: 
  ( payload: DashboardInterface ) => any,
}

export const DashboardGridSettings: React.SFC<DashboardGridSettingsProps> = (props) => {
  const {
    changeSelectedCheckbox,
    DraggableSelectedCheckbox,
    DraggableWidgetsCollection,
    mainHeaderButtonSwitch,
    sendChangedDashboardToAPI
  } = props;

  // console.log('DraggableWidgetsCollection:', DraggableWidgetsCollection);

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
  };

  const canselHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    mainHeaderButtonSwitch();
  };

  const confirmHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    const item: DashboardInterface = {
      ...DraggableWidgetsCollection,
      ['dash_id']: {
        ...DraggableWidgetsCollection.dash_id,
        dash_columns: DraggableSelectedCheckbox,
      }
    }
    sendChangedDashboardToAPI(item);
  };

  return (
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
                isSelected={DraggableSelectedCheckbox === String(i + 1)}
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
      </FullWidthWidgetContent>
    </FullWidthWidgetWrapper>
  );
};