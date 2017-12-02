import styled/*, { StyledFunction }*/ from 'styled-components';

// import {
//   PieChartIndicatorProps,
//   PieChartIndicatorBottomProps,
// } from '@src/interfaces';

// const PieChartIndicatorFunction: StyledFunction<PieChartIndicatorProps> = 
//   styled.div;

// const PieChartIndicatorBottomFunction: StyledFunction<PieChartIndicatorBottomProps> =
//   styled.div;

export const DashBoardWrapper = styled.div`
  width: 100%;
  height: 300px;
  background-color: #eee;
`;

export const DashBoardTop = styled.div`
  border-bottom: 2px solid #ddd;
  height: 30px;
  width: 100%;
`;

export const DashBoardMainHeaderWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 65.624999999998%;
  height: 20px;
  padding-top: 10px;
  margin-right: 3.124999999999998%;
  background-color: green;
`;

export const DashBoardMainHeader = styled.h1`
  font-family: 'Verdana', sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const DashBoardIntervalsAndSettingsWrapper = styled.div`
  width: 31.249999999999998%;
  background-color: red;
  height: 30px;
  display: inline-block;
  vertical-align: top;
  text-aligh: right;
`;

export const DashBoardSettingsWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
`;

export const DashBoardSettings = styled.a`
  display: inline-block;
  vertical-align: top;
  background-color: #8AAD2E;
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 4px;
  text-transform: uppercase;
  font-family: 'Verdana', sans-serif;
  font-size: 14px;
  color: #fff;
  padding: 0 5px;
  text-decoration: none;
  &::selection {
    background: transparent;
  }
`;

//46.875%