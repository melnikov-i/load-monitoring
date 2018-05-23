import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import FormInput from '@src/core/common/components/formInput/usage';
import {
  IFormInputItems,
} from '@src/core/common/components/formInput/model';

import {
  RegistrationFormHeader,
  Content,
} from '../views';

interface VFormProps extends RouteComponentProps<void> {

}

export const VForm: React.SFC<VFormProps> = (props) => {
  const { } = props;

  const formInputItemsCollection: IFormInputItems[] = [
    {
      type: 'text',
      hint: 'hint',
      validation: 'valid',
      placeholder: 'E-Mail',
      value: '',
    },
    {
      type: 'password',
      hint: 'hint',
      validation: 'notValid',
      placeholder: 'Password',
      value: '',
    },
    {
      type: 'password',
      hint: 'hint',
      validation: 'valid',
      placeholder: 'Confirm',
      value: '',
    },
  ];

  console.log('form');
  return (
    <Content>
      <RegistrationFormHeader>{'Регистрация'}</RegistrationFormHeader>
      <form action="">
        {formInputItemsCollection.map((e, i) => (
          <FormInput
            key={i}
            formInputItems={e}
          />
        ))}
      </form>
    </Content>
  );
};
