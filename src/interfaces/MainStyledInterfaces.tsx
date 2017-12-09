export interface MainMenuLinksInterface {
  to: string,
  icon: string,
  value: string,
  childrens?: MainMenuLinksInterface[],
}

export interface MainMenuLinkSpanInterface {
  icon: MainMenuLinksInterface['icon'],
  isCompositeActive: boolean,
}

interface MainMenuLayoutInterface {
  isCompositeActive: boolean,
}

export type MainMenuLinkSpanProps =
  MainMenuLinkSpanInterface & React.HTMLProps<HTMLSpanElement>;

export type MainMenuLayoutProps =
  MainMenuLayoutInterface & React.HTMLProps<HTMLUListElement>;