import styled from 'styled-components';

import {
  FORM_SPINNER_LAYOUT_HEIGHT,
} from '@src/core/styled';

/**
 * Контейнер, в который помещается спиннер
 * @return {React.Component}
 */
export const SpinnerLayout = styled.div`
  width: 100%;
  height: ${FORM_SPINNER_LAYOUT_HEIGHT};
  position: relative;
`;