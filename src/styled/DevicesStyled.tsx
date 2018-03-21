import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import {
  FA_SMALL_FONT_SIZE,
  DROPPED_MENU_ITEM_HEIGHT,
} from '@src/styled';

import {
  DTSpanIconProps,
  DActionAnchorClickedInterface
} from '@src/interfaces';

export const DevicesTable = styled.table`
  width: 100%;
  border-spacing: 0;
`;

export const DevicesTableHeadRow = styled.tr`
  width: 100%;
`;

export const DevicesTableBodyRow = DevicesTableHeadRow.extend`
  height: 1px;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const DevicesTableHeadColl = styled.th`
  box-sizing: border-box;
  font-size: 14px;
  font-weight: normal;
  min-height: 45px;
  line-height: 45px;
  text-align: left;
`;

export const DevicesTableHeadCollDev = DevicesTableHeadColl.extend`
  width: 15%;
  padding-left: 23px;
`;

export const DevicesTableHeadCollIP = DevicesTableHeadColl.extend`
  width: 12%;
`;

export const DevicesTableHeadCollInfo = DevicesTableHeadColl.extend`
  width: 45%;
`;

export const DevicesTableHeadCollLoad = DevicesTableHeadColl.extend`
  width: 9%;
`;

export const DevicesTableHeadCollStatus = DevicesTableHeadColl.extend`
  width: 9%;
  padding-left: 4px;
  text-align: center;
`;

export const DevicesTableHeadLastColl = styled.th`
  width: 10%;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: normal;
`;

export const DevicesTableBodyColl = styled.td`
  vertical-align: top;
  height: ${(props: {isFirefoxInUse: boolean}) => (
      (props.isFirefoxInUse) ? '100%' : 'inherit'
    )
  };
  border-top: 1px solid #e7eaec;
`;

export const DevicesTableBodyLink = styled(NavLink)`
  display: inline-table;
  text-decoration: none;
  color: #676a6c;
  width: 100%;
  height: 100%;
`;

export const DevicesTableBodyCompNameSpan = styled.span`
  display: block;
  padding: 8px 4px 0 0;
  font-size: 13px;
  font-weight: 600;
  &::before {
    content: "\\${ (props: DTSpanIconProps) => (
        ( props.icon !== null ) ? props.icon : 'f05e'
      )
    }";
    font-family: 'FontAwesome';
    font-weight: normal;
    font-size: ${ FA_SMALL_FONT_SIZE };
    margin-right: 9px;
    margin-left: 10px;
  }
`;

export const DevicesTableBodyIPSpan = styled.span`
  display: block;
  padding: 8px 4px 0 0;
  font-size: 13px;
  font-weight: 600;
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

export const DevicesTableBodyInfo = styled.p`
  font-size: 13px;
  font-weight: normal;
  color: #676a6c;
`;


export const DevicesTableBodyInfoSpan = styled.span`
  font-size: 13px;
  font-weight: 600;
`;


export const DevicesTableBodyWrapperLast = styled.div`
  box-sizing: border-box;
  display: inline-block;
  padding: 8px 10px 0 3px;
  width: 100%;
  height: 100%;
  position: relative;
`;



export const DevicesTableActionAnchor = styled.a`
  width: 100%;
  max-width: 80px;
  margin: 0 auto;
  height: 20px;
  display: block;
  text-align: center;
  line-height: 20px;
  box-sizing: border-box;
  border-radius: 3px;
  color: #333;
  cursor: pointer;
  font-size: 12px;

  border: 1px solid ${( props: DActionAnchorClickedInterface ) => (
      ( props.isClicked ) ? '#8c8c8c' : '#e7eaec'
    )
  };
  background-color: ${( props: DActionAnchorClickedInterface ) => (
      ( props.isClicked ) ? '#d4d4d4' : '#fff'
    )
  };
  &:focus {
    outline: 0 solid transparent;
  };
  &:hover {
    background-color: ${( props: DActionAnchorClickedInterface ) => (
        ( props.isClicked ) ? '#d4d4d4' : '#e6e6e6'
      )
    };
    border: 1px solid ${( props: DActionAnchorClickedInterface ) => (
        ( props.isClicked ) ? '#8c8c8c' : '#d2d2d2'
      )
    };
  }
`;

export const DevicesTableActionMenuLayout = styled.ul`
  display: ${(props: DActionAnchorClickedInterface) => (
      ( props.isClicked ) ? 'block' : 'none'
    )
  };
  box-shadow: 0 0 3px rgba(86, 96, 117, .7);
  background-color: #fff;
  padding: 3px 0;
  border-radius: 3px;
  position: absolute;
  right: 5px;
  top: 40px;
  z-index: 2;
`;

export const DevicesTableActionMenuItem = styled.li`
  list-style-position: inside;
  list-style-type: none;
`;

export const DevicesTableActionLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  height: ${ DROPPED_MENU_ITEM_HEIGHT };
  line-height: ${ DROPPED_MENU_ITEM_HEIGHT };
  font-size: 13px;
  font-weight: normal;
  color: #333;
  white-space: nowrap;
  text-align: left;
  padding: 3px 5px;
  &::selection {
    background-color: transparent;
  };
  &:hover {
    background-color: #f5f5f5;
    color: #262626;
  };
`;