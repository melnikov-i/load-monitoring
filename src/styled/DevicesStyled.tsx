import styled from 'styled-components';

export const DevicesLayout = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 20px 30px;
`;

export const DevicesHeader = styled.h1`
  font-size: 18px;
  font-weight: semibold;
`;

export const DevicesTable = styled.table`
  width: 100%;
  border-spacing: 0;
`;

export const DevicesTableHead = styled.thead`
`;

export const DevicesTableHeadRow = styled.tr`
  display: inline-block;
  width: 100%;
  border-bottom: 1px solid #e7eaec;
`;

export const DevicesTableHeadColl = styled.th`
  display: inline-block;
  vertical-align: top;
  font-size: 12px;
  font-weight: normal;
  width: 7.40909090799998%;
  margin-right: 1.51515151499998%;
  background-color: green;
  text-align: left;
`;

export const DevicesTableHeadFirstColl = DevicesTableHeadColl.extend`
  width: 2%;
`;

export const DevicesTableHeadLastColl = DevicesTableHeadColl.extend`
  margin-right: 0;
`;

export const DevicesTableHeadBigColl = DevicesTableHeadColl.extend`
  width: 53.03030302999998%;
`;