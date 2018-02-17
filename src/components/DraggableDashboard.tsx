import * as React from 'react';

import {
  DashboardInterface,
  // MainHeaderInterface
} from '@src/interfaces';

import {
  // DraggableConfigLayout,
  // DraggableConfigHeaderWrapper,
  // DraggableConfigHeader,
  DraggableConfigCollumnsWrapper,
  DraggableConfigCollumnsHeaderWrapper,
  DraggableConfigCollumnsHeader,
  DraggableConfigCollumnsItems,
  DraggableConfigCollumnsItemAnchor,
  DraggableConfigCollumnsItemSpan,

  MainComponentWrapper,
  MainComponentContent,
  
  MainWidgetWrapper,
  MainWidgetContent,
  MainComponentWidgetHeaderWrapper,
  MainComponentWidgetHeader,

  // StaticDashboardGridLayout,
  // StaticDashboardGridWrapper,
  // StaticDashboardGridItem,

  // DashboardText,
} from '@src/styled';

interface DraggableDashboardProps {
  changeSelectedCheckbox: (payload: string) => any,
  SelectedCheckbox: string,
  // id: DashboardInterface['dash_id']['dashboard_id'],
  // DashboardWasRequestedFromAPI: DashboardInterface['dash_id']['dashboard_id'],
  // makeDashboardRequestFromAPI: 
  // (payload: DashboardInterface['dash_id']['dashboard_id']) => any,
  DashboardCollection: DashboardInterface,
  // reorderDashboardCollection:
  // (payload: DashboardInterface['dash_data']) => any,
  // MainHeaderButtonWasClicked: boolean,
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
  const CollumnsValuesCollection: string[] = [
    '1 Колонка',
    '2 Колонки',
    '3 Колонки',
    '4 Колонки',
  ];

  // Обработчики событий
  const collumnsHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
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
      <MainComponentWrapper>
        <MainComponentContent bg={true}>
          <MainComponentWidgetHeaderWrapper>
            <MainComponentWidgetHeader>
              {'Настройки панели'}
            </MainComponentWidgetHeader>          
          </MainComponentWidgetHeaderWrapper>          
          <DraggableConfigCollumnsWrapper>
            <DraggableConfigCollumnsHeaderWrapper>
              <DraggableConfigCollumnsHeader>
                {'Количество колонок:'}
              </DraggableConfigCollumnsHeader>
            </DraggableConfigCollumnsHeaderWrapper>
            <DraggableConfigCollumnsItems>
              {CollumnsValuesCollection.map((e, i) => (
                <DraggableConfigCollumnsItemAnchor
                  key={i}
                  data-index={i}
                  isSelected={SelectedCheckbox === String(i)}
                  onClick={collumnsHandler}
                >
                  <DraggableConfigCollumnsItemSpan>
                    {e}                  
                  </DraggableConfigCollumnsItemSpan>
                </DraggableConfigCollumnsItemAnchor>
              ))}
            </DraggableConfigCollumnsItems>
          </DraggableConfigCollumnsWrapper>


        </MainComponentContent>
      </MainComponentWrapper>
      
      <MainComponentWrapper>
        <MainComponentContent
          bg={false}
        >
          {DashboardCollection.dash_data.map((e, i) => (
            <MainWidgetWrapper
              width={SelectedCheckbox}
              margin={i}
              key={i}
            >
              <MainWidgetContent>
                <MainComponentWidgetHeaderWrapper>
                  <MainComponentWidgetHeader>
                    { e.widget_name }
                  </MainComponentWidgetHeader>
                </MainComponentWidgetHeaderWrapper>
              </MainWidgetContent>
            </MainWidgetWrapper>
          ))}
        </MainComponentContent>
      </MainComponentWrapper>
    </div>
  );    
};
        //   <DraggableConfigCollumnsList>
        //     <DraggableConfigCollumnListItem>
        //       <DraggableConfigCollumtListItemText>
        //         {'1 Колонка'}
        //       </DraggableConfigCollumtListItemText>              
        //     </DraggableConfigCollumnListItem>
        //     <DraggableConfigCollumnListItem>
        //       <DraggableConfigCollumtListItemText>
        //         {'2 Колонка'}
        //       </DraggableConfigCollumtListItemText>              
        //     </DraggableConfigCollumnListItem>
        //   </DraggableConfigCollumnsList>



      // <MainHeaderConnected data={MainHeaderState} />
      // <MainComponentWrapper>
      //   <MainComponentContent bg={false}>

      //   </MainComponentContent>
      // </MainComponentWrapper>