import * as React from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd';

import {
  DashboardInterface,
  DraggableProvided,
} from '@src/interfaces';

import {
  DashboardLayout,
  DashboardText,
  
} from '@src/styled';

import { Spinner } from '@src/components';

interface DashboardProps {
  id: DashboardInterface['dash_id']['dashboard_id'],
  DashboardWasRequestedFromAPI: DashboardInterface['dash_id']['dashboard_id'],
  makeDashboardRequestFromAPI: 
  (payload: DashboardInterface['dash_id']['dashboard_id']) => any,
  DashboardCollection: DashboardInterface,
  reorderDashboardCollection:
  (payload: DashboardInterface['dash_data']) => any,
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
      makeDashboardRequestFromAPI(id);
    }
    return DashboardCollection;
  }
  const Dashboard = getDashboard();

  
  if ( Dashboard.dash_id.dashboard_id !== '' ) {
    const { reorderDashboardCollection } = props;
  
    // Drag'n'Drop

    const getListStyle = ( isDraggingOver: any ) => ({
      background: isDraggingOver ? 'lightblue' : 'lightgrey',
      padding: '8px',
      width: '300px',
    });

    const getItemStyle = ( draggableStyle: any, isDragging: any ) => {
      return ({
        userSelect: 'none',
        background: isDragging ? 'lightgreen' : 'grey',
        margin: '0 0 8px 0',
        padding: '16px',
        fontSize: '14px',
        ...draggableStyle
      })
    };



    const reorder = ( list: any[], startIndex: number, endIndex: number ) => {
      const result = Array.from(list);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);

      return result;
    };

    const onDragEnd = (result: DropResult) => {
      if ( !result.destination ) {
        return;
      }
      // console.log('result: ', result);
      const items = reorder(
        Dashboard.dash_data,
        result.source.index,
        result.destination.index,
      );
      reorderDashboardCollection(items);
    };

    return (
      <DashboardLayout>
        <DashboardText>
          {'Dashboard ID: ' + Dashboard.dash_id.dashboard_id}
        </DashboardText>
        <DashboardText>
          {'Название: ' + Dashboard.dash_id.dashboard_name}
        </DashboardText>

        <DragDropContext onDragEnd={
          (result) => {
            console.log('result: ', result);
            return onDragEnd(result)
          }
        }>
          <Droppable droppableId={'droppable'}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                {Dashboard.dash_data.map((e, i) => (
                  <Draggable 
                    key={i}
                    draggableId={'item-' + String(i)}
                    disableInteractiveElementBlocking={true}
                  >
                    {(provided: DraggableProvided, snapshot) => (
                      <div>
                        <div
                          ref={provided.innerRef}
                          style={getItemStyle(
                            provided.draggableProps.style,
                            snapshot.isDragging
                          )}
                          {...provided.dragHandleProps}
                        >
                          <DashboardText>
                            {'Device ID: ' + e.device_id }
                          </DashboardText>
                          <DashboardText>
                            {'Widget Name: ' + e.widget_name }
                          </DashboardText>
                          <DashboardText>
                            {'Widget Width: ' + e.widget_width }
                          </DashboardText>
                        </div>
                        {provided.placeholder}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
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
                            // <div>
                            //   <DashboardText>
                            //     {'Device ID: ' + e.device_id }
                            //   </DashboardText>
                            //   <DashboardText>
                            //     {'Widget Name: ' + e.widget_name }
                            //   </DashboardText>
                            //   <DashboardText>
                            //     {'Widget Width: ' + e.widget_width }
                            //   </DashboardText>                              
                            // </div>