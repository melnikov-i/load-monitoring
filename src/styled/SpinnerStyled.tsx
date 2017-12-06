import styled, { StyledFunction } from 'styled-components';

import { CircularSpinnerProps } from '@src/interfaces';

const CircularSpinnerFunction: StyledFunction<CircularSpinnerProps> =
  styled.div;

const 

import {
  
} from '@src/styled';

export const SpinnerLayout = styled.div`
  width: 240px;
  height: 240px;
  position: relative;
  top: 50%;
  left: 50%;
`;
  // margin-top: -120px;
  // margin-left: -120px;

export const CircularSpinner = CircularSpinnerFunction`
  background-color: orange;
  color: ${ props => props.color };
  border-radius: 50%;
  position: relative;
  width: calc(${ props => props.width } * 10);
  height: calc(${ props => props.width } * 10);
  box-shadow: inset 0 0 0 ${ props => props.width };
  
  &::before {
    content: '';
    width: calc(${ props => props.width } * 6);
    height: calc(${ props => props.width } * 12);
    position: absolute;
    top: calc(${ props => props.width } * -1);
    left: calc(${ props => props.width } * -1);
    transform-origin: 100% 50%;
    transform: rotateZ(${props => props.degBefore});
    
    background-color: rgba(255, 0, 0, .4);

  }
  &::after {
    content: '';
    width: calc(${ props => props.width } * 6);
    height: calc(${ props => props.width } * 12);
    position: absolute;
    top: calc(${ props => props.width } * -1);
    left: calc(${ props => props.width } * 5);
    transform-origin: 0% 50%;
    transform: rotateZ(${props => props.degAfter});
    background-color: rgba(0, 255, 0, .4);
  }
`;
