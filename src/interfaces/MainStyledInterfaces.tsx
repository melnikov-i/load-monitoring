export interface MainMenuLinksInterface {
  to: string,
  icon: string,
  value: string,
  childrens: MainMenuLinksInterface[],
}

interface MainMenuLinkIconInterface {
  icon: MainMenuLinksInterface['icon'],
}

interface MainMenuLinkSpanInterface {
  fontSize: string,
}

export type MainMenuLinkIconProps = 
  MainMenuLinkIconInterface & React.HTMLProps<HTMLSpanElement>;


export type MainMenuLinkSpanProps =
  MainMenuLinkSpanInterface & React.HTMLProps<HTMLLinkElement>;