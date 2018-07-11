import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NotificationPageWrapper = styled.div`
  width: 240px;
  height: 240px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  &::before {
    content: '\\${(props: {type: string}) => (
      props.type === 'error' ? 'f071' : 'f05d'
    )}';
    display: block;
    font-family: 'FontAwesome';
    font-weight: normal;
    font-size: 200px;
    color: ${(props: { type: string }) => (
      props.type === 'error' ? '#ed5565' : '#1ab394'
    )};
    text-align: center;
  }
`;

export const NotificationPageText = styled.p`
  font-size: 14px;
  color: ${(props: { type: string }) => (
    props.type === 'error' ? '#ed5565' : '#1ab394'
  )};
  margin-bottom: 20px;
`;

export const NotificationPageLinkToHome = styled(NavLink)`
  text-decoration: ingerit;
  font-size: 18px;
  color: #1c84c6;
`;
