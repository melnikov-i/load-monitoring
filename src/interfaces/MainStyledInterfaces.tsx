export interface MainMenuLinksInterface {
  to: string,
  icon: string,
  value: string,
  childrens: MainMenuLinksInterface[],
}

export interface MainMenuLinkSpanInterface {
  icon: MainMenuLinksInterface['icon'],
  isCompositeActive: boolean,
}

export type MainMenuLinkSpanProps =
  MainMenuLinkSpanInterface & React.HTMLProps<HTMLLinkElement>;