import styled, { keyframes, StyledFunction } from 'styled-components';

import { CircularSpinnerProps } from '@src/interfaces';

const CircularSpinnerFunction: StyledFunction<CircularSpinnerProps> =
  styled.div;

export const SpinnerLayout = styled.div`
  width: 240px;
  height: 240px;
  position: relative;
  top: 50%;
  left: 50%;
  margin-top: -120px;
  margin-left: -120px;
  overflow: hidden;
`;

const load = keyframes`
  0% {
    box-shadow: 0 -0.83em 0 -0.4em, 
                0 -0.83em 0 -0.42em, 
                0 -0.83em 0 -0.44em, 
                0 -0.83em 0 -0.46em, 
                0 -0.83em 0 -0.477em;
  }
  5%,
  95% {
    box-shadow: 0 -0.83em 0 -0.4em, 
                0 -0.83em 0 -0.42em, 
                0 -0.83em 0 -0.44em, 
                0 -0.83em 0 -0.46em, 
                0 -0.83em 0 -0.477em;
  }
  10%,
  59% {
    box-shadow: 0 -0.83em 0 -0.4em, 
                -0.087em -0.825em 0 -0.42em, 
                -0.173em -0.812em 0 -0.44em, 
                -0.256em -0.789em 0 -0.46em, 
                -0.297em -0.775em 0 -0.477em;
  }
  20% {
    box-shadow: 0 -0.83em 0 -0.4em, 
                -0.338em -0.758em 0 -0.42em, 
                -0.555em -0.617em 0 -0.44em, 
                -0.671em -0.488em 0 -0.46em, 
                -0.749em -0.34em 0 -0.477em;
  }
  38% {
    box-shadow: 0 -0.83em 0 -0.4em, 
                -0.377em -0.74em 0 -0.42em, 
                -0.645em -0.522em 0 -0.44em, 
                -0.775em -0.297em 0 -0.46em, 
                -0.82em -0.09em 0 -0.477em;
  }
  100% {
    box-shadow: 0 -0.83em 0 -0.4em, 
                0 -0.83em 0 -0.42em, 
                0 -0.83em 0 -0.44em, 
                0 -0.83em 0 -0.46em, 
                0 -0.83em 0 -0.477em;
  }
`;

const load2 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const round = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const DottedSpinner = styled.div`
  color: #2f4050;
  font-size: 30px;
  text-indent: -9999em;
  border-radius: 50%;
  overflow: hidden;
  width: 1em;
  height: 1em;
  margin: 72px auto;
  position: relative;
  animation: ${ load } 1.7s infinite ease,
             ${ round } 1.7s infinite ease;
`;

// const CircularSpinnerWidth: string = '31.25px';

export const CircularSpinner = CircularSpinnerFunction`
  background-color: #fff;
  color: ${ props => props.color };
  font-size: 10px;
  text-indent: -9999em;
  margin: 55px auto;
  width: calc(${ props => props.width } * 0.8);
  height: calc(${ props => props.width } * 0.8);
  box-shadow: inset 0 0 0 calc(${ props => props.width } /10);
  transform: translateZ(0);
  border-radius: 50%;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    border-radius: ${ props => props.width } 0 0 ${ props => props.width };
    width: calc(${ props => props.width } / 2);
    height: ${ props => props.width };
    background-color: #fff;
    top: calc(${ props => props.width } * -0.1);
    left: calc(${ props => props.width } * -0.1);
    transform-origin: calc(${ props => props.width } / 2) 
                      calc(${ props => props.width } / 2);
    animation: ${ load2 } 2s infinite ease 1.5s;
  }
  &::after {
    content: '';
    position: absolute;
    width: calc(${ props => props.width } / 1.8);
    height: ${ props => props.width };
    background-color: #fff;
    border-radius: 0 ${ props => props.width } ${ props => props.width } 0;
    top: calc(${ props => props.width } * -0.1);
    left: calc(${ props => props.width } / 2.5);
    transform-origin: 0px calc(${ props => props.width } /2);
    animation: ${ load2 } 2s infinite ease;
  }
`;


