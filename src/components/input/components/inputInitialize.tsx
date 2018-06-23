/** 
 * инициализирует поле ввода информации. Получает на вход статические и динамические атрибуты.
 * Проверяет существования динамических данных для конкретного экзепляра. В зависимости от проверки
 * либо создает новую ячейку данных, либо передает управление в компонент, если данные уже существуют.
 */
import * as React from 'react';

import { IInputAtributes, IFormsModelItem, IInputModel } from '@src/core/interfaces';
import { InputConnected as Input } from '../connected';

interface InputInitializeProps {
  /** полученные от родительского элемента статические атрибуты */
  atributes: IInputAtributes,
  /** полученные из собственного редьюсера динамически изменяемые атрибуты */
  formsModelItem: IFormsModelItem,
  /** создает ячейку данных для конкретного экземпляра компонента в хранилище динамических атрибутов */
  createFormsModelItem: (payload: any) => any;
}

export const InputInitialize: React.SFC<InputInitializeProps> = (props) => {
  const { atributes, formsModelItem, createFormsModelItem } = props;

  console.log('[input].inputInitialize');

  if (!formsModelItem) {
    createFormsModelItem({
      [atributes.id[0]]: {
        [atributes.id[1]]: {
          value: '',
          validation: '',
        }
      }
    });
    return null;
  } else {
    const inputModel: IInputModel = Object.assign({}, atributes, formsModelItem);
    return <Input items={inputModel} />
  }
}