import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import {
  MIDDLE_SCREEN_MAX,
  TABLE_COLL_WIDTH,
  FA_SMALL_FONT_SIZE
} from '@src/styled';

import {
  DTSpanIconProps
} from '@src/interfaces';

export const DevicesLayout = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 20px 30px 70px;
  @media screen and (max-width: ${ MIDDLE_SCREEN_MAX }) {
    padding: 20px 10px;
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

export const DevicesTableBody = styled.tbody`
`;

export const DevicesTableRow = styled.tr`
  width: 100%;
  --position: relative;
`;

const DevicesTableHeadColl = styled.th`
  box-sizing: border-box;
  font-size: 14px;
  font-weight: normal;
  width: ${ TABLE_COLL_WIDTH };
  min-height: 25px;
  line-height: 25px;
  text-align: left;
`;

export const DevicesTableHeadCollDev = DevicesTableHeadColl.extend`
  padding-left: 23px;
  width: calc(${ TABLE_COLL_WIDTH } * 2);
`;

export const DevicesTableHeadCollIP = DevicesTableHeadColl.extend`
  width: calc(${ TABLE_COLL_WIDTH } * 1.5);
`;

export const DevicesTableHeadCollInfo = DevicesTableHeadColl.extend`
  width: calc(${ TABLE_COLL_WIDTH } * 4);
`;

export const DevicesTableHeadCollLoad = DevicesTableHeadColl.extend`
  width: calc(${ TABLE_COLL_WIDTH } * 1.5);
`;

export const DevicesTableHeadCollStatus = DevicesTableHeadColl.extend`
  width: calc(${ TABLE_COLL_WIDTH } * 1.5);
`;

export const DevicesTableHeadLastColl = styled.th`
  box-sizing: border-box;
  font-size: 14px;
  font-weight: normal;
  width: calc(${ TABLE_COLL_WIDTH } * 1.5);
  min-height: 25px;
  line-height: 25px;
  text-align: left;
`;

export const DevicesTableBodyColl = styled.td`
  font-size: 14px;
  font-weight: normal;
  color: #676a6c;
  line-height: 1.42857;
  vertical-align: top;
  position: relative;
  border-top: 1px solid #e7eaec;
`;

export const DevicesTableBodyInfo = styled.p`
  font-size: 13px;
  font-weight: normal;
  color: #676a6c;
`;


export const DevicesTableBodyInfoSpan = styled.span`
  font-size: 13px;
  font-weight: 600;
`;

export const DevicesTableBodyLink = styled(NavLink)`
  box-sizing: border-box;
  display: inline-block;
  text-decoration: none;
  color: #676a6c;
  font-size: 13px;
  font-weight: 600;
  padding: 8px 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const DevicesTableBodyInfoLink = styled(NavLink)`
  box-sizing: border-box;
  display: inline-block;
  text-decoration: none;
  color: #676a6c;
  font-size: 13px;
  font-weight: 600;
  padding: 8px 0;
  width: 100%;

`;

export const DevicesTableBodyCompNameSpan = styled.span`
  font-size: 13px;
  font-weight: 600;
  &::before {
    content: "\\${ (props: DTSpanIconProps) => (
      ( props.icon !== null )
      ? props.icon
      : 'f05e'
      )}";
    font-family: 'FontAwesome';
    font-weight: normal;
    font-size: ${ FA_SMALL_FONT_SIZE };
    margin-right: 9px;
  }
`;
