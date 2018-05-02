import styled from 'styled-components';

export const Anchor = styled.a`
  min-width: 74px;
  font-size: 14px;
  display: inline-block;
  text-decoration: none;
  color: #fff;
  background-color: ${(props: {background: string}) => (props.background)};
  border-radius: 3px;
  padding: 4px 12px;
  cursor: pointer;
  line-height: 22px;
  text-align: center;
  user-select: none;
  margin: 0 5px;
`;