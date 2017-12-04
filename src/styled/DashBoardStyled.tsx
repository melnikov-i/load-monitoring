import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const DashBoardLayout = styled.div`
  width: 100%;
  padding: 10px 20px;
`;

export const DashBoardTop = styled.div`
  height: 35px;
  width: 100%;
`;

export const DashBoardMainHeaderWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 48.437599999998%;
  height: 20px;
  padding-top: 10px;
  margin-right: 3.124999999999998%;
`;

export const DashBoardMainHeader = styled.h1`
  font-family: 'Verdana', sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const DashBoardIntervalsAndSettingsWrapper = styled.div`
  width: 48.437599999999998%;
  height: 35px;
  display: inline-block;
  vertical-align: top;
  position: relative;
`;

export const DashBoardSettingsWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  position: absolute;
  top: 0;
  right: 0;
`;

export const DashBoardSettings = styled.a`
  display: inline-block;
  vertical-align: top;
  background-color: #1AB394;
  width: 100px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  border-radius: 4px;
  text-transform: uppercase;
  font-family: 'Verdana', sans-serif;
  font-size: 12px;
  color: #fff;
  text-decoration: none;
  &::selection {
    background: transparent;
  }
`;

export const DashBoardMenuWrapper = styled.div`
  width: 100%;
  height: 40px;
`;

export const DashBoardMenuItem = styled.li`
  list-style-position: inside;
  list-style-type: none;
  display: inline-block;
  vertical-align: top;
  padding: 0 10px;
`;

export const DashBoardMenuLink = styled(NavLink)`
  font-size: 14px;
  font-family: 'Verdana', sans-serif;
  text-align: center;
  text-decoration: none;
  display: block;
  height: 40px;
  line-height: 40px;
  color: #a7b1c2;
  &::selection {
    background: transparent;
  }
`;