import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Input from '@src/components/input';
import { ISAtributes } from '@src/core/interfaces';

import { FormHeader, FormSubmit } from '@src/core/styled';

/** Статический котнекст формы */
const formInputItemsCollection: ISAtributes[] = [
  {
    id: ['recovery', 'email'],
    type: 'text',
    hint: 'Введите адрес электронной почты',
    placeholder: 'E-Mail',
  },
];

interface RecoveryFormProps extends RouteComponentProps<void> { }

export const RecoveryForm: React.SFC<RecoveryFormProps> = () => {
  return (
    <div>
      <FormHeader color={'grey'}>{'Восстановление пароля'}</FormHeader>
      <form action="">
        {formInputItemsCollection.map((e, i) => <Input key={i} sAtributes={e} />)}
        <FormSubmit>{'Восстановить'}</FormSubmit>
      </form>
    </div>
  );
};
