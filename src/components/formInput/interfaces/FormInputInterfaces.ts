/**
 * Интерфейс передаваемых в компонент параметров через props от родителя
 */
export interface IFormInputItems {
  id: string,
  validation: string,
  type: string,
  hint: string,
  placeholder: string,
}

/**
 * Интерфейс объекта, передающего в стор значение изменямого поля.
 */
export interface IFormInputChangeValue {
  dest: string[],
  value: string,
}