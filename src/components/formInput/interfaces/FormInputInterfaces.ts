/**
 * Интерфейс передаваемых в компонент параметров через props от родителя
 */
export interface IFormInputItems {
  storeContext: number[],
  type: string,
  hint: string,
  validation: string,
  placeholder: string,
}

/**
 * Интерфейс для объекта, хранящего в сторе значения полей,
 * заполненные пользователем.
 */
export interface IFormInputValues {
  storeContext: number[],
  values: string[][],
}

/**
 * Интерфейс объекта, передающего в стор значение изменямого поля.
 */
export interface IFormInputChangeValue {
  storeContext: number[],
  value: string,
}