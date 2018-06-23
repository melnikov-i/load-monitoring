/** интерфейс данных, полученных от родителя и из хранилища и передаваемых в вид */
export interface IInputModel {
  id: string[],
  type: string,
  hint: string,
  placeholder: string,
  value: string,
  validation: string,
}

/** интерфейс данных, полученных от родительского компонента */
export interface IInputAtributes {
  id: string[],
  type: string,
  hint: string,
  placeholder: string,
}
