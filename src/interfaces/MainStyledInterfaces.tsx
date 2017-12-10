export interface MainMenuLinksInterface {
  to: string,
  icon: string,
  value: string,
}

export interface MainMenuLinkSpanInterface {
  icon: MainMenuLinksInterface['icon'],
  isOpened: boolean,
}

interface MenuLayoutInterface {
  isOpened: boolean,
}

export type MainMenuLinkSpanProps =
  MainMenuLinkSpanInterface & React.HTMLProps<HTMLSpanElement>;

export type MenuLayoutProps =
  MenuLayoutInterface & React.HTMLProps<HTMLUListElement>;

export type DevicesButtonProps =
  MenuLayoutInterface & React.HTMLProps<HTMLButtonElement>;