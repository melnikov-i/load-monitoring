export interface MainHeaderInterface {
  header: string,
  button?: boolean,
  breadcrumbs: {
    href: string,
    title: string,
  }[],
}