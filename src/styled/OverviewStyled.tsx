import styled from 'styled-components';

import {
  MIDDLE_SCREEN_MAX,
  FA_OVERVIEW_ICON_SIZE
} from '@src/styled';

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
// background-color: rgba(255, 0, 255, .2);

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
// background-color: rgba(0, 0, 0, .4);

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