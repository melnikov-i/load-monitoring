interface MainHeaderBreadCrumbsInterface {
  href: string,
  title: string,
}

export interface MainHeaderInterface {
  header: string,
  breadcrumbs: MainHeaderBreadCrumbsInterface[],
}