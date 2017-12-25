import styled from 'styled-components';

import {
  MIDDLE_SCREEN_MAX,
  TABLE_COLL_WIDTH,
  TABLE_COLL_MARGIN
} from '@src/styled';

export const DevicesLayout = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 20px 30px 70px;
  @media screen and (max-width: ${ MIDDLE_SCREEN_MAX }) {
    padding: 20px 5px;
  }
`;

export const DevicesHeader = styled.h1`
  font-size: 18px;
  font-weight: 600;
`;

export const DevicesTable = styled.table`
  width: 100%;
  margin: 30px auto;
  border-spacing: 0;
`;

export const DevicesTableHead = styled.thead`
`;

export const DevicesTableRow = styled.tr`
  display: inline-block;
  width: 100%;
  border-bottom: 1px solid #e7eaec;
`;

export const DevicesTableHeadColl = styled.th`
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  font-size: 14px;
  font-weight: normal;
  width: ${ TABLE_COLL_WIDTH };
  min-height: 25px;
  line-height: 25px;
  text-align: left;
  margin-right: ${ TABLE_COLL_MARGIN };
`;

export const DevicesTableHeadCollDev = DevicesTableHeadColl.extend`
  padding-left: 23px;
  width: calc(${ TABLE_COLL_WIDTH } * 2);
`;

export const DevicesTableHeadCollIP = DevicesTableHeadColl.extend`
  width: calc(${ TABLE_COLL_WIDTH } * 2);
`;

export const DevicesTableHeadCollInfo = DevicesTableHeadColl.extend`
  width: calc(${ TABLE_COLL_WIDTH } * 4);
`;

export const DevicesTableHeadCollLoad = DevicesTableHeadColl.extend`
  width: calc(${ TABLE_COLL_WIDTH } * 2);
`;

export const DevicesTableHeadLastColl = styled.th`
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  font-size: 14px;
  font-weight: normal;
  width: ${ TABLE_COLL_WIDTH };
  min-height: 25px;
  line-height: 25px;
  text-align: left;
  margin-right: 0;
`;