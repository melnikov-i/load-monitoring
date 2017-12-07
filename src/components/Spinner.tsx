import * as React from 'react';

import {
  SpinnerLayout,
  CircularSpinner
} from '@src/styled';

import { CircularSpinnerProps } from '@src/interfaces';

interface SpinnerProps {
  width: CircularSpinnerProps['width'],
  color: CircularSpinnerProps['color'],
}

export const Spinner: React.SFC<SpinnerProps> = (props) => {
  const { width, color } = props;

  return (
    <SpinnerLayout>
      <CircularSpinner
        width={width}
        color={color} />
    </SpinnerLayout>
  );
}