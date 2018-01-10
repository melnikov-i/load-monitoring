import {
  DroppedMenuHandlerAddType,
  DroppedMenuHandlerRemoveType,
} from '@src/interfaces';

export const droppedMenuHandlerRemove:DroppedMenuHandlerRemoveType = 
( e, changeDevicesActionButtonClickedId ) => {
  document.removeEventListener(
    'click', 
    e => droppedMenuHandlerRemove(e, changeDevicesActionButtonClickedId)
  );
  console.log('HANDLER_REMOVE')
  changeDevicesActionButtonClickedId('');
};

export const droppedMenuHandlerAdd: DroppedMenuHandlerAddType = (
  e,
  DevicesActionButtonClickedId,
  changeDevicesActionButtonClickedId
) => {
  e.preventDefault();
  e.stopPropagation();
  const current: string =
    String(e.currentTarget.getAttribute('data-button-id'));
  if ( DevicesActionButtonClickedId === '' ) {
    document.addEventListener(
      'click',
      e => droppedMenuHandlerRemove(
        e,
        changeDevicesActionButtonClickedId
      )
    );
    console.log('HANDLER_ADD');
    changeDevicesActionButtonClickedId(current);
  } else {
    if ( current === DevicesActionButtonClickedId ) {
      changeDevicesActionButtonClickedId('');
    } else {
      e.nativeEvent.stopImmediatePropagation();
      changeDevicesActionButtonClickedId(current);
    }
  }
};