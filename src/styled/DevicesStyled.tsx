import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import {
  MIDDLE_SCREEN_MAX,
  TABLE_COLL_WIDTH,
  FA_SMALL_FONT_SIZE,
  BIG_USER_FAKE_LINK_HEIGHT,
} from '@src/styled';

import {
  DTSpanIconProps,
  DActionButtonClickedInterface
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

export const DevicesTableHeadRow = styled.tr`
  width: 100%;
`;

export const DevicesTableBodyRow = DevicesTableHeadRow.extend`
  &:hover {
    background-color: #f5f5f5;
  }
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
  width: calc(${ TABLE_COLL_WIDTH } * 1.8);
`;

export const DevicesTableHeadCollInfo = DevicesTableHeadColl.extend`
  width: calc(${ TABLE_COLL_WIDTH } * 5);
`;

export const DevicesTableHeadCollLoad = DevicesTableHeadColl.extend`
  width: calc(${ TABLE_COLL_WIDTH } * 1);
`;

export const DevicesTableHeadCollStatus = DevicesTableHeadColl.extend`
  width: calc(${ TABLE_COLL_WIDTH } * 1);
  padding-left: 4px;

background-color: rgba(255, 0, 0, .4);
`;

export const DevicesTableHeadLastColl = styled.th`
  box-sizing: border-box;
  font-size: 14px;
  font-weight: normal;
  width: calc(${ TABLE_COLL_WIDTH } * 1.2);
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
  padding: 8px 4px 0 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const DevicesTableBodyLinkLast = DevicesTableBodyLink.extend`
  padding: 8px 0 0 0;
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

export const DevicesTableActionButton = styled.button`
  width: 70px;
  height: 20px;
  line-height: 20px;
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  margin-left: -35px;
  border: 1px solid ${( props: DActionButtonClickedInterface ) => (
      ( props.isClicked )
      ? '#8c8c8c'
      : '#e7eaec'
    )
  };
  border-radius: 3px;
  color: #333;
  cursor: pointer;
  background-color: ${( props: DActionButtonClickedInterface ) => (
      ( props.isClicked )
      ? '#d4d4d4'
      : '#fff'
    )
  };
  font-size: 12px;
  &:focus {
    outline: 0 solid transparent;
  }
  &:hover {
    background-color: ${( props: DActionButtonClickedInterface ) => (
      ( props.isClicked )
      ? '#d4d4d4'
      : '#e6e6e6'
    )
  };
    border: 1px solid ${( props: DActionButtonClickedInterface ) => (
      ( props.isClicked )
      ? '#8c8c8c'
      : '#d2d2d2'
    )
  };
  }
  @media screen
  and (max-width: ${ MIDDLE_SCREEN_MAX }) {
    width: 64px;
    margin-left: -32px;
  }
`;

export const DevicesTableActionMenuLayout = styled.ul`
  display: ${(props: DActionButtonClickedInterface) => (
      ( props.isClicked )
      ? 'block'
      : 'none'
    )
  };
  box-shadow: 0 0 3px rgba(86, 96, 117, .7);
  background-color: #fff;
  padding: 3px 0;
  border-radius: 3px;
  position: absolute;
  right: 5px;
  top: 40px;
  z-index: 1;
`;

export const DevicesTableActionMenuItem = styled.li`
  list-style-position: inside;
  list-style-type: none;
`;

export const DevicesTableActonLink = styled(NavLink)`
  display: block;
  text-decoration: none;
`;

export const DevicesTableActionLinkSpan = styled.span`
  display: block;
  height: ${ BIG_USER_FAKE_LINK_HEIGHT };
  line-height: ${ BIG_USER_FAKE_LINK_HEIGHT };
  font-size: 13px;
  font-weight: normal;
  color: #333;
  white-space: nowrap;
  text-align: left;
  padding: 3px 5px;
  &::selection {
    background-color: transparent;
  }
  &:hover {
    background-color: #f5f5f5;
    color: #262626;
  }
`;