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
    let isFieldValid: boolean = true;
    
    for (let field in formsModelPart) {
      if (field in validationRules) {
        switch (validationRules[field].method) {
          case 'test':
            const isTestValid: boolean = validationRules[field].condition.test(formsModelPart[field].value);
            isValid = (isTestValid) ? isValid : isTestValid;
            isFieldValid = (isTestValid) ? true : false;
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
            isFieldValid = (isCompareValid) ? true : false;
            break;

          case 'match':
            const doMatch = (): boolean => {
              if (formsModelPart[field].value === validationRules[field].condition)
                return false;
              return true;
            }
            const isMatch: boolean = doMatch();
            isValid = (isMatch) ? isValid : isMatch;
            isFieldValid = (isMatch) ? true : false;
            console.log('isMatch:', isMatch);
            console.log('isValid:', isValid);
            break;
        }
        formItems = {
          ...formItems,
          [field]: {
            value: formsModelPart[field].value,
            validation: isFieldValid ? 'valid' : 'notValid',
          }
        };
      }
    }
    const payload = {
      formName: formName,
      formItems: formItems,
    }
    if (isValid) {
      console.log('VALID');
      callback(formItems);
    }
    console.log('formItems:', formItems);
    validateFormsModelItem(payload);
  }
  
  return <SubmitButton onClick={defaultHandler}>{value}</SubmitButton>;
};