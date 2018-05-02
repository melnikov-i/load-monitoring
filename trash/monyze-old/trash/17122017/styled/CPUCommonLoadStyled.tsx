import styled, { StyledFunction } from 'styled-components';

import {
  PieChartIndicatorProps,
  PieChartIndicatorBottomProps,
} from '@src/interfaces';

const PieChartIndicatorFunction: StyledFunction<PieChartIndicatorProps> = 
  styled.div;

const PieChartIndicatorBottomFunction: StyledFunction<PieChartIndicatorBottomProps> =
  styled.div;

export const Header = styled.h2`
  font-family: 'Verdana', sans-serif;
  font-size: 14px;
  font-weight: normal;
  color: #505050;
`;

export const PieChartWrapper = styled.div`
  width: 200px;
  height: 100px;
  margin-top: 50px;
  background-color: #fff;
  overflow: hidden;
`;

export const PieChartOuterBoundary = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #ccc;
  position: relative;
  overflow: hidden;
`;

export const PieChartInternalBoundary = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  top: 40px;
  left: 40px;
`;

export const PieChartIndicator = PieChartIndicatorFunction`
  width: 200px;
  height: 200px;
  position: absolute;
  top: 0px;
  left: 0px;
  transform: rotate(${
    (props) => props.value * 1.8
  }deg);
`;

export const PieChartIndicatorTop = styled.div`
  width: 200px;
  height: 100px;
`;

export const PieChartIndicatorBottom = PieChartIndicatorBottomFunction`
  width: 200px;
  height: 100px;
  background-color: ${(props) => props.color};
  border-top: 1px solid #fff;
`;

export const PieChartTextContent = styled.p`
  font-family: 'Verdana', sans-serif;
  font-size: 16px;
  font-weight: normal;
  color: #505050;
  text-align: center;
  margin: 40px;
`;