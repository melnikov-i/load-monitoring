/**
 * Компонент содержит каркас формы и подключает дочерние элементы формы 
 */
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Input from '@src/components/input';
import Submit from '@src/components/submit';
import { IInputAtributes, ISubmitParams } from '@src/core/interfaces';

import { FormHeader } from '@src/core/styled';

import {
  GreenCheckboxConnected as GreenCheckbox,
  ReCaptchaConnected as ReCaptcha,
} from '../connected';

/** Статический котнекст формы */
const formInputItemsCollection: IInputAtributes[] = [
  {
    id: ['registration', 'email'],
    type: 'text',
    hint: 'Введите существующий адрес электронной почты',
    placeholder: 'E-Mail',
  },
  {
    id: ['registration', 'password'],
    type: 'password',
    hint: 'Это поле не совпадает с полем Повторите пароль',
    placeholder: 'пароль',
  },
  {
    id: ['registration', 'confirm'],
    type: 'password',
    hint: 'Это поле не совпадает с полем Пароль',
    placeholder: 'повторите пароль',
  },
];

const params: ISubmitParams = {
  value: 'Регистрация',
  formName: 'registration',
  validationRules: {
    email: {
      method: 'test',
      condition: /.+@.+\..+/i,
    },
    password: {
      method: 'compare',
      condition: 'confirm',
    },
    confirm: {
      method: 'compare',
      condition: 'password',
    }
  }
}


interface RegistrationFormProps extends RouteComponentProps<void> {
  sendRegistrationToAPI: (payload: any) => any,
}

export const RegistrationForm: React.SFC<RegistrationFormProps> = (props) => {
  const { /* sendRegistrationToAPI */ } = props;
  
  const sendDataToAPI = (formItems: any) => {
    console.log('registration:', formItems);
    // sendRegistrationToAPI({
      // state: 'register',
      // email: formItems.email.value,
      // password: formItems.password.value,
      // ['g-recaptcha-response']: reCaptchaDynamic.value,
    // });
  }
  return (
    <div>
      <FormHeader color={'grey'}>{'Регистрация'}</FormHeader>
      <form action="">
        {formInputItemsCollection.map((e, i) => <Input key={i} atributes={e} />)}
        <ReCaptcha />
        <GreenCheckbox />
        <Submit params={params} callback={sendDataToAPI} />
      </form>
    </div>
  );
};

{/* <FormSubmit>{'Регистрация'}</FormSubmit> */}