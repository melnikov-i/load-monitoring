import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SimplePageWrapper = styled.div`
  width: 400px;
  height: 400px;
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
    font-size: 280px;
    color: ${(props: { type: string }) => (
      props.type === 'error' ? '#ed5565' : '#1ab394'
    )};
    text-align: center;
  }
`;

export const SimplePageText = styled.p`
  font-size: 18px;
  color: ${(props: { type: string }) => (
    props.type === 'error' ? '#ed5565' : '#1ab394'
  )};
  margin-bottom: 20px;
`;

export const SimplePageLinkToHome = styled(NavLink)`
  text-decoration: ingerit;
  font-size: 18px;
  color: #1c84c6;
`;
