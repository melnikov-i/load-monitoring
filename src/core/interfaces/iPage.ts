export interface IMenuItem {
  to: string,
  icon: string,
  value: string,
  submeny?: IMenuItem,
}

export interface IUser {
  login: string,
  links: {
    to: string,
    value: string,
  }[],
}




export interface UserInterface {
  login: string,
}

export interface UserLinkInterface {
  to: string,
  value: string,
}

export interface UserMenuInterface {
  user: UserInterface[],
  links: UserLinkInterface[],
}

export type DroppedMenuButtonClickedType = string;


/** delete */
export interface MainMenuLinksInterface {
  to: string,
  icon: string,
  value: string,
}