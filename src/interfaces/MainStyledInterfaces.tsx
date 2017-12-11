export interface MainMenuLinksInterface {
  to: string,
  icon: string,
  value: string,
}

export interface MainMenuLinkSpanInterface {
  icon: MainMenuLinksInterface['icon'],
}

export interface DevicesMenuLayoutInterface {
  isOpened: boolean,
}

export type MainMenuLinkSpanProps =
  MainMenuLinkSpanInterface & React.HTMLProps<HTMLSpanElement>;

export type DevicesMenuLayoutProps =
  DevicesMenuLayoutInterface & React.HTMLProps<HTMLUListElement>;

export type DevicesButtonProps =
  DevicesMenuLayoutInterface & React.HTMLProps<HTMLButtonElement>;