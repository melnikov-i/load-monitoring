/**
 * Интерфейс передаваемых в компонент параметров через props от родителя
 */
export interface IFormInputItems {
  storeContext: number[],
  type: string,
  hint: string,
  placeholder: string,
}

/**
 * Интерфейс объекта, передающего в стор значение изменямого поля.
 */
export interface IFormInputChangeValue {
  storeContext: number[],
  value: string,
}