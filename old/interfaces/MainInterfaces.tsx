export interface MainMenuLinksInterface {
  to: string,
  icon: string,
  value: string,
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