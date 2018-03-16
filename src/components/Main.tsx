import * as React from 'react';
import {
  Route,
  Switch
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
  isPageMenuItemActive: boolean,
  switchMenuOnSmallScreens: () => any,
  switchPageMenuItemActive: () => any,
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
    if ( !MainMenuWasRequestedFromAPI ) {
      makeMainMenuRequestToAPI();
    }
    return MainMenuItemsCollection;
  };
  const mainMenu = getMainMenu();

  const getDevicesMenu = (): MainMenuLinksInterface[] => {
    if ( !DevicesMenuWasRequestedFromAPI ) {
      makeDevicesMenuRequestToAPI();
    }
    return DevicesMenuItemsCollection;
  };
  const devicesMenu = getDevicesMenu();

  /* Покажет компонент после загрузки меню устройств (грузится последним) */
  if ( devicesMenu.length !== 0 ) { 

    const switchKey: boolean = true; // временно
    if ( switchKey ) { // временное условие

      const {
        UserMenuItemsCollection,
        DroppedMenuButtonClickedId,
        isMenuOpenedOnSmallScreen,
        isPageMenuItemActive,

        changeDroppedMenuClickedId,
        sendLogOutToAPI,
        switchMenuOnSmallScreens,
        switchPageMenuItemActive
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

      const isMultiplePageMenuItem = (to: string): boolean => {
        const items: string[] = [
          'devices',          
        ];
        let key: boolean = false;
        items.forEach((e) => {
          if ( e === to ) {
            key = true;
          }
        });
        return key;
      };

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

      /**
       * Отправляет в Store команду на смену значения ключа,
       * который используется для выбора стиля отображения 
       * пункта меню: активное поле и неактивное поле (по умолчанию).
       *
       * @return {undefined}
       */

      const pageMenuItemActiveHandler =
      ( e: React.MouseEvent<HTMLLIElement> ) => {
        switchPageMenuItemActive();
      }


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
              {mainMenu.map((e, i) => {
                if ( isMultiplePageMenuItem(e.to) ) {
                  console.log(e.to, '- с вложенным меню');
                  return (
                    <div key={i}></div>
                  );
                } else {
                  console.log(e.to, '- без вложенного меню');
                  return (
                    <PageMenuItem
                      key={i}
                      onClick={pageMenuItemActiveHandler}
                      isPageMenuItemActive={isPageMenuItemActive}
                    >
                      <PageMenuItemLink
                        to={'/' + e.to}
                        title={e.value}
                      >
                        {e.value}
                      </PageMenuItemLink>
                    </PageMenuItem>
                  );
                }
              })}
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
                  component={OverviewConnected} 
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
                <Route 
                  exact path={'/'}
                  component={OverviewConnected} 
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
      // const {
      //   UserMenuItemsCollection,
      //   isDevicesMenuOpened,
      //   isMainMenuOpened,
      //   doMainMenuOnSmallScreenSwitch,
      //   doDevicesMenuOnBigScreenSwitch,
      //   doDevicesMenuOnMiddleScreenSwitch,
      //   doDevicesMenuOnSmallScreenSwitch,
      //   doBothMenuOnSmallScreenOff,
      //   sendLogOutToAPI,
      //   DroppedMenuButtonClickedId,      
      //   changeDroppedMenuClickedId,
      // } = props;
      // /* Обработчики событий */
      // const doOpenMainMenuHandler = () => {
      //   doMainMenuOnSmallScreenSwitch();
      // }

      // const mainMenuFakeLinkHandler =
      // (e: React.MouseEvent<HTMLDivElement>) => {
      //   if ( e.currentTarget.clientWidth === 60 ) {
      //     if ( window.innerWidth < 768 ) {
      //       doDevicesMenuOnSmallScreenSwitch();
      //     } else {
      //       doDevicesMenuOnMiddleScreenSwitch();
      //     }
      //   } else {
      //     doDevicesMenuOnBigScreenSwitch();
      //   }
      // };

      // const devicesMenuLinkHandler = 
      // (e: React.MouseEvent<HTMLLinkElement>) => {
      //    if ( e.currentTarget.clientWidth !== 215 ) {
      //     if ( window.innerWidth < 768 ) {
      //       doBothMenuOnSmallScreenOff();
      //     } else {
      //       doDevicesMenuOnMiddleScreenSwitch();
      //     }
      //   }
      // };

      // const logOutHandler = () => {
      //   const payload: LogOunInterface = {
      //     step: 'exit',
      //   };
      //   sendLogOutToAPI(payload);
      // };

      return null;
      // (
      //   <MainLayout>
      //     <MainMenu
      //       onSmallScreen={isMainMenuOpened.onSmallScreen}
      //     >
      //       <SmallMenuButton 
      //         onClick={doOpenMainMenuHandler}
      //         onSmallScreen={isMainMenuOpened.onSmallScreen}
      //         id={'smallMenuButton'} 
      //       />

      //       <MainMenuLogoWrapper>
      //         <MainMenuLogo>
      //           <UserMenuAnchor 
      //             onClick={(e) => 
      //               DroppedMenu(
      //                 e, 
      //                 DroppedMenuButtonClickedId, 
      //                 changeDroppedMenuClickedId
      //               )
      //             }
      //             data-button-id={'20'}
      //           >
      //             <UserMenuAnchorSpan
      //               isClicked={DroppedMenuButtonClickedId === '20'}
      //             >
      //               { UserMenuItemsCollection.user[0].login }                  
      //             </UserMenuAnchorSpan>
      //           </UserMenuAnchor>              
      //           <UserMenuLayout
      //             isClicked={DroppedMenuButtonClickedId === '20'}
      //           >
      //             {UserMenuItemsCollection.links.map((e, i) => (
      //               <UserMenuItem key={i}>
      //                 <UserMenuLink
      //                   to={'/' + e.to}
      //                   title={e.value}
      //                   onClick={
      //                     (e.to === 'exit') ? logOutHandler : null
      //                   }
      //                 >
      //                   <UserMenuLinkSpan>
      //                     { e.value }
      //                   </UserMenuLinkSpan>
      //                 </UserMenuLink>
      //               </UserMenuItem>
      //             ))}
      //           </UserMenuLayout>              
      //         </MainMenuLogo>
      //       </MainMenuLogoWrapper>
            
      //       <MainMenuLayout>
      //         {mainMenu.map((e, i) => {
      //           if ( e.to !== 'devices' ) {
      //             return (
      //               <MainMenuItem key={i}>
      //                 <MainMenuLink
      //                   to={'/' + e.to}
      //                   activeClassName={'activeMainMenuItem'}
      //                   title={e.value}
      //                 >
      //                   <MainMenuLinkSpan icon={ e.icon }>
      //                     { e.value }
      //                   </MainMenuLinkSpan>
      //                 </MainMenuLink>
      //               </MainMenuItem>
      //             );
      //           } else {
      //             return (
      //               <MainMenuItem key={i}>
      //                 <div onClick={mainMenuFakeLinkHandler}>
      //                   <MainMenuFakeLink
      //                     onBigScreen={
      //                       isDevicesMenuOpened.onBigScreen
      //                     }
      //                     onMiddleScreen={
      //                       isDevicesMenuOpened.onMiddleScreen
      //                     }
      //                     onSmallScreen={
      //                       isDevicesMenuOpened.onSmallScreen
      //                     }
      //                   >
      //                     <MainMenuLinkSpan
      //                       icon={ e.icon }
      //                     >
      //                       { e.value }
      //                     </MainMenuLinkSpan>
      //                   </MainMenuFakeLink>
      //                 </div>
      //                 <DevicesMenuLayout
      //                   onBigScreen={
      //                     isDevicesMenuOpened.onBigScreen
      //                   }
      //                   onMiddleScreen={
      //                     isDevicesMenuOpened.onMiddleScreen
      //                   }
      //                   onSmallScreen={
      //                     isDevicesMenuOpened.onSmallScreen
      //                   }
      //                 >
      //                   <MainMenuItem>
      //                     <DevicesMenuLink
      //                       to={'/devices'}
      //                       activeClassName={'activeDevicesMenuItem'}
      //                       title={'Все устройства'}
      //                       onClick={devicesMenuLinkHandler}
      //                     >
      //                       <DevicesMenuLinkSpan
      //                         icon={ 'f069' }
      //                       >
      //                         { 'Все устройства' }
      //                       </DevicesMenuLinkSpan>
      //                     </DevicesMenuLink>
      //                   </MainMenuItem>
      //                   {devicesMenu.map((e, i) => {
      //                     return (
      //                       <MainMenuItem key={i}>
      //                         <DevicesMenuLink
      //                           to={'/' + e.to}
      //                           activeClassName={
      //                             'activeDevicesMenuItem'
      //                           }
      //                           title={e.value}
      //                           onClick={devicesMenuLinkHandler}
      //                         >
      //                           <DevicesMenuLinkSpan
      //                             icon={ e.icon }
      //                           >
      //                             {e.value}
      //                           </DevicesMenuLinkSpan>
      //                         </DevicesMenuLink>
      //                       </MainMenuItem>
      //                     );
      //                   })}
      //                 </DevicesMenuLayout>
      //               </MainMenuItem>
      //             )
      //           }
      //         })}
      //       </MainMenuLayout>
      //     </MainMenu>
      //     <MainPage onSmallScreen={isMainMenuOpened.onSmallScreen}>
      //       <MainTop>
      //         <MainTopExitWrapper>
      //           <MainTopExitLink
      //             to={'/'}
      //             onClick={logOutHandler}
      //           >
      //             {'Выход'}
      //           </MainTopExitLink>
      //         </MainTopExitWrapper>
      //       </MainTop>
      //       <MainContent>
      //         <Switch>
      //           <Route
      //             exact path="/overview"
      //             component={OverviewConnected} 
      //           />
      //           <Route
      //             exact path={'/devices'}
      //             render={()=> (
      //               <DevicesConnected />
      //             )} 
      //           />
      //           {devicesMenu.map((e, i) => {
      //             const item: DashboardInterface['dash_id']['dashboard_id'] = 
      //               e.to;
      //             return (
      //               <Route 
      //                 key={i}
      //                 exact path={'/' + e.to}
      //                 render={() => (
      //                   <DashboardConnected id={item} />
      //                 )}
      //               />
      //             );
      //           })}
      //           <Route 
      //             exact path={'/'}
      //             component={OverviewConnected} 
      //           />
      //         </Switch>
      //       </MainContent>
      //     </MainPage>
      //   </MainLayout>
      // );
    }
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