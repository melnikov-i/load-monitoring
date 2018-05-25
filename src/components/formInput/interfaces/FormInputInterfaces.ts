export interface IFormInputItems {
  storeContext: number[],
  type: string,
  hint: string,
  validation: string,
  placeholder: string,
}

export interface IFormInputValues {
  storeContext: number[],
  values: string[][],
}

export interface IFormInputChangeValue {
  storeContext: number[],
  value: string,
}