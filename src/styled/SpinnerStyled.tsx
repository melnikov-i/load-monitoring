import styled, { keyframes } from 'styled-components';

import { CircularSpinnerProps } from '@src/interfaces';

import {
  MIDDLE_SCREEN_MIN,
  MIDDLE_SCREEN_MAX,
  SMALL_SCREEN_MAX
} from '@src/styled';

export const SpinnerLayout = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${ 
    ( props: CircularSpinnerProps ) => props.bgColor 
  };
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -25px;
  margin-left: 85px;
  @media screen 
    and (min-width: ${ MIDDLE_SCREEN_MIN }) 
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      margin-left: 5px;
    }
  @media screen
    and (max-width: ${ SMALL_SCREEN_MAX }) {
      margin-left: -25px;
    }
`;

const rotateBefore = keyframes`
  20% { transform: rotateZ(0deg); }
  35% { transform: rotateZ(180deg); }
  75% { transform: rotateZ(720deg); }
  100% { transform: rotateZ(720deg); }
`;

const rotateAfter = keyframes`
  20% { transform: rotateZ(0deg); }
  35% { transform: rotateZ(0deg); }
  75% { transform: rotateZ(540deg); }
  100% { transform: rotateZ(720deg); }
`;

export const CircularSpinner = styled.div`
  display: block;
  background-color: ${ 
    ( props: CircularSpinnerProps ) => props.bgColor 
  };
  color: ${ ( props: CircularSpinnerProps ) => props.color };
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -${ props => String(Math.imul(props.width, 5))}px;
  margin-left: -${ props => String(Math.imul(props.width, 5))}px;
  width: ${ props => String(Math.imul(props.width, 10))}px;
  height: ${ props => String(Math.imul(props.width, 10))}px;
  box-shadow: inset 0 0 0 ${ props => String(props.width)}px;
  &::before {
    content: '';
    width: ${ props => String(Math.imul(props.width, 6))}px;
    height: ${ props => String(Math.imul(props.width, 12))}px;
    position: absolute;
    top: ${ props => String(Math.imul(props.width, -1))}px;
    left: ${ props => String(Math.imul(props.width, -1))}px;
    transform-origin: 100% 50%;
    animation: ${ rotateBefore } 2s linear 0s infinite normal;
    background-color: ${ 
    ( props: CircularSpinnerProps ) => props.bgColor 
  };
  }
  &::after {
    content: '';
    width: ${ props => String(Math.imul(props.width, 6))}px;
    height: ${ props => String(Math.imul(props.width, 12))}px;
    position: absolute;
    top: ${ props => String(Math.imul(props.width, -1))}px;
    left: ${ props => String(Math.imul(props.width, 5))}px;
    transform-origin: 0% 50%;
    animation: ${ rotateAfter } 2s linear 0s infinite normal;
    background-color: ${ 
      ( props: CircularSpinnerProps ) => props.bgColor 
    };
  }
`;