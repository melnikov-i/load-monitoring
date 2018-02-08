import * as React from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd';

import {
  DashboardInterface,
} from '@src/interfaces';

import {
  DashboardLayout,
  DashboardText,
  DashboardDragGrid
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
      
    });

    const getItemStyle = ( draggableStyle: any, isDragging: any ) => ({
      userSelect: 'none',
      background: isDragging ? 'lightgreen' : 'grey',
      ...draggableStyle
    });

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
          <Droppable 
            droppableId={'droppable'}
            direction={'horizontal'}
          >
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                {Dashboard.dash_data.map((e, i) => (
                  <Draggable 
                    key={i}
                    draggableId={'item-1' + String(i)}
                    disableInteractiveElementBlocking={true}
                    index={i}
                  >
                    {(provided, snapshot) => (
                      <DashboardDragGrid>
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
                      </DashboardDragGrid>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable 
            droppableId={'droppable'}
            direction={'horizontal'}
          >
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                {Dashboard.dash_data.map((e, i) => (
                  <Draggable 
                    key={i}
                    draggableId={'item-2' + String(i)}
                    disableInteractiveElementBlocking={true}
                    index={i}
                  >
                    {(provided, snapshot) => (
                      <DashboardDragGrid>
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
                      </DashboardDragGrid>
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
        bgColor={'#f3f3f4'}
      />
    );
  }
}
