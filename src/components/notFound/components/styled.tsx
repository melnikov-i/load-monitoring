import styled from 'styled-components';

import {
  colors,
} from '@src/core/styled';

export const NotFoundLayout = styled.div`
  width: 300px;
  margin: 0 auto;
  padding-top: 40px;
`;

export const NotFoundHeader = styled.h1`
  font-size: 170px;
  font-weight: 300;
  margin-bottom: 10px;
  color: ${colors.grey};
  line-height: 1;
  text-align: center;
`;

export const NotFoundDescription = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 30px;
  color: ${colors.grey};
  line-height: 1.1;
  text-align: center;
`;