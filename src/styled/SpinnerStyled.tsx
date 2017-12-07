import styled, { StyledFunction } from 'styled-components';

import { CircularSpinnerProps } from '@src/interfaces';

const CircularSpinnerFunction: StyledFunction<CircularSpinnerProps> =
  styled.div;

import {
  MIDDLE_SCREEN_MIN,
  MIDDLE_SCREEN_MAX,
  SMALL_SCREEN_MAX
} from '@src/styled';

export const SpinnerLayout = styled.div`
  width: 240px;
  height: 240px;
  background-color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -120px;
  margin-left: -10px;
  @media screen 
    and (min-width: ${ MIDDLE_SCREEN_MIN }) 
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      margin-left: -95px;
    }
  @media screen
    and (max-width: ${ SMALL_SCREEN_MAX }) {
      margin-left: -120px;
    }
`;

export const CircularSpinner = CircularSpinnerFunction.attrs({})`
  background-color: #fff;
  color: ${ props => props.color };
  border-radius: 50%;
  position: relative;
  width: ${ props => String(Math.imul(props.width, 10))}px;
  height: ${ props => String(Math.imul(props.width, 10))}px;
  box-shadow: inset 0 0 0 ${ props => String(props.width)}px;
  margin: calc(50% - ${props => String(Math.imul(props.width, 5))}px) auto;
  &::before {
    content: '';
    width: ${ props => String(Math.imul(props.width, 6))}px;
    height: ${ props => String(Math.imul(props.width, 12))}px ;
    position: absolute;
    top: ${ props => String(Math.imul(props.width, -1))}px;
    left: ${ props => String(Math.imul(props.width, -1))}px;
    transform-origin: 100% 50%;
    transform: rotateZ(${props => String(props.deg.before)}deg);
    
    background-color: #fff;

  }
  &::after {
    content: '';
    width: ${ props => String(Math.imul(props.width, 6))}px;
    height: ${ props => String(Math.imul(props.width, 12))}px;
    position: absolute;
    top: ${ props => String(Math.imul(props.width, -1))}px;
    left: ${ props => String(Math.imul(props.width, 5))}px;
    transform-origin: 0% 50%;
    transform: rotateZ(${props => String(props.deg.after)}deg);

    background-color: #fff;
  }
`;
