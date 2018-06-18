import * as React from 'react';

import { CircularSpinner } from '@src/styled';

interface SpinnerProps {
  width: number,
  color: string,
  bgColor: string,
}

export const Spinner: React.SFC<SpinnerProps> = (props) => {
  const { width, color, bgColor } = props;

  return (
      <CircularSpinner
        width={width}
        color={color} 
        bgColor={bgColor}
      />
  );
};
