interface MainHeaderBreadCrumbsInterface {
  href: string,
  title: string,
}

export interface MainHeaderInterface {
  header: string,
  button?: boolean,
  breadcrumbs: MainHeaderBreadCrumbsInterface[],
}