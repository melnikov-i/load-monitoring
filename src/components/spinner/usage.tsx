import * as React from 'react';
import { SpinnerConnected as Spinner } from './connected';
export default ({width, color, bgColor}: {
  width: number,
  color: string,
  bgColor: string,
}) => <Spinner width={width} color={color} bgColor={bgColor} />;
