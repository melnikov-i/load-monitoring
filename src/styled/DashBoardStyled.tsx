import styled/*, { StyledFunction }*/ from 'styled-components';

/*
  3 колонки:
  ----------
    
    Ширина отступов: 2 х 3.125% ( 6.25% )
    Ширина колонок: 3 х 31.25% ( 93.75% )

  2 колонки:
  ----------

    Ширина отступов: 1 х 3.125 
    Ширина колонок: 2 х 48.4375% ( 96.875% )

*/

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
  height: 30px;
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
  background-color: #8AAD2E;
  width: 90px;
  height: 30px;
  line-height: 30px;
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