import * as React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import {
  MainMenuLinksInterface,
  IsOpenedInterface,
  UserMenuInterface,
  DashboardInterface,
  LogOunInterface,
  DroppedMenuButtonClickedType,
} from '@src/interfaces';

// import { Spinner } from '@src/components';
import { DroppedMenu } from '@src/libs';

import {
  PageLayout,
  PageMenu,
  PageWrapper,
  PageHeader,
  PageHeaderExitWrapper,
  PageHeaderExitLink,
  PageContent,
  PageFooter,
  PageFooterCopyright,
  PageSmallMenuAnchor,
  PageLogoWrapper,
  PageLogo,
  UserMenuAnchor,
  UserMenuLayout,
  UserMenuItem,
  UserMenuLink,
  PageMenuLayout,
  PageMenuItem,
  PageMenuItemLink,




  // UserMenuAnchorSpan,
  // UserMenuLinkSpan,
  // MainLayout,
  // MainMenu,
  // MainMenuLogoWrapper,
  // MainMenuLogo,
  // MainMenuLayout,
  // MainMenuItem,
  // MainMenuLink,
  // MainMenuFakeLink,
  // MainMenuLinkSpan,
  // DevicesMenuLayout,
  // DevicesMenuLink,
  // DevicesMenuLinkSpan,
  // MainPage,
  // MainTop,
  // MainContent,
  // SmallMenuButton,
  // MainTopExitWrapper,
  // MainTopExitLink,
} from '@src/styled';

/* Компоненты для подгрузки с помощью роутера */
import DashboardConnected from '@src/usage/DashboardUsage';
import DevicesConnected from '@src/usage/DevicesUsage';
import OverviewConnected from '@src/usage/OverviewUsage';

interface MainProps {
  MainMenuWasRequestedFromAPI: boolean,
  MainMenuItemsCollection: MainMenuLinksInterface[],
  UserMenuItemsCollection: UserMenuInterface,
  DevicesMenuWasRequestedFromAPI: boolean,
  DevicesMenuItemsCollection: MainMenuLinksInterface[],
  isDevicesMenuOpened: IsOpenedInterface,
  isMainMenuOpened: IsOpenedInterface,
  makeMainMenuRequestToAPI: () => any,
  makeDevicesMenuRequestToAPI: () => any,
  doMainMenuOnSmallScreenSwitch: () => any,
  doDevicesMenuOnBigScreenSwitch: () => any,
  doDevicesMenuOnMiddleScreenSwitch: () => any,
  doDevicesMenuOnSmallScreenSwitch: () => any,
  doBothMenuOnSmallScreenOff: () => any,
  sendLogOutToAPI: (payload: LogOunInterface) => any,
  DroppedMenuButtonClickedId: DroppedMenuButtonClickedType,  
  changeDroppedMenuClickedId: 
  (payload: DroppedMenuButtonClickedType) => any,

  isMenuOpenedOnSmallScreen: boolean,
  PageMenuItemActiveLabel: string,
  switchMenuOnSmallScreens: () => any,
  switchPageMenuItemActiveLabel: ( payload: string ) => any,
}

