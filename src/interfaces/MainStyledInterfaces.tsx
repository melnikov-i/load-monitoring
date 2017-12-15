export interface MainMenuLinksInterface {
  to: string,
  icon: string,
  value: string,
}

export interface MainMenuIconInterface {
  icon: MainMenuLinksInterface['icon'],
}

export interface IsOpenedInterface {
  onSmallScreen?: boolean,
  onMiddleScreen?: boolean,
  onBigScreen?: boolean,
}

export type MMSpanIconProps =
  MainMenuIconInterface & React.HTMLProps<HTMLSpanElement>;

export type MMUListIsOpenedProps =
  IsOpenedInterface & React.HTMLProps<HTMLUListElement>;

export type MMDivIsOpenedProps =
  IsOpenedInterface & React.HTMLProps<HTMLDivElement>;

export type MMLinkIsOpenedProps =
  IsOpenedInterface & React.HTMLProps<HTMLLinkElement>;

export type MMButtonIsOpenedProps =
  IsOpenedInterface & React.HTMLProps<HTMLButtonElement>;