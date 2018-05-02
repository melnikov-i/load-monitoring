      const {
        UserMenuItemsCollection,
        isDevicesMenuOpened,
        isMainMenuOpened,
        doMainMenuOnSmallScreenSwitch,
        doDevicesMenuOnBigScreenSwitch,
        doDevicesMenuOnMiddleScreenSwitch,
        doDevicesMenuOnSmallScreenSwitch,
        doBothMenuOnSmallScreenOff,
        sendLogOutToAPI,
        DroppedMenuButtonClickedId,      
        changeDroppedMenuClickedId,
      } = props;
      /* Обработчики событий */
      const doOpenMainMenuHandler = () => {
        doMainMenuOnSmallScreenSwitch();
      }

      const mainMenuFakeLinkHandler =
      (e: React.MouseEvent<HTMLDivElement>) => {
        if ( e.currentTarget.clientWidth === 60 ) {
          if ( window.innerWidth < 768 ) {
            doDevicesMenuOnSmallScreenSwitch();
          } else {
            doDevicesMenuOnMiddleScreenSwitch();
          }
        } else {
          doDevicesMenuOnBigScreenSwitch();
        }
      };

      const devicesMenuLinkHandler = 
      (e: React.MouseEvent<HTMLLinkElement>) => {
         if ( e.currentTarget.clientWidth !== 215 ) {
          if ( window.innerWidth < 768 ) {
            doBothMenuOnSmallScreenOff();
          } else {
            doDevicesMenuOnMiddleScreenSwitch();
          }
        }
      };

      const logOutHandler = () => {
        const payload: LogOunInterface = {
          step: 'exit',
        };
        sendLogOutToAPI(payload);
      };

      return (
        <MainLayout>
          <MainMenu
            onSmallScreen={isMainMenuOpened.onSmallScreen}
          >
            // <SmallMenuButton 
            //   onClick={doOpenMainMenuHandler}
            //   onSmallScreen={isMainMenuOpened.onSmallScreen}
            //   id={'smallMenuButton'} 
            // />

            // <MainMenuLogoWrapper>
            //   <MainMenuLogo>
            //     <UserMenuAnchor 
            //       onClick={(e) => 
            //         DroppedMenu(
            //           e, 
            //           DroppedMenuButtonClickedId, 
            //           changeDroppedMenuClickedId
            //         )
            //       }
            //       data-button-id={'20'}
            //     >
            //       <UserMenuAnchorSpan
            //         isClicked={DroppedMenuButtonClickedId === '20'}
            //       >
            //         { UserMenuItemsCollection.user[0].login }                  
            //       </UserMenuAnchorSpan>
            //     </UserMenuAnchor>              
            //     <UserMenuLayout
            //       isClicked={DroppedMenuButtonClickedId === '20'}
            //     >
            //       {UserMenuItemsCollection.links.map((e, i) => (
            //         <UserMenuItem key={i}>
            //           <UserMenuLink
            //             to={'/' + e.to}
            //             title={e.value}
            //             onClick={
            //               (e.to === 'exit') ? logOutHandler : null
            //             }
            //           >
            //             <UserMenuLinkSpan>
            //               { e.value }
            //             </UserMenuLinkSpan>
            //           </UserMenuLink>
            //         </UserMenuItem>
            //       ))}
            //     </UserMenuLayout>              
            //   </MainMenuLogo>
            // </MainMenuLogoWrapper>
            
            <MainMenuLayout>
              {mainMenu.map((e, i) => {
                if ( e.to !== 'devices' ) {
                  return (
                    <MainMenuItem key={i}>
                      <MainMenuLink
                        to={'/' + e.to}
                        activeClassName={'activeMainMenuItem'}
                        title={e.value}
                      >
                        <MainMenuLinkSpan icon={ e.icon }>
                          { e.value }
                        </MainMenuLinkSpan>
                      </MainMenuLink>
                    </MainMenuItem>
                  );
                } else {
                  return (
                    <MainMenuItem key={i}>
                      <div onClick={mainMenuFakeLinkHandler}>
                        <MainMenuFakeLink
                          onBigScreen={
                            isDevicesMenuOpened.onBigScreen
                          }
                          onMiddleScreen={
                            isDevicesMenuOpened.onMiddleScreen
                          }
                          onSmallScreen={
                            isDevicesMenuOpened.onSmallScreen
                          }
                        >
                          <MainMenuLinkSpan
                            icon={ e.icon }
                          >
                            { e.value }
                          </MainMenuLinkSpan>
                        </MainMenuFakeLink>
                      </div>
                      <DevicesMenuLayout
                        onBigScreen={
                          isDevicesMenuOpened.onBigScreen
                        }
                        onMiddleScreen={
                          isDevicesMenuOpened.onMiddleScreen
                        }
                        onSmallScreen={
                          isDevicesMenuOpened.onSmallScreen
                        }
                      >
                        // <MainMenuItem>
                        //   <DevicesMenuLink
                        //     to={'/devices'}
                        //     activeClassName={'activeDevicesMenuItem'}
                        //     title={'Все устройства'}
                        //     onClick={devicesMenuLinkHandler}
                        //   >
                        //     <DevicesMenuLinkSpan
                        //       icon={ 'f069' }
                        //     >
                        //       { 'Все устройства' }
                        //     </DevicesMenuLinkSpan>
                        //   </DevicesMenuLink>
                        // </MainMenuItem>
                        // {devicesMenu.map((e, i) => {
                        //   return (
                        //     <MainMenuItem key={i}>
                        //       <DevicesMenuLink
                        //         to={'/' + e.to}
                        //         activeClassName={
                        //           'activeDevicesMenuItem'
                        //         }
                        //         title={e.value}
                        //         onClick={devicesMenuLinkHandler}
                        //       >
                        //         <DevicesMenuLinkSpan
                        //           icon={ e.icon }
                        //         >
                        //           {e.value}
                        //         </DevicesMenuLinkSpan>
                        //       </DevicesMenuLink>
                        //     </MainMenuItem>
                        //   );
                        // })}
                    //   </DevicesMenuLayout>
                    // </MainMenuItem>
                  )
                }
              })}
            </MainMenuLayout>
          </MainMenu>
    //       <MainPage onSmallScreen={isMainMenuOpened.onSmallScreen}>
    //         <MainTop>
    //           <MainTopExitWrapper>
    //             <MainTopExitLink
    //               to={'/'}
    //               onClick={logOutHandler}
    //             >
    //               {'Выход'}
    //             </MainTopExitLink>
    //           </MainTopExitWrapper>
    //         </MainTop>
    //         <MainContent>
    //           <Switch>
    //             <Route
    //               exact path="/overview"
    //               component={OverviewConnected} 
    //             />
    //             <Route
    //               exact path={'/devices'}
    //               render={()=> (
    //                 <DevicesConnected />
    //               )} 
    //             />
    //             {devicesMenu.map((e, i) => {
    //               const item: DashboardInterface['dash_id']['dashboard_id'] = 
    //                 e.to;
    //               return (
    //                 <Route 
    //                   key={i}
    //                   exact path={'/' + e.to}
    //                   render={() => (
    //                     <DashboardConnected id={item} />
    //                   )}
    //                 />
    //               );
    //             })}
    //             <Route 
    //               exact path={'/'}
    //               component={OverviewConnected} 
    //             />
    //           </Switch>
    //         </MainContent>
    //       </MainPage>
    //     </MainLayout>
    //   );
    // }