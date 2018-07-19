import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Input from '@src/components/input';
import Submit from '@src/components/submit';
import { IInputAtributes, ISubmitParams } from '@src/core/interfaces';

import { FormHeader } from '@src/core/styled';

/** Статический котнекст формы */
const formInputItemsCollection: IInputAtributes[] = [
  {
    id: ['recovery', 'email'],
    type: 'text',
    hint: 'Введите адрес электронной почты',
    placeholder: 'E-Mail',
  },
];

const params: ISubmitParams = {
  value: 'Восстановить',
  formName: 'recovery',
  validationRules: {
    email: {
      method: 'test',
      condition: /.+@.+\..+/i,
    }
  }
}

interface RecoveryFormProps extends RouteComponentProps<void> {
  sendRecoveryToAPI: (payload: any) => any,
}

export const RecoveryForm: React.SFC<RecoveryFormProps> = (props) => {
  const { sendRecoveryToAPI } = props;

  const sendDataToAPI = (formItems: any) => {
    console.log('RECOVERY:', formItems);
    sendRecoveryToAPI({
      state: 'recover',
      email: formItems.email.value,
    });
  };

  return (
    <div>
      <FormHeader color={'grey'}>{'Восстановление пароля'}</FormHeader>
      <form action="">
        {formInputItemsCollection.map((e, i) => <Input key={i} atributes={e} />)}
        <Submit params={params} callback={sendDataToAPI} />
      </form>
    </div>
  );
};
