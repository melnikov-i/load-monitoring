import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MenuWidth: string = '220px';
const TopHeight: string = '70px';
const FooterHeight: string = '50px';

export const MainLayout = styled.div`
  width: 100%;
  height: 100%;
`;

export const MainMenu = styled.div`
  width: ${ MenuWidth };
  height: 100%;
  background-color: #2f4050;
  position: fixed;
  top: 0;
  left: 0;
`;

export const MainPage = styled.div`
  width: calc(100% - ${ MenuWidth });
  height: 100%;
  margin-left: ${ MenuWidth };
`;

export const MainTop = styled.div`
  width: 100%;
  height: ${ TopHeight };
  background-color: #f3f3f3;
  border-bottom: 1px solid #e7eaec;
  box-sizing: border-box;
`;

export const MainContent = styled.div`
  width: 100%;
  min-height: calc(100% - ${ TopHeight } - ${ FooterHeight });
`;

export const MainFooter = styled.div`
  width: 100%;
  height: ${ FooterHeight };
  box-sizing: border-box;
  border-top: 1px solid #e7eaec;
`;


export const MainMenuItem = styled.li`
  list-style-position: inside;
  list-style-type: none;
  padding: 0 10px;
`;

export const MainMenuLink = styled(NavLink)`
  font-size: 16px;
  font-family: 'Verdana', sans-serif;
  text-align: center;
  text-decoration: none;
  display: block;
  height: 20px;
  line-height: 20px;
  color: #a7b1c2;
  &::selection {
    background: transparent;
  }
`;