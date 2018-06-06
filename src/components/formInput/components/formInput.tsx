/**
 * Компонент однострочного поля ввода информации в форму
 */
import * as React from 'react';

import {
  FormInputWrapper,
  FormInputField,
} from './styled';

import {
  IFormInputStaticItems,
  IFormInputDynamicItems,
} from '../interfaces';

interface FormInputProps {
  /** Статические параметры формы, получаемые от родительского компонента */
  staticItems: IFormInputStaticItems,
  /** Динамические параметры формы, генерируемые непосредственно полями ввода */
  dynamicItems: IFormInputDynamicItems,
  /** Добавляет в Store экземпляр объекта dynamicItems */
  changeDynamicItemsModel: (payload: IFormInputDynamicItems) => any,
}

export const FormInput: React.SFC<FormInputProps> = (props) => {
  const { 
    staticItems: { id, type, hint, placeholder },
    dynamicItems,
    changeDynamicItemsModel,
  } = props;
  
  if (!dynamicItems) {
    changeDynamicItemsModel({
      id: id,
      value: '',
      validation: '',      
    });
    return null;
  } else {
    const { value, validation } = dynamicItems;
    const changeValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const payload: IFormInputDynamicItems = {
        id: id,
        value: e.currentTarget.value,
        validation: validation,
      }
      changeDynamicItemsModel(payload);
    }
    
    console.log('value:', value);
    console.log('validation:', validation);

    return (
      <FormInputWrapper
        validation={validation}
        hint={hint}
        >
      <FormInputField
        validation={validation}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={changeValueHandler}
        />
      </FormInputWrapper>
    );
  }
};