import * as React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import {
  MainMenuLinksInterface,
  UserMenuInterface,
  DashboardInterface,
  LogOunInterface,
  DroppedMenuButtonClickedType,
} from '@src/interfaces';

import { Spinner } from '@src/components';
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
  PageSubMenuCloseAnchor,
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
  /* Ключ состояния составного пункта основного меню */
  PageMenuItemMultiActive: string,
  /* Метод в actions, изменяющий идентифкатор PageMenuItemActive */
  switchPageMenuItemActive: ( payload: string ) => any,
  /* Метод в action, изменяющий состояние ключа PageMenuItemMultiActive */
  switchPageMenuItemMultiActive: ( payload: string ) => any,
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
      PageMenuItemMultiActive,

      changeDroppedMenuClickedId,
      sendLogOutToAPI,
      switchMenuOnSmallScreens,
      switchPageMenuItemActive,
      switchPageMenuItemMultiActive
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
     * Отправляет в Store идентификатор активного простого элемента
     * основного меню.
     *
     * @param {React.MouseEvent<T>} e
     * @return {undefined}
     */

    type MouseEventGenericType = 
      | HTMLLIElement
      | HTMLUListElement
      | HTMLAnchorElement;

    const PageMenuItemActiveHandler =
    ( e: React.MouseEvent<MouseEventGenericType> ) => {
      const current: string = 
        String(e.currentTarget.getAttribute('data-item-id'));
      switchPageMenuItemActive(current);
    };


    /**
     * Отправляет в Store идентификатор активного составного элемента
     * основного меню.
     *
     * @param {React.MouseEvent<T>} e
     * @return {undefined}
     */

    const PageMenuItemMultiActiveHandler =
    ( e: React.MouseEvent<MouseEventGenericType> ) => {
      const current: string = 
        String(e.currentTarget.getAttribute('data-item-id'));
      if ( PageMenuItemMultiActive === current ) {
        switchPageMenuItemMultiActive('');
      } else {
        switchPageMenuItemMultiActive(current);
      }
    };

    /**
     * Возвращает стиль активного меню для NavLink. Необходим для показа
     * активного элемента меню согласно react-router до того, как будет нажат
     * какой-нибудь пункт меню (сразу после загрузки страницы).
     *
     * @return {Object}
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
    };


    /**
     * Возвращает коллекцию с элементами подменю для текущего элемента
     * основного меню.
     *
     * @param {string} to
     * @return {Array}
     */

    const getSubMenu = (to: string) => {
      switch ( to ) {
        case 'devices': return devicesMenu;
        default: return [];
      }
    };

    /**
     * Возвращает значение пункта подменю, не входящего в
     * коллекцию элементов подменю.
     *
     * @param {string} to
     * @return {string}
     */

    const getSubMenuTitle = ( to: string ) => {
      switch ( to ) {
        case 'devices': return 'Все устройства';
        case 'dashboards': return 'Все дашборды';
        default: return '';
      }
    };

    /**
     * Возвращает индекс активного подменю на основе поля e.to
     * в цикле перебора элементов подменю
     *
     * @param {string} to
     * @return {string}
     */

    const getSubMenuIndex = ( to: string ) => {
      switch ( to ) {
        case 'devices': return '4';
        case 'dashboards': return '5';
        default: return '4'
      }
    }


    return (
      <PageLayout>
        <PageMenu
          isMenuOpenedOnSmallScreen={isMenuOpenedOnSmallScreen}
        >
          <PageSmallMenuAnchor
            /* Кнопка вызова меню на малом экране */
            onClick={smallScreenMenuOpenedHandler}
            isMenuOpenedOnSmallScreen={isMenuOpenedOnSmallScreen}
          />
          <PageLogoWrapper>
            <PageLogo>
              <UserMenuAnchor
                /* Кнопка вызова меню пользователя */ 
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
                /* Меню пользователя */
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
                /**
                 * Построение основного меню страницы на основе коллекции элементов 
                 * основного меню.
                 */

                if ( isMultiplePageMenuItem(e.to) ) {
                  /* Пункт меню содержит подменю */
                  
                  /* Получение коллекции элементов подменю */
                  const subMenu: MainMenuLinksInterface[] = getSubMenu(e.to);
                  /* Вычисление высоты подменю для плавного выпадания */
                  const subMenuHeight: string = 
                    ( subMenu.length !== 0 )
                      ? String(subMenu.length * 32 + 42) : '42';

                  return (
                    <PageMenuItem
                      key={i}
                      isActive={PageMenuItemMultiActive === '3' + i}
                    >
                      {/* Пункт основного меню */}
                      <PageMenuItemAnchor
                        icon={e.icon}
                        data-item-id={'3' + i}
                        onClick={PageMenuItemMultiActiveHandler}
                        isActive={PageMenuItemMultiActive === '3' + i}
                      >
                        {e.value}
                      </PageMenuItemAnchor>
                      {/* Подменю */}
                      <PageSubMenuLayout
                        isActive={PageMenuItemMultiActive === '3' + i}
                        subMenuHeight={subMenuHeight}
                      >
                        <PageSubMenuCloseAnchor
                          isActive={PageMenuItemMultiActive === '3' + i}
                          onClick={PageMenuItemMultiActiveHandler}
                        />
                        {/* Пункт подменю, не входящий в коллекцию */}
                        <PageSubMenuItem
                          key={i}
                          onClick={PageMenuItemActiveHandler}
                          data-item-id={getSubMenuIndex(e.to) + '0'}
                          isActive={
                            PageMenuItemActive === getSubMenuIndex(e.to) + '0'
                          }
                        >
                          <PageSubMenuAnchor
                            to={'/' + e.to}
                            title={getSubMenuTitle(e.to)}
                            activeStyle={{
                              color: '#fff',
                            }}
                            icon={'f069'}
                          >{getSubMenuTitle(e.to)}</PageSubMenuAnchor>
                        </PageSubMenuItem>
                        {
                          subMenu.map((e, i) => {
                            /* Пункты подменю из коллекции */
                            return (
                              <PageSubMenuItem
                                key={i}
                                onClick={PageMenuItemActiveHandler}
                                data-item-id={'4' + (i + 1)}
                                isActive={
                                  PageMenuItemActive === getSubMenuIndex(e.to) + (i + 1)
                                }
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
                  /* Простой пункт основного меню */
                  return (
                    <PageMenuItem
                      key={i}
                      isActive={PageMenuItemActive === '3' + i}
                    >
                      <PageMenuItemLink
                        onClick={PageMenuItemActiveHandler}
                        data-item-id={'3' + i}
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
    // return null;
    return (
      <Spinner
        width={3}
        color={'#2f4050'}
        bgColor={'#f3f3f4'}
      />
    );
  }
};