export const Main: React.SFC<MainProps> = (props) => {
  const {
    MainMenuWasRequestedFromAPI,
    MainMenuItemsCollection,
    makeMainMenuRequestToAPI,
    DevicesMenuWasRequestedFromAPI,
    DevicesMenuItemsCollection,
    makeDevicesMenuRequestToAPI,
  } = props;

  const getMainMenu = (): MainMenuLinksInterface[] => {
    console.log('getMainMenu');
    if ( !MainMenuWasRequestedFromAPI ) {
      makeMainMenuRequestToAPI();
    }
    return MainMenuItemsCollection;
  };
  const mainMenu = getMainMenu();

  const getDevicesMenu = (): MainMenuLinksInterface[] => {
    console.log('getDevicesMenu');
    if ( !DevicesMenuWasRequestedFromAPI ) {
      makeDevicesMenuRequestToAPI();
    }
    return DevicesMenuItemsCollection;
  };
  const devicesMenu = getDevicesMenu();


  /**
   * Покажет компонент после загрузки меню устройств 
   * (грузится последним) 
   */
  
  if ( devicesMenu.length !== 0 ) {
    const {
      UserMenuItemsCollection,
      DroppedMenuButtonClickedId,
      isMenuOpenedOnSmallScreen,
      PageMenuItemActiveLabel,

      changeDroppedMenuClickedId,
      sendLogOutToAPI,
      switchMenuOnSmallScreens,
      switchPageMenuItemActiveLabel
    } = props;


    /* Вспомогательные функции */

    /**
     * Проверка, содержит ли пункт меню вложенное подменю.
     * 
     * Содержит в себе коллекцию элементов основного меню, 
     * у которых есть вложенные подменю.
     *
     * @param {string} to
     * @return {boolean}
     */

    // const isMultiplePageMenuItem = (to: string): boolean => {
    //   const items: string[] = [
    //     'devices',          
    //   ];
    //   let key: boolean = false;
    //   items.forEach((e) => {
    //     if ( e === to ) {
    //       key = true;
    //     }
    //   });
    //   return key;
    // };


    /* Обработчики событий */

    /**
     * Отправляет в бекэнд команду на завершение сессии
     *
     * @return {undefined}
     */

    const pageHeaderExitLinkHandler = () => {
      const payload: LogOunInterface = {
        step: 'exit',
      };
      sendLogOutToAPI(payload);
    };


    /**
     * Отправляет в Store команду на смену значения ключа,
     * который используется для формирования ширины элементов
     * страницы с помощью isMenuOpenedOnSmallScreen.
     *
     * @return {undefined}
     */

    const smallScreenMenuOpenedHandler = 
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      switchMenuOnSmallScreens();
    };

    // const isMenuItemActiveHandler = ( payload: string ) => {
    //   if ( PageMenuItemActiveLabel !== payload ) {
    //     switchPageMenuItemActiveLabel(payload);
    //   }
    // }


    return (
      <PageLayout>
        <PageMenu
          isMenuOpenedOnSmallScreen={isMenuOpenedOnSmallScreen}
        >
          <PageSmallMenuAnchor 
            onClick={smallScreenMenuOpenedHandler}
            isMenuOpenedOnSmallScreen={isMenuOpenedOnSmallScreen}
          />
          <PageLogoWrapper>
            <PageLogo>
              <UserMenuAnchor 
                onClick={(e) => 
                  DroppedMenu(
                    e,
                    DroppedMenuButtonClickedId,
                    changeDroppedMenuClickedId
                  )
                }
                data-button-id={'20'}
                isClicked={DroppedMenuButtonClickedId === '20'}
              >
                { UserMenuItemsCollection.user[0].login }
              </UserMenuAnchor>              
              <UserMenuLayout
                isClicked={DroppedMenuButtonClickedId === '20'}
              >
                {UserMenuItemsCollection.links.map((e, i) => (
                  <UserMenuItem key={i}>
                    <UserMenuLink
                      to={'/' + e.to}
                      title={e.value}
                      onClick={(e.to === 'exit')
                        ? pageHeaderExitLinkHandler : null
                      }
                    >
                      { e.value }
                    </UserMenuLink>
                  </UserMenuItem>
                ))}
              </UserMenuLayout>
            </PageLogo>
          </PageLogoWrapper>
          

          <PageMenuLayout>
            {
              mainMenu.map((e, i) => {
                return (
                  <PageMenuItem
                    key={i}
                    pageMenuItemActiveLabel={
                      PageMenuItemActiveLabel === e.to
                    }
                  >
                    <PageMenuItemLink
                      icon={e.icon}
                      to={'/' + e.to}
                      isActive={( match, location ) => {
                        /* Пункт меню активен */
                        console.log('match:', match);
                        console.log('location:', location);
                        // if ( match !== null ) {
                        //   console.log(
                        //     'PageMenuItemActiveLabel:',
                        //     PageMenuItemActiveLabel
                        //   )
                        //   if ( PageMenuItemActiveLabel !== '3' + i ) {
                        //     switchPageMenuItemActiveLabel('3' + i);
                        //   }
                        // }
                      }}
                      title={e.value}
                    >
                      {e.value}
                    </PageMenuItemLink>
                  </PageMenuItem>
                );

              })
            }
          </PageMenuLayout>


        </PageMenu>
        <PageWrapper isMenuOpenedOnSmallScreen={isMenuOpenedOnSmallScreen}>
          <PageHeader>
            <PageHeaderExitWrapper>
              <PageHeaderExitLink
                to={'/'}
                onClick={pageHeaderExitLinkHandler}
              >
                {'Выход'}
              </PageHeaderExitLink>
            </PageHeaderExitWrapper>              
          </PageHeader>
          <PageContent>
            <Switch>
              <Route
                exact path="/overview"
                render={() => {
                  console.log('render');
                  switchPageMenuItemActiveLabel('overview');
                  return (
                    <OverviewConnected />
                  );
                }} 
              />
              <Route
                exact path={'/devices'}
                render={()=> (
                  <DevicesConnected />
                )} 
              />
              {devicesMenu.map((e, i) => {
                const item: DashboardInterface['dash_id']['dashboard_id'] = 
                  e.to;
                return (
                  <Route 
                    key={i}
                    exact path={'/' + e.to}
                    render={() => (
                      <DashboardConnected id={item} />
                    )}
                  />
                );
              })}
              <Route exact path={'/'} render={() => (
                  
                  /**
                   * При обращении к корню сайта, запрос 
                   * перенаправляется на /overview 
                   */
                  
                  <Redirect to={'/overview'} />
                )
              }
              />
            </Switch>
          </PageContent>
        </PageWrapper>
        <PageFooter>
          <PageFooterCopyright>
            {'Monyze'}
          </PageFooterCopyright>
        </PageFooter>
      </PageLayout>
    );
  } else {
    /* Пока подгружаются данные, пользователю показывается спиннер */
    return null;
    // return (
    //   <Spinner
    //     width={3}
    //     color={'#2f4050'}
    //     bgColor={'#f3f3f4'}
    //   />
    // );
  }
};