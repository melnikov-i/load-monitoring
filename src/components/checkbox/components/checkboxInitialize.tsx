import * as React from 'react';
import { IFormModelCheckboxItem } from '@src/core/interfaces';
import { CheckboxConnected as Checkbox } from '../connected';

interface CheckboxInitializeProps {
  formsModelCheckbox: IFormModelCheckboxItem,
  createFormsModelItem: (payload: any) => any;
}

export const CheckboxInitialize: React.SFC<CheckboxInitializeProps> = (props) => {
  const { formsModelCheckbox, createFormsModelItem } = props;
  console.log('formsModelCheckbox:', formsModelCheckbox);

  if (!formsModelCheckbox) {
    createFormsModelItem({
      registration: {
        checkbox: {
          value: false,
          isFocused: false,
          validation: '',
        }
      }
    });
    return null;
  } else {
    return <Checkbox items={formsModelCheckbox} />;
  }
};