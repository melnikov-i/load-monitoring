




/**
 * Интерфейс передаваемых в компонент параметров через props от родителя
 */
export interface IFormInputStaticItems {
  id: string[],
  type: string,
  hint: string,
  placeholder: string,
}

export interface IFormInputDynamicItems {
  id: string[],
  value: string,
  validation: string,
}

/**
 * Интерфейс объекта, передающего в стор значение изменямого поля.
 */
export interface IFormInputChangeValue {
  dest: string[],
  value: string,
}


