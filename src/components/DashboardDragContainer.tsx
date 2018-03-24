import * as React from 'react';
import update from 'immutability-helper';

import { DashboardInterface } from '@src/interfaces';

interface DashboardDragContainerProps {
  /* Коллекция элементов дашборда */
  items: DashboardInterface,
  /* Метод библиотеки React-DnD */
  connectDropTarget: any,
}

type DashboardDragContainerState = {
  items: DashboardInterface,
}

export class DashboardDragContainer 
extends React.Component<DashboardDragContainerProps, DashboardDragContainerState> {
  constructor( props ) {
    super(props);
    this.moveItem = this.moveItem.bind(this);
    this.findItem = this.findItem.bind(this);
    this.state = {
      items: props.items,
    };
  };

  moveItem( id: string, atIndex: string ) {
    const { item, index } = this.findItem(id);
    this.setState(
      update(this.state, {
        dash_data: {
          $splice: [[index, 1], [atIndex, 0, item]]
        },
      }),
    )
  };

  findItem( id: string ) {
    const { items } = this.state;
    const item = items.dash_data.filter( i => i.id === id)[0];
    return {
      item,
      index: items.dash_data.indexOf(item),
    };
  };

  render() {
    const { connectDropTarget } = this.props;
    const { items } = this.state;

    console.log('items:', items);

    return connectDropTarget(
      <div>
        <span
          style={{
            fontSize: '14px'
          }}
        >
          {'Привет из контейнера'}
        </span>
      </div>
    );
  }
}