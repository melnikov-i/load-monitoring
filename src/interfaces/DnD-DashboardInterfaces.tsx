import * as React from 'react';

export type Id = string;
export type DraggableId = Id;
export type DroppabledId = Id;
export type TypeId = Id;

export interface DraggableLocation {
  droppableId: DroppabledId,
  index: number,
}

// DragDropContext

export interface DragStart {
  draggableId: DraggableId,
  type: TypeId,
  source: DraggableLocation,
}

export interface DropResult {
  draggableId: DraggableId,
  type: TypeId,
  source: DraggableLocation,
  destination?: DraggableLocation | null,
}

export interface DragDropContextProps {
  onDragStart?(initial: DragStart): void,
  onDragEnd(result: DropResult): void,
}

export class DragDropContext extends React.Component<DragDropContextProps> {}

// Droppable

export interface DroppableProvided {
  innerRef(element: HTMLElement | null): any,
  placeholder?: React.ReactElement<any> | null,
}

export interface DroppableStateSnapshot {
  isDraggingOver: boolean,
}

export interface DroppableProps {
  droppableId: DroppabledId,
  type?: TypeId,
  isDropDisabled?: boolean,
  direction?: 'vertical' | 'horizontal',
  children(provided: DroppableProvided, snapshot: DroppableStateSnapshot):
    React.ReactElement<any>,
}

export class Droppable extends React.Component<DroppableProps> {}

// Draggable

export type DraggableStyle = any;

export interface DragHandleProps {
  onMouseDown: React.MouseEventHandler<any>,
  onKeyDown: React.KeyboardEventHandler<any>,
  onClick: React.MouseEventHandler<any>,
  tabIndex: number,
  'aria-grabbed': boolean,
  draggable: boolean,
  onDragStart(): void,
  onDrop(): void,
}



export interface DraggableProvided {
  innerRef(element?: HTMLElement | null): any,
  draggableStyle?: DraggableStyle | null,
  draggableProps?: any | null,
  dragHandleProps?: DragHandleProps | null,
  placeholder?: React.ReactElement<any> | null,
}



export interface DraggableStateSnapshot {
  isDragging: boolean,
}

export interface DraggableProps {
  draggableId: DroppabledId,
  type?: TypeId,
  index?: number,
  isDragDisabled?: boolean,
  disableInteractiveElementBlocking?: boolean,
  children(provided: DraggableProvided, snapshot: DraggableStateSnapshot):
    React.ReactElement<any>
}

export class Draggable extends React.Component<DraggableProps> {
  render() {
    return (<div></div>);
  }
}