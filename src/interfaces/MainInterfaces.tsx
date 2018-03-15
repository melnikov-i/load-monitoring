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

export interface MainMenuIconInterface {
  icon: MainMenuLinksInterface['icon'],
}

type onSmallScreenType = boolean;
type onMiddleScreenType = boolean;
type onBigScreenType = boolean;

export interface IsOpenedInterface {
  onSmallScreen: onSmallScreenType,
  onMiddleScreen: onMiddleScreenType,
  onBigScreen: onBigScreenType,
}

export interface IsOpenedOnSmallScreenInterface {
  onSmallScreen: onSmallScreenType,
}

export type DroppedMenuButtonClickedType = string;

export type MMSpanIconProps =
  MainMenuIconInterface & React.HTMLProps<HTMLSpanElement>;

export type MMUListIsOpenedProps =
  IsOpenedInterface & React.HTMLProps<HTMLUListElement>;

  export type MMDivIsOpenedProps =
    IsOpenedOnSmallScreenInterface & React.HTMLProps<HTMLDivElement>;

export type MMLinkIsOpenedProps =
  IsOpenedInterface & React.HTMLProps<HTMLLinkElement>;

export type MMSpanIsOpenedProps =
  IsOpenedInterface & React.HTMLProps<HTMLSpanElement>;

export type MMButtonIsOpenedProps =
  IsOpenedOnSmallScreenInterface & React.HTMLProps<HTMLButtonElement>;