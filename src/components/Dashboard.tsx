import * as React from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable
} from 'react-beautiful-dnd';

import {
  DashboardInterface,
} from '@src/interfaces';

import {
  DashboardLayout,
  DashboardText
} from '@src/styled';

import { Spinner } from '@src/components';

interface DashboardProps {
  id: DashboardInterface['dash_id']['dashboard_id'],
  DashboardWasRequestedFromAPI: DashboardInterface['dash_id']['dashboard_id'],
  makeDashboardRequestFromAPI: 
  (payload: DashboardInterface['dash_id']['dashboard_id']) => any,
  DashboardCollection: DashboardInterface,
}

export const Dashboard: React.SFC<DashboardProps> = (props) => {
  const {
    id,
    DashboardWasRequestedFromAPI,
    makeDashboardRequestFromAPI,
    DashboardCollection,
  } = props;

  const getDashboard = () => {
    if ( DashboardWasRequestedFromAPI !== id ) {
      console.log('request');
      makeDashboardRequestFromAPI(id);
    }
    return DashboardCollection;
  }
  const Dashboard = getDashboard();

  const onDragEnd = (result) => {
    console.log('result:', result);
  };

  console.log('Dashboard:', Dashboard);
  // console.log('ID', id);

  if ( Dashboard.dash_id.dashboard_id !== '' ) {
    return (
      <DashboardLayout>
        <DragDropContext
          onDragEnd={onDragEnd}
        >
          <Droppable droppableId={'test'}>
            {(provided, snapshot) => {
              console.log('provided:', provided);
              console.log('snapshot:', snapshot);
              return (
                <div>
                  <Draggable draggableId={'test-1'}>
                    {(provided, snapshot) => {
                      return (
                        <div>
                          <DashboardText>
                            {'hello_1'}
                          </DashboardText>
                          {provided.placeholder}
                        </div>
                      )
                    }}
                  </Draggable>
                  <Draggable draggableId={'test-2'}>
                    {(provided, snapshot) => {
                      return (
                        <div>
                          <DashboardText>
                            {'hello_2'}
                          </DashboardText>
                          {provided.placeholder}
                        </div>
                      )
                    }}
                  </Draggable>
                  <Draggable draggableId={'test-3'}>
                    {(provided, snapshot) => {
                      return (
                        <div>
                          <DashboardText>
                            {'hello_3'}
                          </DashboardText>
                          {provided.placeholder}
                        </div>
                      )
                    }}
                  </Draggable>
                  {provided.placeholder}
                </div>
              )
            }}
          </Droppable>
        </DragDropContext>

        <DashboardText>
          {'Dashboard ID: ' + Dashboard.dash_id.dashboard_id}
        </DashboardText>
        <DashboardText>
          {'Название' + Dashboard.dash_id.dashboard_name}
        </DashboardText>
          {Dashboard.dash_data.map((e, i) => {
            return (
              <div key={i}>
                <DashboardText>
                  {'Device ID:' + e.device_id }
                </DashboardText>
                <DashboardText>
                  {'Widget Name:' + e.widget_name }
                </DashboardText>
                <DashboardText>
                  {'Widget Width:' + e.widget_width }
                </DashboardText>          
              </div>
            );
          })}
      </DashboardLayout>
    );    
  } else {
    return (
      <Spinner
        width={3}
        color={'#2f4050'}
        bgColor={'#fff'}
      />
    );
  }

}