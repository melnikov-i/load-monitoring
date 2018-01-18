import styled from 'styled-components';

import {
  MIDDLE_SCREEN_MAX,
  FA_OVERVIEW_ICON_SIZE,
  BIG_USER_FAKE_LINK_HEIGHT
} from '@src/styled';

import {
  DActionAnchorClickedInterface
} from '@src/interfaces';

export const OverviewLayout = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 20px 30px 70px;
  @media screen and (max-width: ${ MIDDLE_SCREEN_MAX }) {
    padding: 20px 10px;
  }
`;

export const OverviewHeader = styled.h1`
  font-size: 18px;
  font-weight: 600;
`;

export const OverviewIconsLayout = styled.div`
  width: 100%;
  padding: 20px 0;
`;

export const OverviewIconWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  box-sizing: border-box;
  width: 27.7%;
  margin: 0 2.7%;
  background-color: ${(props: {bgcolor: string}) => props.bgcolor};
  padding: 3% 8% 5%;
  border-radius: 5px;
`;

export const OverviewIcon = styled.div`
  width: 100%;
  height: ${ FA_OVERVIEW_ICON_SIZE };
  &::before {
    content: "\\${(props: {icon: string}) => props.icon}";
    display: block;
    margin: 0 auto;
    text-align: center;
    font-family: 'FontAwesome';
    font-weight: normal;
    font-size: ${ FA_OVERVIEW_ICON_SIZE };
    color: #fff;
  }
`;

export const OverviewIconNumber = styled.p`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  color: #fff;
  margin-top: 5px;
`;

export const OverviewIconText = styled.p`
  font-size: 12px;
  font-weight: normal;
  color: #fff;
  text-align: center;
`;

export const OverviewTable = styled.table`
  width: 100%;
  margin: 30px auto;
  border-spacing: 0;
`;

export const OverviewTableHead = styled.thead``;

export const OverviewTableHeadRow = styled.tr`
  width: 100%;
`;

export const OverviewTableHeadColl = styled.th`
  box-sizing: border-box;
  font-size: 14px;
  font-weight: normal;
  min-height: 25px;
  line-height: 25px;
  text-align: left;
`;

export const OverviewTableHeadCollNumber = OverviewTableHeadColl.extend`
  width: 4%;
  text-align: center;
`;

export const OverviewTableHeadCollDate = OverviewTableHeadColl.extend`
  width: 16%;
`;

export const OverviewTableHeadCollCompName = OverviewTableHeadColl.extend`
  width: 20%;
`;

export const OverviewTableHeadCollEvent = OverviewTableHeadColl.extend`
  width: 50%;
`;

export const OverviewTableHeadCollAction = OverviewTableHeadColl.extend`
  width: 10%;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: normal;
`;

export const OverviewTableBody = styled.tbody``;

export const OverviewTableBodyRow = OverviewTableHeadRow.extend`
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const OverviewTableBodyColl = styled.td`
  vertical-align: top;
  border-top: 1px solid #e7eaec;
  color: #676a6c;
  padding: 8px 0;
  font-size: 13px;
  font-weight: normal;
`;

export const OverviewTableBodyCollNumber = OverviewTableBodyColl.extend`
  text-align: center;
`;

export const OverviewTableBodyCollActions = OverviewTableBodyColl.extend`
  position: relative;
`;

export const OverviewTableActionAnchor = styled.a`
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
      ( props.isClicked )
      ? '#8c8c8c'
      : '#e7eaec'
    )
  };
  background-color: ${( props: DActionAnchorClickedInterface ) => (
      ( props.isClicked )
      ? '#d4d4d4'
      : '#fff'
    )
  };
  &:focus {
    outline: 0 solid transparent;
  };
  &:hover {
    background-color: ${( props: DActionAnchorClickedInterface ) => (
      ( props.isClicked )
      ? '#d4d4d4'
      : '#e6e6e6'
    )
  };
    border: 1px solid ${( props: DActionAnchorClickedInterface ) => (
      ( props.isClicked )
      ? '#8c8c8c'
      : '#d2d2d2'
    )
  };
  }
`;

export const OverviewTableActionMenuLayout = styled.ul`
  display: ${(props: DActionAnchorClickedInterface) => (
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
  z-index: 2;
`;

export const OverviewTableActionMenuItem = styled.li`
  list-style-position: inside;
  list-style-type: none;
`;

export const OverviewTableActionMenuAnchor = styled.a`
  display: block;
  text-decoration: none;
  height: ${ BIG_USER_FAKE_LINK_HEIGHT };
  line-height: ${ BIG_USER_FAKE_LINK_HEIGHT };
  font-size: 13px;
  font-weight: normal;
  color: #333;
  white-space: nowrap;
  text-align: left;
  padding: 3px 5px;
  cursor: pointer;
  &::selection {
    background-color: transparent;
  };
  &:hover {
    background-color: #f5f5f5;
    color: #262626;
  };
`;