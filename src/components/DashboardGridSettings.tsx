import * as React from 'react';

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
} from '@src/styled';

interface DashboardGridSettingsProps {
  changeSelectedCheckbox: (payload: string) => any,
  DraggableSelectedCheckbox: string,
}

export const DashboardGridSettings: React.SFC<DashboardGridSettingsProps> = (props) => {
  const {
    changeSelectedCheckbox,
    DraggableSelectedCheckbox,
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
      </FullWidthWidgetContent>
    </FullWidthWidgetWrapper>
  );
};