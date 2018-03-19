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
  PageMenuItemAnchor,
  PageSubMenuLayout,
  PageSubMenuItem,
  PageSubMenuAnchor,




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
  /* Ключ, указывающий, что основное меню было запрошено с бэкэнда */
  MainMenuWasRequestedFromAPI: boolean,
  /* Коллекция элементов основного меню */
  MainMenuItemsCollection: MainMenuLinksInterface[],
  /* Коллекция элементов пользовательского меню */
  UserMenuItemsCollection: UserMenuInterface,
  /* Ключ, указывающий, что меню устройств было запрошено с бэкэнда */
  DevicesMenuWasRequestedFromAPI: boolean,
  /* Коллекция элементов меню устройств */
  DevicesMenuItemsCollection: MainMenuLinksInterface[],
  /* Запускает в actions метод запроса основного меню с бэкэнда */
  makeMainMenuRequestToAPI: () => any,
  /* Запускает в actions метод запросаменю устройств с бэкэнда */
  makeDevicesMenuRequestToAPI: () => any,
  /* Идентификатор активированного выпадающего списка */
  DroppedMenuButtonClickedId: DroppedMenuButtonClickedType,
  /* Ключ, задающий поведение ширины основного меню на различных экранах */
  isMenuOpenedOnSmallScreen: boolean,
  /* Метод в actions, меняющий значение ключа isMenuOpenedOnSmallScreen */
  switchMenuOnSmallScreens: () => any,
  /* Метод в actions, меняющий значение DroppedMenuButtonClickedId */
  changeDroppedMenuClickedId: 
  (payload: DroppedMenuButtonClickedType) => any,
  /* Запускает в actions метод, посылающий в бэкэнд событие выхода */
  sendLogOutToAPI: (payload: LogOunInterface) => any,
  /* Идентификатор активного составного пункта основного меню */
  PageMenuItemActive: string,
  /* Метод в actions, изменяющий идентифкатор PageMenuItemActive */
  switchPageMenuItemActive: ( payload: string ) => any,


  
  isDevicesMenuOpened: IsOpenedInterface,
  isMainMenuOpened: IsOpenedInterface,
  doMainMenuOnSmallScreenSwitch: () => any,
  doDevicesMenuOnBigScreenSwitch: () => any,
  doDevicesMenuOnMiddleScreenSwitch: () => any,
  doDevicesMenuOnSmallScreenSwitch: () => any,
  doBothMenuOnSmallScreenOff: () => any,

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

  
  /**
   * Выполняет проверку наличия основного меню в Store.
   * при отсутствии запускает action makeMainMenuRequestToAPI(),
   * который выполняет запрос меню в actions. Возвращает коллекцию
   * элементов основного меню.
   *
   * @return {MainMenuLinksInterface[]}
   */

  const getMainMenu = (): MainMenuLinksInterface[] => {
    if ( !MainMenuWasRequestedFromAPI ) {
      makeMainMenuRequestToAPI();
    }
    return MainMenuItemsCollection;
  };

  /* Получает и хранит коллекцию элементов основного меню */
  const mainMenu = getMainMenu();

  /**
   * Выполняет проверку наличия меню устройств в Store.
   * при отсутствии запускает action makeDevicesMenuRequestToAPI(),
   * который выполняет запрос меню в actions. Возвращает коллекцию
   * элементов меню устройств.
   *
   * @return {MainMenuLinksInterface[]}
   */

  const getDevicesMenu = (): MainMenuLinksInterface[] => {
    if ( !DevicesMenuWasRequestedFromAPI ) {
      makeDevicesMenuRequestToAPI();
    }
    return DevicesMenuItemsCollection;
  };

  /* Получает и хранит коллекцию элементов меню устройств */
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
      PageMenuItemActive,

      changeDroppedMenuClickedId,
      sendLogOutToAPI,
      switchMenuOnSmallScreens,
      switchPageMenuItemActive
    } = props;


    /* Вспомогательные функции */

    /**
     * Проверяет, содержит ли пункт меню вложенное подменю.
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
        'dashboards',
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
     * @param {React.MouseEvent<T>} e
     * @return {undefined}
     */

    const smallScreenMenuOpenedHandler = 
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      switchMenuOnSmallScreens();
    };


    /**
     * Отправляет в Store идентификатор активного элемента
     * основного меню.
     *
     * @param {React.MouseEvent<T>} e
     * @return {undefined}
     */

    type MouseEventGenericType = HTMLLIElement & HTMLUListElement;

    const PageMenuItemActiveHandler =
    ( e: React.MouseEvent<MouseEventGenericType> ) => {
      const current: string = 
        String(e.currentTarget.getAttribute('data-item-id'));
      switchPageMenuItemActive(current);
    }

    /**
     *
     *
     * @return {undefined}
     */

    const PageMenuItemActiveStyle = () => {
      if ( PageMenuItemActive !== '') 
        return {};
      return {
        color: '#fff',
        backgroundColor: '#293846',
        borderLeft: '4px solid #19aa8d',
        transition: 'border-left 0.4s',
      };
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
            {
              mainMenu.map((e, i) => {
                console.log('e:', e);
                if ( isMultiplePageMenuItem(e.to) ) {
                  return (
                    <PageMenuItem
                      key={i}
                      onClick={PageMenuItemActiveHandler}
                      data-item-id={'3' + i}
                      isActive={PageMenuItemActive === '3' + i}
                    >
                      <PageMenuItemAnchor icon={e.icon}>
                        {e.value}
                      </PageMenuItemAnchor>
                      <PageSubMenuLayout
                        onClick={PageMenuItemActiveHandler}
                        data-item-id={'3' + i}
                        isActive={PageMenuItemActive === '3' + i}
                      >
                        {
                          devicesMenu.map((e, i) => {
                            return (
                              <PageSubMenuItem
                                key={i}
                                onClick={PageMenuItemActiveHandler}
                                data-item-id={'4' + i}
                                isActive={PageMenuItemActive === '4' + i}
                              >
                                <PageSubMenuAnchor
                                  to={'/' + e.to}
                                  title={e.value}
                                  activeStyle={{
                                    color: '#fff',
                                  }}
                                  icon={e.icon}
                                >{e.value}</PageSubMenuAnchor>
                              </PageSubMenuItem>
                            );
                          })
                        }
                      </PageSubMenuLayout>
                    </PageMenuItem>
                  );
                } else {
                  return (
                    <PageMenuItem
                      key={i}
                      onClick={PageMenuItemActiveHandler}
                      data-item-id={'3' + i}
                      isActive={PageMenuItemActive === '3' + i}
                    >
                      <PageMenuItemLink
                        icon={e.icon}
                        to={'/' + e.to}
                        activeStyle={PageMenuItemActiveStyle()}
                        title={e.value}
                      >{e.value}</PageMenuItemLink>
                    </PageMenuItem>
                  );                  
                }
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
                   * При обращении к строго корню сайта, запрос 
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