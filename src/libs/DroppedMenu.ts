
export const DroppedMenu = (
  e: React.MouseEvent<HTMLAnchorElement>,
  buttonClickedId,
  action ) => {
    e.preventDefault();
    e.stopPropagation();

    const remove = () => {
      console.log('remove');
      document.removeEventListener('click', remove);
      action('');
    };

    const current: string = 
      String(e.currentTarget.getAttribute('data-button-id'));

    if ( buttonClickedId === '' ) {
      console.log('add');
      document.addEventListener('click', remove);
      action(current);
    } else {
      if ( current === buttonClickedId ) {
        console.log('reset');
        action('');
      } else {
        console.log('readd');
        e.nativeEvent.stopImmediatePropagation();
        action(current);
      }
    }
  };