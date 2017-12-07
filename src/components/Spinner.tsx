import * as React from 'react';

/* temp */
import styled from 'styled-components';

const ButtonTest = styled.button`
  font-size: 16px;
`;

import {
  SpinnerLayout,
  CircularSpinner
} from '@src/styled';

import {
  CircularSpinnerInterface
} from '@src/interfaces';



interface SpinnerProps {
  CircularSpinnerModel: CircularSpinnerInterface['deg'],
  doDeferredIncrementOfBeforeValue: 
  (payload: CircularSpinnerInterface['deg']['before']) => any,
}

export const Spinner: React.SFC<SpinnerProps> = (props) => {
  const {
    CircularSpinnerModel,
    doDeferredIncrementOfBeforeValue,
  } = props;

  const rotateHandler = (): CircularSpinnerInterface['deg'] => {
    doDeferredIncrementOfBeforeValue(CircularSpinnerModel.before);
    return CircularSpinnerModel;
  }

  const handlerButtonTest = () => {
    console.log('[BUTTON]')
    doDeferredIncrementOfBeforeValue(CircularSpinnerModel.before);
  }

  return (
    <SpinnerLayout>
      <CircularSpinner
        width={15}
        color={'#2f4050'}
        deg={rotateHandler()} />
      <ButtonTest onClick={handlerButtonTest}>TEST</ButtonTest>
    </SpinnerLayout>
  );
}