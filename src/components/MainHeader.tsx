import * as React from 'react';

import {
  MainHeaderLayout,
  MainHeaderH1,
  MainHeaderBreadCrumbsLayout,
  MainHeaderBreadCrumbsItem,
  MainHeaderBreadCrumbsItemLink,
  MainHeaderBreadCrumbsItemSpan,
  MainHeaderAnchorWrapper,
  Anchor,
} from '@src/styled';

import {
  MainHeaderInterface
} from '@src/interfaces';

interface MainHeaderProps {
  data: MainHeaderInterface,
  MainHeaderButtonWasClicked: boolean,
  mainHeaderButtonSwitch: () => any,
}

export const MainHeader: React.SFC<MainHeaderProps> = (props) => {
  const {
    data,
    mainHeaderButtonSwitch,
  } = props;
  
  const handler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    mainHeaderButtonSwitch();
  };

  return (
    <MainHeaderLayout>
      <MainHeaderH1>{data.header}</MainHeaderH1>
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
      {(data.button)
        ? <MainHeaderAnchorWrapper>
            <Anchor
              background={'#1c84c6'}
              onClick={handler}
            >
              {'Настроить'}
            </Anchor>
          </MainHeaderAnchorWrapper>
        : null
      }
    </MainHeaderLayout>
  );
};