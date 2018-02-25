export const getWidth = (width: string): string => {
  switch ( width ) {
    case '1': return '100%';
    case '2': return '49%';
    case '3': return '32%';
    case '4': return '24';
    default: return '100%';
  }
};

export const checkPosition = (width: number, margin: number):boolean => {
  const currentMargin: number = margin;
  const currentWidth: number = width;
  if ( currentMargin % currentWidth === 0 ) {
    return false;
  }
  return true;
};
