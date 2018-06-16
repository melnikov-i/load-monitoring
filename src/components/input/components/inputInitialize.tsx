/** 
 * инициализирует поле ввода информации. Получает на вход статические и динамические атрибуты.
 * Проверяет существования динамических данных для конкретного экзепляра. В зависимости от проверки
 * либо создает новую ячейку данных, либо передает управление в компонент, если данные уже существуют.
 */
import * as React from 'react';

import { ISAtributes, IDAtributes } from '../interfaces';
import { InputConnected as Input } from '../connected';

interface InputInitializeProps {
  /** полученные от родительского элемента статические атрибуты */
  sAtributes: ISAtributes,
  /** полученные из собственного редьюсера динамически изменяемые атрибуты */
  dAtributes: IDAtributes,
  /** создает ячейку данных для конкретного экземпляра компонента в хранилище динамических атрибутов */
  createDAtributes: (payload: any) => any;
}

export const InputInitialize: React.SFC<InputInitializeProps> = (props) => {
  const { sAtributes, dAtributes, createDAtributes } = props;

  console.log('initialize:', sAtributes.id[0], sAtributes.id[1]);

  if (!dAtributes) {
    createDAtributes({
      [sAtributes.id[0]]: {
        [sAtributes.id[1]]: {
          value: '',
          validation: '',
          validationRule: sAtributes.validationRule
        }
      }
    });
    return null;
  } else {
    return <Input sAtributes={sAtributes} dAtributes={dAtributes} />
  }
}