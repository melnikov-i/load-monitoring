import * as React from 'react';

import {
  // SpinnerLayout,
  CircularSpinner
} from '@src/styled';

import { CircularSpinnerProps } from '@src/interfaces';

interface SpinnerProps {
  width: CircularSpinnerProps['width'],
  color: CircularSpinnerProps['color'],
  bgColor: CircularSpinnerProps['bgColor'],
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