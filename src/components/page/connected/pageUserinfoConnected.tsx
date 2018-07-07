import { bindActionCreators } from 'redux';
import { connect, MapStateToPropsParam, MapDispatchToPropsParam } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/core/redux';
import { withRouter } from 'react-router-dom';

import { PageUserinfo } from '../components';
import { syncActionCreators } from '@src/core/redux/page';
import { asyncActionCreators } from '@src/core/redux/login';
import { IUser } from '@src/core/interfaces';

interface StateProps {
  droppedMenuItemId: string,
  userinfo: IUser,
}

interface DispatchProps {
  changeDroppedMenuItemID: (payload: string) => any,
  sendLogoutToApi: () => any,
}

interface OwnProps {

}

const mapStateToProps:
  MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    droppedMenuItemId: (state: RootState) => state.page.droppedMenuItemId,
    userinfo: (state: RootState) => state.page.userinfo,
  });

const mapDispatchToProps:
  MapDispatchToPropsParam<DispatchProps, OwnProps> =
  (dispatch: Dispatch) => bindActionCreators({
    changeDroppedMenuItemID: syncActionCreators.changeDroppedMenuItemID,
    sendLogoutToApi: asyncActionCreators.sendLogoutToApi,
  }, dispatch);

export const PageUserinfoConnected =
  withRouter(connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps, mapDispatchToProps)(PageUserinfo)
  );
