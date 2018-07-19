import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { SMALL_SCREEN_MAX } from '@src/core/styled';

const Checkboxes = require('@src/images/checkboxes');

/**
 * Обертка для чекбока. Служит каркасом для дочерних элементов
 * @returns {React.Component}
 */
type TRegistrationCheckbox = {
  hint: string,
  validation: string,
};

export const RegistrationCheckboxWrapper = styled.div`
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

/**
 * Зеленый скрытый оригинальный чекбокс
 */
export const RegistrationCheckbox = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
`;

/**
 * Текст для чекбокса с имитированным и стилизованным чекбоксом
 */
export const RegistrationLabelText = styled.span`
  cursor: pointer;
  font-size: 14px;
  color: #676a6c;
  &::before {
    content: '';
    display: inline-block;
    vertical-align: top;
    width: 24px;
    height: 24px;
    margin-right: 5px;
    background-image: url(${Checkboxes});
    background-size: 240px 24px;
    background-position: ${(props: { isSelected: boolean, isFocused: boolean }) => (
    props.isSelected ? '-48px 0' : props.isFocused ? '-24px 0' : '0 0'
  )};
  }
  &:hover:before {
    background-position: ${(props: { isSelected: boolean }) => (
    props.isSelected ? '-48px 0' : '-24px 0'
  )};
  }
`;

/**
 * Ссылка на страницу с пользовательским соглашением
 */
export const RegistrationLink = styled(NavLink)`
  text-decoration: none;
  height: 24px;
  line-height: 24px;
  display: inline-block;
  margin-left: 10px;
  font-size: 14px;
  color: #1c84c6;
`;
