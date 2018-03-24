import * as React from 'react';
import update from 'immutability-helper';

interface DashboardDragContainerProps {
  items: any,
  connectDropTarget: any
}

export class DashboardDragContainer 
extends React.Component<DashboardDragContainerProps, undefined> {
  constructor( props ) {
    super(props);
    this.moveItem = this.moveItem.bind(this);
    this.findItem = this.findItem.bind(this);
    this.state={
      items: props.items,
    };
  }

  moveItem( id: string, atIndex: string ) {
    const { item, index } = this.findItem(id);
    this.setState(
      update(this.state, {
        items: {
          $splice: [[index, 1], [atIndex, 0, item]],
        },
      }),
    )
  }

  findIetm( id: string ) {
    const { items } = this.state;
    const item = items.filter( i => i.id === id)[0];
    return {
      item,
      index: item.indexOf
    }
  }
}