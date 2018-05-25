import styled from 'styled-components';

/** Шаблон для стиля чекбокса */
const Checkboxes = require('@src/images/checkboxes');

/**
 * Чекбокс пользовательского соглашения
 * @returns {React.Component}
 */
type TRegistrationAgreementCheckbox = {
  isSelected: boolean,
  hint: string,
  validation: string,
};

export const RegistrationAgreementCheckbox = styled.a`
  text-decoration: none;
  cursor: pointer;
  width: 100%;
  height: 24px;
  display: block;
  margin-bottom: 20px;
  font-size: 14px;
  color: #676a6c;
  position: relative;
  &::before {
    content: "";
    display: inline-block;
    vertical-align: top;
    width: 24px;
    height: 24px;
    margin-right: 10px;
    background-image: url(${Checkboxes});
    background-size: 240px 24px;
    background-position: ${(props: TRegistrationAgreementCheckbox) => (
    props.isSelected ? '-48px 0' : '0 0'
  )};
  }
  &:hover:before {
    background-position: ${(props: TRegistrationAgreementCheckbox) => (
    props.isSelected ? '-48px 0' : '-24px 0'
  )};
  }
  &::after {
    content: "${(props: TRegistrationAgreementCheckbox) => props.hint}";
    display: ${(props: TRegistrationAgreementCheckbox) => {
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
`;