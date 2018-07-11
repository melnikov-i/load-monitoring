export interface IMenuItem {
  to: string,
  icon: string,
  value: string,
  submenu?: IMenuItem[],
}

export interface IUser {
  login: string,
  links: {
    to: string,
    value: string,
  }[],
}

export interface ISelecSubmenu {
  parent: string,
  child: string,
}