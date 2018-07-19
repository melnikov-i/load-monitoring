import styled from 'styled-components';
import { SMALL_SCREEN_MAX } from '@src/core/styled';

/**
 * Оборачивает рекапчу для позиционирования и показа 
 * вспомогательных сообщений (подсказок)
 * @returns {React.Component}
 */
type TRegistrationCheckbox = {
  hint: string,
  validation: string,
};

export const RecaptchaWrapper = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 15px;
  &::after {
    content: "${(props: TRegistrationCheckbox) => props.hint}";
    display: ${(props: TRegistrationCheckbox) => {
    switch (props.validation) {
      case 'valid': return 'none';
      case 'notValid': return 'block';
      default: return 'none';
    }
  }};
    font-size: 12px;
    color: #b84252;
    position: absolute;
    top: 50%;
    left: 105%;
    transform: translateY(-50%);
    width: 250px;
  }
  @media screen and (max-width: ${SMALL_SCREEN_MAX}) {
    margin-bottom: 6px;
  }
`;