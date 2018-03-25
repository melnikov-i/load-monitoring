import * as React from 'react';
import update from 'immutability-helper';


import {
  WidgetInterface
} from '@src/interfaces';

import {
  emergence
} from '@src/styled';

import DashboardDragItemConnected from 
  '@src/usage/DashboardDragItemUsage';

interface DashboardDragContainerProps {
  /* Коллекция элементов дашборда */
  // items: DashboardInterface,
  /* Метод библиотеки React-DnD */
  connectDropTarget: any,
}

type DashboardDragContainerState = {
  items: WidgetInterface[],
}

export class DashboardDragContainer 
extends React.Component<DashboardDragContainerProps, DashboardDragContainerState> {
  constructor( props ) {
    super(props);
    this.moveItem = this.moveItem.bind(this);
    this.findItem = this.findItem.bind(this);
    this.state = {
      items: [
        {
          widget_name: 'cpu',
          device_id: '12345',
          id: '12345cpu',
          series: '',
        },
        {
          widget_name: 'memory',
          device_id: '12345',
          id: '12345memory',
          series: '',
        },
        {
          widget_name: 'hdd',
          device_id: '12345',
          id: '12345hdd',
          series: '',
        },
        {
          widget_name: 'lan',
          device_id: '12345',
          id: '12345lan',
          series: '',
        },
      ],
    };
  };

  moveItem( id: string, atIndex: string ) {
    console.log('moveItemId:', id);
    console.log('moveItemAtIndex:', atIndex);
    const item: WidgetInterface = this.findItem(id)['item'];
    const index: number = this.findItem(id)['index'];
    this.setState(
      update(this.state, {
        items: {
          $splice: [[index, 1], [atIndex, 0, item]],
        },
      }),
    )
  };

  findItem( id: string ) {
    const { items } = this.state;
    const item = items.filter( i => i.id === id)[0];
    return {
      item,
      index: items.indexOf(item),
    };
  };

  render() {
    const { connectDropTarget } = this.props;
    const { items } = this.state;

    return connectDropTarget(
      <div style={{
        display: 'block',
        boxSizing: 'border-box',
        overflow: 'hidden',
        margin: '20px 15px 0',
        animationName: emergence,
        animationDuration: '1s',
        animationTimingFunction: 'linear',
        animationFillMode: 'both',
      }}
      >
        {items.map((item, i) => {
          const element: any = {
            id: item.id,
            widget_name: item.widget_name,
            series: item.series,
            moveItem: this.moveItem,
            findItem: this.findItem,
            width: '2',
            margin: i + 1
          };
          return (
            <DashboardDragItemConnected
              key={item.id}
              element={element}
            />
          );
        })}
      </div>
    );
  }
}