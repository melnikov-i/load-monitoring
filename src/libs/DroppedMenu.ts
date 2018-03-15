type EventType = HTMLAnchorElement | HTMLDivElement;

export const DroppedMenu = (
  e: React.MouseEvent<EventType>,
  buttonClickedId,
  action ) => {
    e.preventDefault();
    e.stopPropagation();

    const remove = () => {
      document.removeEventListener('click', remove);
      action('');
    };

    const current: string = 
      String(e.currentTarget.getAttribute('data-button-id'));

    if ( buttonClickedId === '' ) {
      document.addEventListener('click', remove);
      action(current);
    } else {
      if ( current === buttonClickedId ) {
        action('');
      } else {
        e.nativeEvent.stopImmediatePropagation();
        action(current);
      }
    }
  };