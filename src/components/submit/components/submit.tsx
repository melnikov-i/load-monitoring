import * as React from 'react';

import { SubmitButton } from './';
import { ISubmitParams } from '@src/core/interfaces';
interface SubmitProps {
  params: ISubmitParams,
  callback: (items: any) => any, 
  formsModelPart: any,
  validateFormsModelItem: (payload: any) => any,
}

export const Submit: React.SFC<SubmitProps> = (props) => {
  const {
    params: { value, validationRules, formName },
    validateFormsModelItem,
    callback,
    formsModelPart,
  } = props;

  const defaultHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    let formItems: any = {};
    let isValid: boolean = true;
    
    for (let field in formsModelPart) {
      if (field in validationRules) {
        switch (validationRules[field].method) {
          case 'test':
            const isTestValid: boolean = validationRules[field].condition.test(formsModelPart[field].value);
            isValid = (isTestValid) ? isValid : isTestValid;
            break;
            
            case 'compare':
            const doCompare = (): boolean => {
              if (formsModelPart[field].value === '') return false;
              if (formsModelPart[field].value === formsModelPart[validationRules[field].condition].value) {
                return true;
              } else {
                return false;
              }
            }
            const isCompareValid: boolean = doCompare();
            isValid = (isCompareValid) ? isValid : isCompareValid;
            break;
        }
        formItems = {
          ...formItems,
          [field]: {
            value: formsModelPart[field].value,
            validation: isValid ? 'valid' : 'notValid',
          }
        };
      }
    }
    const payload = {
      formName: formName,
      formItems: formItems,
    }
    if (isValid) {
      callback(formItems);
    } else {
      console.log('formItems:', formItems);
      validateFormsModelItem(payload);
    }
  }
  
  return <SubmitButton onClick={defaultHandler}>{value}</SubmitButton>;
};