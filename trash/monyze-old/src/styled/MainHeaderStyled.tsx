import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MainHeaderLayout = styled.div`
  height: 65px;
  padding: 20px 30px;
  background-color: #fff;
  border-bottom: 1px solid #e7eaec;
  position: relative;
`;

export const MainHeaderH1 = styled.h1`
  font-size: 24px;
  font-weight: 100;
  color: #676a6c;
`;

export const MainHeaderBreadCrumbsLayout = styled.ul`
  margin-top: 10px;
`;

export const MainHeaderBreadCrumbsItem = styled.li`
  list-style-type: none;
  list-style-position: inside;
  display: inline-block;
  vertical-align: top;
  font-size: 13px;
  &::before {
    content: "/\00a0";
    display: ${(props: {index: number}) => (
        ( props.index === 0 ) ? 'none' : 'inline-block'
      )
    };
    color: #ccc;
    padding: 0 5px;
  }
`;

export const MainHeaderBreadCrumbsItemLink = styled(NavLink)`
  text-decoration: none;
  font-size: 13px;
  color: #676a6c;
`;

export const MainHeaderBreadCrumbsItemSpan = styled.span`
  font-size: 13px;
  color: #676a6c;
  font-weight: 600;
`;

export const MainHeaderAnchorWrapper = styled.div`
  position: absolute;
  top: 38px;
  right: 15px;
`;