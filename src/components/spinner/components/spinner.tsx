import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { CircularSpinner } from '@src/styled';

interface SpinnerProps extends RouteComponentProps<void> {
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
