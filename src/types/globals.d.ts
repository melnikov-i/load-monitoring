
declare module 'react-beautiful-dnd' {
  type Id = string;
  type DraggableId = Id;
  type DroppableId = Id;
  type TypeId = Id;
  type DraggableStyle = any;
  interface DraggableLocation {
    droppableId: DroppableId,
    index: number,
  }
  // DragDropContext
  interface DragStart {
    draggableId: DraggableId,
    type: TypeId,
    source: DraggableLocation,
  }
  interface DropResult {
    draggableId: DraggableId,
    type: TypeId,
    source: DraggableLocation,
    destination?: DraggableLocation | null,
  }
  interface DragDropContextProps {
    onDragStart?(initial: DragStart): void,
    onDragEnd(result: DropResult): void,
  }
  class DragDropContext extends React.Component<DragDropContextProps> {}
  // Droppable
  interface DroppableProvided {
    innerRef(element: HTMLElement | null): any,
    placeholder?: React.ReactElement<any> | null,
  }
  interface DroppableStateSnapshot {
    isDraggingOver: boolean,
  }
  interface DroppableProps {
    droppableId: DroppableId,
    type?: TypeId,
    isDropDisabled?: boolean,
    direction?: 'vertical' | 'horizontal',
    children(provided: DroppableProvided, snapshot: DroppableStateSnapshot):
      React.ReactElement<any>,
  }
  class Droppable extends React.Component<DroppableProps> {}
  // Draggable
  interface DragHandleProps {
    onMouseDown: React.MouseEventHandler<any>;
    onKeyDown: React.KeyboardEventHandler<any>;
    onClick: React.MouseEventHandler<any>;
    tabIndex: number;
    'aria-grabbed': boolean;
    draggable: boolean;
    onDragStart(): void;
    onDrop(): void;
  }
  interface DraggableProvided {
    innerRef(element?: HTMLElement | null): any;
    draggableStyle?: DraggableStyle | null;
    draggableProps?: any | null,
    dragHandleProps?: DragHandleProps | null;
    placeholder?: React.ReactElement<any> | null;
  }
  interface DraggableStateSnapshot {
    isDragging: boolean;
  }
  interface DraggableProps {
    draggableId: DroppableId;
    type?: TypeId;
    isDragDisabled?: boolean;
    disableInteractiveElementBlocking?: boolean;
    children(
      provided: DraggableProvided, 
      snapshot: DraggableStateSnapshot
    ): React.ReactElement<any>;
    index?: number,
  }
  class Draggable extends React.Component<DraggableProps> {}
}