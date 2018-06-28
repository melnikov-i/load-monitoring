/** интерфейс данных конкретной формы из модели форм */
export interface IFormsModelItem {
  value: string,
  validation: string,
}

export interface IFormModelCheckboxItem {
  value: boolean,
  isFocused: boolean,
  validation: string,
}