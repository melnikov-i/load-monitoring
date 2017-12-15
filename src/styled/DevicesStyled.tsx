import styled from 'styled-components';

import {
  Table,
  TableHead,
  TableHeadRow,
  TableHeadColl,
  TableHeadCollBigWidth,
} from './TableStyled';

import {
  MIDDLE_SCREEN_MAX,
} from '@src/styled';

const DevicesTableHeadCollMargin = '1.53846153799998%';

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

export const DevicesTable = styled(Table)``;

export const DevicesTableHead = styled(TableHead)``;

export const DevicesTableHeadRow = styled(TableHeadRow)``;

export const DevicesTableHeadColl = styled(TableHeadColl)`
  margin-right: ${ DevicesTableHeadCollMargin };
`;

export const DevicesTableHeadCollDev = DevicesTableHeadColl.extend`
  padding-left: 23px;
  width: calc(${ TableHeadCollBigWidth } * 2);
`;

export const DevicesTableHeadCollIP = DevicesTableHeadColl.extend`
  width: calc(${ TableHeadCollBigWidth } * 2);
`;

export const DevicesTableHeadCollInfo = DevicesTableHeadColl.extend`
  width: calc(${ TableHeadCollBigWidth } * 4);
`;

export const DevicesTableHeadCollLoad = DevicesTableHeadColl.extend`
  width: calc(${ TableHeadCollBigWidth } * 2);
`;

export const DevicesTableHeadLastColl = styled(TableHeadColl)`
  margin-right: 0;
`;