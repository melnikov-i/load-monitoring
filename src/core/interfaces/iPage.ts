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

export interface ISelectSubmenu {
  parent: string,
  child: string,
}