import * as React from 'react';

import {
  MainHeaderLayout,
  MainHeaderH1,
  MainHeaderBreadCrumbsLayout,
  MainHeaderBreadCrumbsItem,
  MainHeaderBreadCrumbsItemLink,
  MainHeaderBreadCrumbsItemSpan
} from '@src/styled';

import {
  MainHeaderInterface
} from '@src/interfaces';

interface MainHeaderProps {
  data: MainHeaderInterface,
}

export const MainHeader: React.SFC<MainHeaderProps> = (props) => {
  const { data } = props;
  return (
    <MainHeaderLayout>
      <MainHeaderH1>
        {data.header}
      </MainHeaderH1>
      <MainHeaderBreadCrumbsLayout>
        {data.breadcrumbs.map((e, i, a) => {
          if ( i !== (a.length - 1) ) {
            return (
              <MainHeaderBreadCrumbsItem
                key={i}
                index={i}
              >
                <MainHeaderBreadCrumbsItemLink
                  to={'/' + e.href}
                  title={e.title}
                >
                  {e.title}
                </MainHeaderBreadCrumbsItemLink>
              </MainHeaderBreadCrumbsItem>              
            );
          } else {
            return (
              <MainHeaderBreadCrumbsItem
                key={i}
                index={i}
              >
                <MainHeaderBreadCrumbsItemSpan>
                  {e.title}
                </MainHeaderBreadCrumbsItemSpan>
              </MainHeaderBreadCrumbsItem>
            );
          }
        })}
      </MainHeaderBreadCrumbsLayout>
    </MainHeaderLayout>
  );
};