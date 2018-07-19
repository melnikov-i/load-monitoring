/**
 * PageRouter -- компонент, который содержит маршруты ко всем вложенным компонентам.
 */
import * as React from 'react';
import { Route, Switch, Redirect, RouteComponentProps } from 'react-router-dom';

import NotificationPage from '@src/components/notificationPage';

interface PageRouterProps extends RouteComponentProps<void> {
  switchPageMenuSimpleItemActive: (payload: string) => any,
}

export const PageRouter: React.SFC<PageRouterProps> = (props) => {
  const { switchPageMenuSimpleItemActive } = props;
  
  const notify = (page: string) => (<NotificationPage
    hint={'компонент ' + page + ' находится на стадии разработки.'}
    type={'error'}
    callback={() => {
      switchPageMenuSimpleItemActive('30');
    }} />);
  
  const notFound = () => (<NotificationPage
    hint={'Страница не найдена.'}
    type={'error'}
    callback={() => {
      switchPageMenuSimpleItemActive('30');
    }} />);

  return (
    <Switch>
      <Route exact path={"/overview"} render={() => (notify('overview'))} />
      <Route exact path={"/dashboards"} render={() => (notify('dashboards'))} />
      <Route exact path={'/devices'} render={() => (notify('devices'))} />
      <Route exact path={'/messages'} render={() => (notify('messages'))} />
      <Route exact path={'/users'} render={() => (notify('users'))} />
      <Route exact path={'/options'} render={() => (notify('options'))} />
      <Route exact path={'/agent_update'} render={() => (notify('agent_update'))} />
      <Route exact path={'/backups'} render={() => (notify('backups'))} />
      <Route exact path={'/'} render={() => <Redirect to={'/overview'} />} />
      <Route path={'/'} render={() => (notFound())} />
      {/* {devicesMenu.map((e, i) => {
        return (
          <Route
            key={'devicesMenu' + i}
            exact path={'/' + e.to}
            // <DashboardConnected id={e.to} />
            render={() => (
              null
            )}
          />
        );
      })} */}
    </Switch>
  );
};
