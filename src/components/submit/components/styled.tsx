import styled from 'styled-components';

import { FORM_PAGE_FONT_SIZE, colors } from '@src/core/styled';

/**
 * Кнопка отправки формы
 */
export const FormSubmit = styled.button`
  width: 100%;
  padding: 6px 12px;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: ${FORM_PAGE_FONT_SIZE};
  font-weight: 400;
  touch-action: manipulation;
  cursor: pointer;
  color: #fff;
  background-color: ${colors.lightGreen};
  text-align: center;
  white-space: nowrap;
  user-select: none;
  margin-bottom: 10px;
  &:hover {
    background-color: ${colors.green};
  }
`;